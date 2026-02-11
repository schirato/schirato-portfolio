"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#habilidades" },
  { label: "Projetos", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (isHome) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  /** Resolve nav href: on homepage use hash, on subpages navigate to /#section */
  const resolveHref = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-[#0A3442]/95 shadow-lg shadow-black/20 backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2"
          >
            <Image
              src="/images/logo-502x134-retina-negativo.png"
              alt="Schirato"
              width={140}
              height={37}
              priority
              className="h-auto w-[120px] sm:w-[140px]"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) =>
              isHome ? (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-xs font-medium tracking-wider text-white/80 uppercase transition-colors hover:text-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={resolveHref(link.href)}
                  className="text-xs font-medium tracking-wider text-white/80 uppercase transition-colors hover:text-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Adicionar"
              className="hidden text-white/70 transition-colors hover:text-white md:block"
            >
              <Plus className="h-5 w-5" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white/90 transition-colors hover:text-white md:hidden"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Language / flag icon - decorative, matches screenshot */}
            <button
              aria-label="Idioma"
              className="hidden text-white/70 transition-colors hover:text-white md:block"
            >
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                <rect width="20" height="14" rx="1" fill="#009B3A" />
                <path d="M10 1L19 7L10 13L1 7L10 1Z" fill="#FEDF00" />
                <circle cx="10" cy="7" r="3" fill="#002776" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 border-t border-white/10 bg-[#0A3442]/98 backdrop-blur-lg md:hidden"
          >
            <nav className="flex flex-col p-6">
              {navLinks.map((link, i) =>
                isHome ? (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className="border-b border-white/5 py-3 text-left text-sm font-medium tracking-wider text-white/80 uppercase transition-colors hover:text-amber-400"
                  >
                    {link.label}
                  </motion.button>
                ) : (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={resolveHref(link.href)}
                      onClick={() => setMobileOpen(false)}
                      className="block border-b border-white/5 py-3 text-left text-sm font-medium tracking-wider text-white/80 uppercase transition-colors hover:text-amber-400"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ),
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
