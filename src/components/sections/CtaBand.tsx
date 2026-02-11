"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function CtaBand() {
  return (
    <section
      aria-label="Chamada para ação"
      className="bg-[#1DA9C2] py-16 md:py-20"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold tracking-wide text-white sm:text-3xl">
            Pronto para elevar seu produto digital?
          </h2>
          <p className="mt-3 text-xs tracking-widest text-white/70 uppercase">
            Conte o que você precisa — respondo em até 24 horas
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-white/40" />
        </motion.div>
      </Container>
    </section>
  );
}
