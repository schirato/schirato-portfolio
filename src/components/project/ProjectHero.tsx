"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { ProjectCase } from "@/content/projects";

interface ProjectHeroProps {
  project: ProjectCase;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden md:min-h-[70vh]">
      {/* Background image */}
      <Image
        src={project.heroImage}
        alt={project.title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1015] via-[#0A1015]/70 to-[#0A1015]/40" />

      {/* Back link */}
      <div className="absolute top-20 left-0 z-20 w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link
              href="/#portfolio"
              className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-amber-400"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Voltar ao portfólio
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[60vh] items-end md:min-h-[70vh]">
        <div className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 md:pb-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block rounded bg-[#1DA9C2]/20 px-3 py-1 text-xs font-medium tracking-wider text-[#1DA9C2] uppercase backdrop-blur-sm">
              {project.category}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            {project.impactLine}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 flex flex-wrap items-center gap-6 text-sm text-white/60"
          >
            <span>
              <strong className="text-white/90">Cliente:</strong>{" "}
              {project.client}
            </span>
            <span>
              <strong className="text-white/90">Ano:</strong> {project.year}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
