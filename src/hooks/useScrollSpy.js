// src/hooks/useScrollSpy.js
import { useEffect, useState, useRef } from "react";
import scrollController from "../utils/scroll-controller";

/**
 * useScrollSpy(ids = [], options)
 *
 * - Observes sections (by id) and returns the currently-active section id.
 * - When a programmatic scroll triggers a "scrollSpy:start" event (Sidebar now does that before scrolling),
 *   the hook immediately sets a manual lock using the provided duration (or controller duration).
 * - When "scrollSpy:setActive" fires (after the scroll), the hook confirms the active id and optionally
 *   keeps a short post-lock to avoid immediate flip.
 */
export default function useScrollSpy(ids = [], { threshold = 0.5 } = {}) {
  const [activeId, setActiveId] = useState();
  const manualLockRef = useRef({ id: null, until: 0 });
  const observerRef = useRef(null);
  const lastCssOffset = useRef(null);

  const getScrollOffset = () => {
    try {
      const v = getComputedStyle(document.documentElement).getPropertyValue("--scroll-offset");
      if (!v) return 0;
      const px = parseInt(v.trim().replace("px", ""), 10);
      return Number.isNaN(px) ? 0 : px;
    } catch (e) {
      return 0;
    }
  };

  useEffect(() => {
    if (!ids || !ids.length) return;

    let disconnected = false;

    const createObserver = () => {
      const headerOffset = getScrollOffset() || 0;
      const thresholds = [0, 0.1, 0.25, 0.5, 0.75, 1];

      if (observerRef.current && typeof observerRef.current.disconnect === "function") {
        observerRef.current.disconnect();
      }

      const io = new IntersectionObserver((entries) => {
        if (disconnected) return;

        // If manual lock still active, ignore IO updates.
        if (manualLockRef.current && manualLockRef.current.until > Date.now()) {
          return;
        }

        const mapped = entries.map((e) => ({
          id: e.target.id,
          isIntersecting: e.isIntersecting,
          ratio: e.intersectionRatio,
          top: e.boundingClientRect.top,
        }));

        // Pick intersecting entry with the largest intersectionRatio
        const intersecting = mapped.filter((m) => m.isIntersecting);
        if (intersecting.length) {
          intersecting.sort((a, b) => b.ratio - a.ratio);
          const chosen = intersecting[0].id;
          if (chosen !== activeId) setActiveId(chosen);
          return;
        }

        // Fallback: pick the section whose top is closest to the headerOffset
        mapped.sort((a, b) => Math.abs(a.top - headerOffset) - Math.abs(b.top - headerOffset));
        if (mapped[0] && mapped[0].id !== activeId) {
          setActiveId(mapped[0].id);
        }
      }, {
        root: null,
        rootMargin: `-${headerOffset}px 0px 0px 0px`,
        threshold: thresholds,
      });

      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) io.observe(el);
      });

      observerRef.current = io;
    };

    createObserver();
    lastCssOffset.current = getScrollOffset();

    // ---------- new: handle "start" event so we lock immediately ----------
    const onStart = (ev) => {
      const id = ev?.detail?.id;
      if (!id) return;

      // optimistic highlight immediately
      setActiveId(id);

      // prefer duration passed in event, otherwise ask controller
      let dur = 600;
      try {
        const reportedFromEvent = Number(ev?.detail?.duration) || 0;
        if (reportedFromEvent > 0) dur = reportedFromEvent;
        else if (scrollController && typeof scrollController.getLastDuration === "function") {
          const reported = Number(scrollController.getLastDuration()) || 0;
          if (reported > 0) dur = reported;
        } else if (scrollController && typeof scrollController._lastDuration === "number") {
          dur = scrollController._lastDuration || dur;
        }
      } catch (e) { /* ignore */ }

      const lockMs = Math.max(400, Math.round(dur * 1.2)); // 20% buffer minimal 400ms
      manualLockRef.current = { id, until: Date.now() + lockMs };
    };

    // Handle manual activation events (fired by Sidebar after a programmatic scroll completes)
    const onSetActive = (ev) => {
      const id = ev?.detail?.id;
      if (!id) return;

      setActiveId(id);

      // small post-lock to avoid immediate flip once scroll completes
      manualLockRef.current = { id, until: Date.now() + 200 };
    };

    // Also react to hash changes (back/forward)
    const onHash = () => {
      const h = window.location.hash.replace(/^#/, "");
      if (!h) return;
      setActiveId(h);
      // small lock so IO doesn't immediately override hash-based jumps
      manualLockRef.current = { id: h, until: Date.now() + 400 };
    };

    window.addEventListener("scrollSpy:start", onStart);
    window.addEventListener("scrollSpy:setActive", onSetActive);
    window.addEventListener("hashchange", onHash);

    // Observe style attribute changes on <html> to detect --scroll-offset changes
    const mo = new MutationObserver(() => {
      const now = getScrollOffset();
      if (now !== lastCssOffset.current) {
        lastCssOffset.current = now;
        createObserver();
      }
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["style"] });

    // expose a refresh helper for dev/debug
    window.__refreshScrollSpy = () => {
      try { createObserver(); } catch (e) {}
    };

    return () => {
      window.removeEventListener("scrollSpy:start", onStart);
      window.removeEventListener("scrollSpy:setActive", onSetActive);
      window.removeEventListener("hashchange", onHash);
      if (observerRef.current) observerRef.current.disconnect();
      if (mo) mo.disconnect();
      try { delete window.__refreshScrollSpy; } catch (e) {}
      disconnected = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join("|"), threshold]);

  return activeId;
}
