"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface Result {
  metric: string;
  detail: string;
}

interface ProjectResultsProps {
  results: Result[];
}

export function ProjectResults({ results }: ProjectResultsProps) {
  return (
    <section className="bg-[#0B3A4A]/40 py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-medium tracking-widest text-amber-400 uppercase">
            Resultados
          </span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Impacto mensurável
          </h2>
          <div className="mt-4 h-px w-12 bg-amber-400/60" />
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-lg border border-amber-400/10 bg-[#12161C]/60 p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/10">
                <TrendingUp className="h-5 w-5 text-amber-400" />
              </div>
              <h3 className="mt-4 text-base font-semibold leading-snug text-white">
                {r.metric}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#A9B6BF]">
                {r.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
