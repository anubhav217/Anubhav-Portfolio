// src/components/Sidebar.jsx
import React from "react";
import { motion } from "framer-motion";
import useScrollSpy from "../hooks/useScrollSpy";
import scrollController from "../utils/scroll-controller";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const NAV = [
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "education", label: "EDUCATION" },
  { id: "contact", label: "CONTACT" },
];


export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
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
  
    // Close mobile menu when clicking a link
    setIsMobileMenuOpen(false);
  
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
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <aside
        className={`w-64 max-w-[15.5rem] h-screen fixed left-0 top-0 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 sm:p-6 flex flex-col overflow-y-auto transition-colors duration-200 z-40 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
        aria-label="Sidebar"
      >
      <div className="flex-shrink-0 flex flex-col items-center text-center pt-6 sm:pt-8" style={{ minHeight: 0 }}>
        <img
          src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
          alt="Anubhav Majumdar"
          className="w-28 h-28 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover shadow-sm ring-2 ring-white"
          style={{ 
            display: "block", 
            margin: "0 auto",
            objectPosition: "center 20%"
          }}
        />
        <h1 className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-gray-900 dark:text-gray-100 leading-tight">
          Anubhav Majumdar
        </h1>
        <p className="mt-1 sm:mt-2 text-[10px] sm:text-[11px] md:text-xs text-gray-500 dark:text-gray-400">Software Engineer</p>
      </div>

      <nav className="mt-6" aria-label="Primary">
        <ul className="w-full flex flex-col items-center">
          {NAV.map(({ id, label }) => {
            const isActive = isActiveFor(id);
            return (
              <li key={id} className="relative w-full">
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
                  className={`relative z-10 w-full text-center px-1 py-[6px] rounded transition-colors duration-150 ${
                    isActive ? "text-accent font-semibold" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                  }`}
                >
                  <span className="text-[11px] md:text-xs uppercase">{label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-6 flex flex-col gap-3 mb-4">
        {/* Download CV Button */}
        <div className="w-full">
          <a
            href={`${import.meta.env.BASE_URL}assets/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              w-full
              text-center
              px-4
              py-2
              border
              border-gray-300
              dark:border-gray-600
              rounded-md
              text-[11px]
              md:text-xs
              uppercase
              text-gray-600
              dark:text-gray-300
              hover:text-gray-900
              dark:hover:text-gray-100
              hover:border-gray-400
              dark:hover:border-gray-500
              bg-white
              dark:bg-gray-700
              transition-colors
              duration-150
            "
          >
            DOWNLOAD RESUME
          </a>
        </div>

        <div className="w-full flex items-center justify-center gap-5 text-gray-600 dark:text-gray-400 pb-2">
          <a
            href="https://www.linkedin.com/in/anubhav-majumdar/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-150"
            title="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>

          <a 
            href="mailto:anubhav.majumdar.in@gmail.com" 
            aria-label="Email" 
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-150" 
            title="Email"
          >
            <HiOutlineMail className="w-4 h-4" />
          </a>

          <a 
            href="https://github.com/anubhav217" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="GitHub" 
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-150" 
            title="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
        </div>
      </div>
    </aside>
    </>
  );
}
