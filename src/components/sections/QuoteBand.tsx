"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function QuoteBand() {
  return (
    <>
      {/* Yellow/gold band separator */}
      <div className="h-3 bg-amber-400" />

      {/* Quote section */}
      <section
        aria-label="Citação inspiracional"
        className="relative overflow-hidden py-20 md:py-28"
      >
        {/* Background image with blur */}
        <Image
          src="/images/quote-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          loading="lazy"
          role="presentation"
        />
        <div
          className="absolute inset-0 bg-[#0A3442]/85 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-2xl px-6 text-center"
        >
          {/* Quote icon */}
          <div className="mb-6 flex justify-center">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className="text-[#FF3B7A]"
            >
              <path
                d="M14 24H8C8 17.373 13.373 12 20 12V16C15.582 16 12 19.582 12 24V36H24V24H14ZM38 24H32C32 17.373 37.373 12 44 12V16C39.582 16 36 19.582 36 24V36H48V24H38Z"
                fill="currentColor"
                transform="scale(0.85) translate(4, 4)"
              />
            </svg>
          </div>

          <blockquote className="text-sm leading-relaxed text-white/80 italic md:text-base">
            &ldquo;“Interfaces bonitas chamam atenção. Interfaces bem projetadas
            sustentam produtos.”&rdquo;
          </blockquote>
          <p className="mt-6 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            — Erik Schirato
          </p>
          <p className="mt-4 text-xs leading-relaxed text-white/40">
            Essa filosofia guia cada linha de código que escrevo: interfaces que
            funcionam para o negócio e para quem usa.
          </p>
        </motion.div>
      </section>
    </>
  );
}
