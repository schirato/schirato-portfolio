"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface ProjectRoleProps {
  items: string[];
}

export function ProjectRole({ items }: ProjectRoleProps) {
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
            Minha atuação
          </span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            O meu papel neste projeto
          </h2>
          <div className="mt-4 h-px w-12 bg-[#1DA9C2]/60" />
        </motion.div>

        <div className="mt-10 max-w-3xl space-y-5">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1DA9C2]/10">
                <User className="h-3.5 w-3.5 text-[#1DA9C2]" />
              </div>
              <p className="text-sm leading-relaxed text-[#A9B6BF]">{item}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
