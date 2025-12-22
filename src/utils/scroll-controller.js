// src/utils/scroll-controller.js
// Cancelable, rAF-based smooth-scroller. Exposes a global singleton at window.__scrollController

class ScrollController {
    constructor() {
      this._rafId = 0;
      this._isAnimating = false;
      this._resolve = null;
      this._start = 0;
      this._startY = 0;
      this._targetY = 0;
      this._duration = 600;
    }
  
    isAnimating() {
      return this._isAnimating;
    }
  
    cancel() {
      if (this._rafId) {
        cancelAnimationFrame(this._rafId);
        this._rafId = 0;
      }
      this._isAnimating = false;
      if (this._resolve) {
        this._resolve(); // resolve pending promise so callers don't hang
        this._resolve = null;
      }
      // cleanup locks
      try {
        document.documentElement.classList.remove("scroll-locked");
        if (window.__scrollLockedUntil) delete window.__scrollLockedUntil;
      } catch (e) {}
    }
  
    getLastDuration() {
      return this._lastDuration || this._duration || 0;
    }
    /**
     * Smooth-scroll to targetY (document coordinate). Returns a Promise that resolves when done.
     * If called while animating, cancels the previous animation and starts the new one.
     * duration in ms (tune as needed).
     */
    scrollTo(targetY, duration = 650) {
      // normalize
      targetY = Math.max(0, Math.round(targetY));
      duration = Math.max(0, Number(duration) || 650);

      // remember the requested duration so other modules can read it
      this._lastDuration = duration;
  
      // cancel any existing animation
      if (this._isAnimating) {
        this.cancel();
      }
  
      // simple no-op if already at target
      const currentY = Math.round(window.pageYOffset);
      if (currentY === targetY) {
        return Promise.resolve();
      }
  
      // mark animating
      this._isAnimating = true;
      this._start = performance.now();
      this._startY = currentY;
      this._targetY = targetY;
      this._duration = duration;
  
      // set global sentinels for useScrollSpy and other code
      const now = Date.now();
      window.__lastManualScroll = now;
      window.__manualScrollIgnoreWindow = duration + 120; // a bit extra padding
      window.__scrollLockedUntil = now + duration + 120;
  
      // add CSS class to disable pointer interactions (if CSS added)
      try {
        document.documentElement.classList.add("scroll-locked");
      } catch (e) {}
  
      // return a promise resolving at animation end
      return new Promise((resolve) => {
        this._resolve = resolve;
  
        const step = (ts) => {
          const elapsed = Math.max(0, ts - this._start);
          const t = Math.min(1, elapsed / this._duration);
          // ease: smooth (sinusoidal)
          const eased = 0.5 - Math.cos(Math.PI * t) / 2;
          const y = Math.round(this._startY + (this._targetY - this._startY) * eased);
          window.scrollTo(0, y);
  
          if (t < 1) {
            this._rafId = requestAnimationFrame(step);
          } else {
            // finish
            this._rafId = 0;
            this._isAnimating = false;
            // small timeout to let layout settle then remove locks
            setTimeout(() => {
              try {
                document.documentElement.classList.remove("scroll-locked");
                if (window.__scrollLockedUntil && Date.now() >= window.__scrollLockedUntil) {
                  delete window.__scrollLockedUntil;
                }
              } catch (e) {}
            }, 50);
            const resolver = this._resolve;
            this._resolve = null;
            if (resolver) resolver();
          }
        };
  
        this._rafId = requestAnimationFrame(step);
      });
    }
  }
  
  if (!window.__scrollController) {
    window.__scrollController = new ScrollController();
  }
  // friendly alias for console / third-party scripts
  window.scrollController = window.__scrollController;
  
  export default window.__scrollController;
  
  