"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

interface ProjectTechStackProps {
  technologies: string[];
}

export function ProjectTechStack({ technologies }: ProjectTechStackProps) {
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
            Tecnologias
          </span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Stack utilizada
          </h2>
          <div className="mt-4 h-px w-12 bg-[#1DA9C2]/60" />
        </motion.div>

        <p className="mt-8">
          A stack foi escolhida considerando escalabilidade, performance e
          facilidade de manutenção.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {technologies.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="rounded-full border border-white/10 bg-[#12161C] px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-[#1DA9C2]/30 hover:text-[#1DA9C2]"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </Container>
    </section>
  );
}
