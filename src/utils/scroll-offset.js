// src/utils/scroll-offset.js
// Computes --scroll-offset from the actual hero height (section#intro).
(function () {
  const HERO_SELECTOR = "#intro";
  const BREATHING_GAP = 16; // px

  function computeOffset() {
    try {
      const hero = document.querySelector(HERO_SELECTOR);
      if (!hero) {
        document.documentElement.style.setProperty('--scroll-offset', '96px');
        return;
      }
      const heroHeight = Math.ceil(hero.getBoundingClientRect().height);
      const offset = Math.max(0, heroHeight + BREATHING_GAP);
      document.documentElement.style.setProperty('--scroll-offset', `${offset}px`);
    } catch (err) {
      console.warn("scroll-offset.js: failed to compute hero offset", err);
    }
  }

  window.addEventListener("load", computeOffset, { once: true });
  window.addEventListener("resize", computeOffset);
  window.addEventListener("orientationchange", computeOffset);

  // in case you want to call it manually
  window.__setScrollOffset = computeOffset;

  // initial call immediately in case script loaded after DOM ready
  computeOffset();
})();
