"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/vehicles", label: "Vehicles" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-charcoal/90 backdrop-blur-md border-b border-off-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-20">
        <Link href="/" className="flex items-baseline gap-1.5 z-10">
          <span
            className={`font-display text-2xl tracking-tight transition-colors ${
              scrolled || open ? "text-off-white" : "text-brown"
            }`}
          >
            Zenith
          </span>
          <span className="eyebrow text-butter-deep">Drive</span>
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors relative py-1 ${
                  scrolled ? "text-off-white/85 hover:text-butter" : "text-brown/85 hover:text-brown"
                } ${active ? (scrolled ? "text-butter" : "text-brown") : ""}`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className={`absolute -bottom-1 left-0 right-0 h-px ${
                      scrolled ? "bg-butter" : "bg-brown"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Link
            href="/test-drive"
            className={`inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-colors ${
              scrolled
                ? "bg-butter text-charcoal hover:bg-off-white"
                : "bg-brown text-off-white hover:bg-butter-deep hover:text-charcoal"
            }`}
          >
            Book a Test Drive
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden z-10 p-2"
        >
          {open ? (
            <X className={scrolled || open ? "text-off-white" : "text-brown"} />
          ) : (
            <Menu className={scrolled ? "text-off-white" : "text-brown"} />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-charcoal border-t border-off-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-off-white/90 text-lg font-display py-3 border-b border-off-white/10"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/test-drive"
                className="mt-5 inline-flex justify-center items-center px-5 py-3.5 rounded-full text-sm font-medium bg-butter text-charcoal"
              >
                Book a Test Drive
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
