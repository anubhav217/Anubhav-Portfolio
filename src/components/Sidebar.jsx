// src/components/Sidebar.jsx
import React from "react";
import { motion } from "framer-motion";
import useScrollSpy from "../hooks/useScrollSpy";
import scrollController from "../utils/scroll-controller";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const NAV = [
  { id: "intro", label: "INTRODUCTION" },
  { id: "about", label: "ABOUT" },
  { id: "education", label: "EDUCATION" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "contact", label: "CONTACT" },
];

export default function Sidebar() {
  // stable id list for hook
  const sectionIds = NAV.map((n) => n.id);
  // hook returns the active section id (string or undefined)
  const active = useScrollSpy(sectionIds, { threshold: 0.6 });

  // safe getScrollOffset — use the fixed header height when available,
  // otherwise fall back to the CSS --scroll-offset but capped.
  const getScrollOffset = () => {
    try {
      // Try to detect a fixed header element (common selectors)
      const header =
        document.querySelector("header") ||
        document.querySelector(".site-header") ||
        document.querySelector(".topbar") ||
        document.querySelector(".app-header");

      if (header) {
        const h = Math.round(header.getBoundingClientRect().height) || 0;
        // Minimum sensible header height
        return Math.max(56, h);
      }

      // Fallback: read CSS var (scroll-offset) but cap it to avoid overshoot
      const v = getComputedStyle(document.documentElement).getPropertyValue("--scroll-offset");
      const px = parseInt(String(v || "0").trim().replace("px", ""), 10);
      if (Number.isNaN(px)) return 88; // safe default

      // Cap the hero-based offset to something reasonable for header compensation.
      // This prevents the hero height from making programmatic scrolls land too high.
      const CAP = Math.max(120, Math.round(Math.min(140, window.innerHeight * 0.12)));
      return Math.min(px, CAP);
    } catch (e) {
      return 88; // safe fallback
    }
  };

  const handleClick = async (id) => {
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
  
    const scrollOffset = getScrollOffset() || 0;
    const elementTop = Math.round(el.getBoundingClientRect().top + window.pageYOffset);
    const targetY = Math.max(0, Math.round(elementTop - scrollOffset));
  
    // 1) Start event — lock hook before scroll begins
    try {
      const requestedDuration = 650; 
      window.dispatchEvent(new CustomEvent("scrollSpy:start", { detail: { id, duration: requestedDuration } }));
    } catch (e) {}
  
    // 2) Smooth scroll
    try {
      await scrollController.scrollTo(targetY, 650);
    } catch (e) {
      window.scrollTo({ top: targetY, behavior: "auto" });
    }
  
    // 3) End event — confirm active and update hash
    try {
      window.dispatchEvent(new CustomEvent("scrollSpy:setActive", { detail: { id } }));
      history.replaceState(null, "", `#${id}`);
    } catch (e) {}
  
    // a11y
    const hadTabindex = el.hasAttribute("tabindex");
    if (!hadTabindex) el.setAttribute("tabindex", "-1");
    try { el.focus({ preventScroll: true }); } catch { el.focus(); }
    if (!hadTabindex) el.removeAttribute("tabindex");
  };
  

  // defensive isActive check: compare case-insensitively to avoid mismatch
  const isActiveFor = (id) => {
    if (!active || !id) return false;
    try {
      return String(active).toLowerCase() === String(id).toLowerCase();
    } catch (e) {
      return active === id;
    }
  };

  return (
    <aside
      className="w-64 max-w-[15.5rem] h-screen fixed left-0 top-0 border-r border-gray-200 p-4 flex flex-col justify-between overflow-hidden"
      aria-label="Sidebar"
    >
      <div className="flex-shrink-0 flex flex-col items-center text-center" style={{ minHeight: 0 }}>
        <img
          src="/assets/profile.jpg"
          alt="Anubhav Majumdar"
          className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shadow-sm ring-2 ring-white"
          style={{ display: "block", margin: "0 auto" }}
        />
        <h1 className="mt-3 text-lg md:text-xl lg:text-2xl font-serif text-gray-900 leading-tight">
          Anubhav Majumdar
        </h1>
        <p className="mt-1 text-[11px] md:text-xs text-gray-500">Software Engineer</p>
      </div>

      <nav className="mt-2" aria-label="Primary">
        <ul className="w-full">
          {NAV.map(({ id, label }) => {
            const isActive = isActiveFor(id);
            return (
              <li key={id} className="relative">
                {isActive && (
                  <motion.span
                    layoutId="sidebar-active"
                    className="absolute left-0 top-0 bottom-0 w-1 rounded bg-accent"
                    aria-hidden
                  />
                )}
                <button
                  type="button"
                  data-target={id}
                  onClick={() => handleClick(id)}
                  className={`relative z-10 w-full text-left px-1 py-[6px] rounded transition-colors duration-150 ${
                    isActive ? "text-accent font-semibold" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <span className="text-[11px] md:text-xs uppercase">{label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-2 flex-shrink-0 w-full">
        <div className="w-full flex items-center justify-center gap-4 text-gray-700">
          <a
            href="https://www.linkedin.com/in/anubhav-majumdar/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-900"
            title="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>

          <a href="mailto:anubhav.majumdar.in@gmail.com" aria-label="Email" className="hover:text-gray-900" title="Email">
            <HiOutlineMail className="w-5 h-5" />
          </a>

          <a href="https://github.com/anubhav217" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-gray-900" title="GitHub">
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
      </div>
    </aside>
  );
}
