"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navigation } from "@/data/portfolio";
import { ease } from "@/animations/variants";
import Brand from "./Brand";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const saved = document.documentElement.dataset.theme === "dark";
    // Synchronize the switch with the pre-paint theme script.
    const frame = requestAnimationFrame(() => setDark(saved));
    const sectionObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-20% 0px -55% 0px", threshold: 0 });
    document.querySelectorAll("main section[id], #contact").forEach((section) => sectionObserver.observe(section));
    const topObserver = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    const sentinel = document.getElementById("top-sentinel");
    if (sentinel) topObserver.observe(sentinel);
    return () => { cancelAnimationFrame(frame); sectionObserver.disconnect(); topObserver.disconnect(); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); menuButton.current?.focus(); }
    };
    const onPointer = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const media = matchMedia("(min-width: 1024px)");
    const onResize = () => { if (media.matches) setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    media.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      media.removeEventListener("change", onResize);
    };
  }, [open]);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try { localStorage.setItem("portfolio-theme", next ? "dark" : "light"); } catch { /* The switch still works when storage is unavailable. */ }
  }

  const links = navigation.map(({ label, href }) => <a key={label} href={href}
    aria-current={href === `#${active}` ? "location" : undefined}
    className={href === `#${active}` ? "nav-link is-active" : "nav-link"}
    onClick={() => setOpen(false)}>{label}</a>);

  return <header ref={header} className={`site-header${scrolled ? " is-scrolled" : ""}`}>
    <nav className="nav-shell" aria-label="Main navigation">
      <Brand />
      <div className="desktop-links">{links}</div>
      <div className="nav-actions">
        <button className="theme-toggle icon-button" aria-label={`Switch to ${dark ? "light" : "dark"} theme`} onClick={toggleTheme}>
          {dark ? <Moon size={17} /> : <Sun size={17} />}
        </button>
        <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>Open channel</a>
        <button ref={menuButton} className="menu-toggle icon-button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </nav>
    <AnimatePresence>
      {open && <motion.nav id="mobile-menu" aria-label="Mobile navigation" className="mobile-menu" initial={{ opacity: 0, y: reduced ? 0 : -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduced ? 0 : -8 }} transition={{ duration: reduced ? 0 : 0.2, ease }}>
        {links}
        <button className="mobile-theme" onClick={toggleTheme}>{dark ? "Light mode" : "Dark mode"}{dark ? <Moon size={18} /> : <Sun size={18} />}</button>
        <a href="#contact" className="mobile-contact" onClick={() => setOpen(false)}>Open channel</a>
      </motion.nav>}
    </AnimatePresence>
  </header>;
}
