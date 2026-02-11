"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

interface ProjectContextProps {
  paragraphs: string[];
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" as const },
  transition: { duration: 0.5 },
};

export function ProjectContext({ paragraphs }: ProjectContextProps) {
  return (
    <section className="bg-[#0A1015] py-16 md:py-24">
      <Container>
        <motion.div {...fadeUp}>
          <span className="text-xs font-medium tracking-widest text-amber-400 uppercase">
            Contexto
          </span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Sobre o projeto
          </h2>
          <div className="mt-4 h-px w-12 bg-amber-400/60" />
        </motion.div>

        <div className="mt-8 max-w-3xl space-y-5">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-base leading-relaxed text-[#A9B6BF]"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </Container>
    </section>
  );
}
