"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

interface ProcessStep {
  step: string;
  description: string;
}

interface ProjectProcessProps {
  steps: ProcessStep[];
}

export function ProjectProcess({ steps }: ProjectProcessProps) {
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
            Processo
          </span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Como foi feito
          </h2>
          <div className="mt-4 h-px w-12 bg-amber-400/60" />
        </motion.div>

        <div className="relative mt-10 lg:max-w-3xl">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-4 w-px bg-white/10 md:left-5" />

          <div className="space-y-8">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative pl-12 md:pl-14"
              >
                {/* Step number */}
                <div className="absolute left-0 flex h-9 w-9 items-center justify-center rounded-full border border-amber-400/30 bg-[#12161C] text-xs font-bold text-amber-400 md:h-10 md:w-10">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h3 className="text-sm font-semibold text-white">{s.step}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#A9B6BF]">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
