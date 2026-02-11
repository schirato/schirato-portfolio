"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/SchiratoUiFrontEnd",
    label: "Facebook",
  },
  { icon: Twitter, href: "https://twitter.com/schirato", label: "Twitter" },
  {
    icon: Instagram,
    href: "https://www.instagram.com/schirato/",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/erikschirato/",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/schirato", label: "GitHub" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1015] py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        {/* Logo icon */}
        <Image
          src="/icons/apple-touch-icon_120x120.png"
          alt="Schirato"
          width={40}
          height={40}
          className="h-10 w-10"
        />

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {year} Erik Schirato · Frontend Developer & UI Specialist · Feito
          com código limpo e atenção a cada detalhe.
        </p>

        {/* Social icons */}
        <nav aria-label="Redes sociais" className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 p-2 text-gray-400 transition-all hover:border-amber-400/40 hover:text-amber-400"
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
        </nav>
      </motion.div>
    </footer>
  );
}
