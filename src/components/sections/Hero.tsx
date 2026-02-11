"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Apresentação profissional"
      className="relative flex min-h-[90vh] sm:min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image — next/image for LCP optimization */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        role="presentation"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-5 sm:mb-3 text-xs font-medium tracking-[0.2em] sm:tracking-[0.3em] text-white/70 uppercase"
        >
          Frontend Developer Sênior · Freelancer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-4 text-4xl font-bold tracking-wide text-amber-400 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Interfaces que convertem usuários <br /> em resultados de negócio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mx-auto max-w-xl text-[13px] sm:text-sm leading-relaxed tracking-widest text-white/75 sm:text-white/60 font-normal"
        >
          Desenvolvimento de interfaces modernas com foco em performance,
          usabilidade e métricas reais de conversão.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mt-8 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-4"
        >
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#portfolio")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded border border-amber-400/80 px-6 py-2.5 text-xs font-semibold tracking-wider text-amber-400 uppercase transition-all hover:bg-amber-400/10 hover:text-amber-300 sm:border-0 sm:p-0"
          >
            Conhecer projetos →
          </a>
          <span className="hidden sm:inline text-white/20">|</span>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contato")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-xs font-medium sm:font-semibold tracking-wider text-white/40 sm:text-white/60 uppercase transition-colors hover:text-white"
          >
            Solicitar orçamento
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="h-8 w-5 rounded-full border-2 border-white/30 p-1"
        >
          <div className="mx-auto h-2 w-1 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
