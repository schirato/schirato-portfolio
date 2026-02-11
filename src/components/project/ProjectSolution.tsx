"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface ProjectSolutionProps {
  items: string[];
}

export function ProjectSolution({ items }: ProjectSolutionProps) {
  return (
    <section className="bg-[#0A1015] py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-medium tracking-widest text-[#1DA9C2] uppercase">
            Solução
          </span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            O que foi entregue
          </h2>
          <div className="mt-4 h-px w-12 bg-[#1DA9C2]/60" />
        </motion.div>

        <div className="mt-10 grid gap-6 lg:max-w-3xl">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 rounded-lg border border-[#1DA9C2]/10 bg-[#0B3A4A]/30 p-5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-[#1DA9C2]/10">
                <CheckCircle className="h-4 w-4 text-[#1DA9C2]" />
              </div>
              <p className="text-sm leading-relaxed text-[#A9B6BF]">{item}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
