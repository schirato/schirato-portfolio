"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { ProjectCase } from "@/content/projects";

interface ProjectCtaProps {
  ctaText: string;
  prevProject?: ProjectCase | null;
  nextProject?: ProjectCase | null;
}

export function ProjectCta({
  ctaText,
  prevProject,
  nextProject,
}: ProjectCtaProps) {
  return (
    <section className="bg-[#1DA9C2] py-16 md:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Vamos trabalhar juntos?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80">
            {ctaText}
          </p>
          <div className="mt-8">
            <Link
              href="/#contato"
              className="inline-flex items-center gap-2 bg-white px-8 py-3 text-sm font-semibold text-[#1DA9C2] transition-all hover:bg-white/90 hover:shadow-lg"
            >
              Fale comigo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        {/* Prev / Next navigation */}
        {(prevProject || nextProject) && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-14 flex items-center justify-between border-t border-white/20 pt-8"
          >
            {prevProject ? (
              <Link
                href={`/projetos/${prevProject.slug}`}
                className="group flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <div className="text-left">
                  <span className="block text-xs uppercase text-white/50">
                    Anterior
                  </span>
                  <span className="font-medium">{prevProject.title}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/projetos/${nextProject.slug}`}
                className="group flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <div className="text-right">
                  <span className="block text-xs uppercase text-white/50">
                    Próximo
                  </span>
                  <span className="font-medium">{nextProject.title}</span>
                </div>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <div />
            )}
          </motion.div>
        )}
      </Container>
    </section>
  );
}
