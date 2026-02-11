"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { ProjectCase } from "@/content/projects";
import { event as gaEvent } from "@/lib/gtag";

const filterCategories = [
  "Todos",
  "UI Design",
  "Mobile Design",
  "Frontend",
  "Branding",
  "Design Gráfico",
  "Produto Digital",
] as const;

function matchesFilter(project: ProjectCase, filter: string): boolean {
  if (filter === "Todos") return true;
  const cat = project.category.toLowerCase();

  switch (filter) {
    case "UI Design":
      return cat.includes("ui design");
    case "Mobile Design":
      return cat.includes("mobile design") || cat.includes("mobile");
    case "Frontend":
      return cat.includes("frontend");
    case "Branding":
      return cat.includes("branding");
    case "Design Gráfico":
      return cat.includes("design gráfico");
    case "Produto Digital":
      return cat.includes("produto digital") || cat.includes("performance");
    default:
      return true;
  }
}

interface ProjectsGridProps {
  projects: ProjectCase[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered = projects.filter((p) => matchesFilter(p, activeFilter));

  return (
    <>
      {/* Filters */}
      <section
        aria-label="Filtros de projeto"
        className="bg-[#0A3442] pt-10 pb-6 md:pt-14 md:pb-8"
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all ${
                  activeFilter === cat
                    ? "bg-[#1DA9C2] text-white shadow-md shadow-[#1DA9C2]/20"
                    : "border border-white/10 bg-transparent text-white/60 hover:border-white/20 hover:text-white/90"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Grid */}
      <section
        aria-label="Todos os projetos"
        className="bg-[#0A3442] pb-16 md:pb-24"
      >
        <Container>
          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.article
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="group relative overflow-hidden rounded-lg border border-white/5 bg-[#12161C]/60 transition-all hover:border-[#1DA9C2]/20 hover:shadow-xl hover:shadow-black/20"
                >
                  <Link
                    href={`/projetos/${project.slug}`}
                    className="block"
                    onClick={() =>
                      gaEvent("select_content", {
                        content_type: "project_case",
                        content_id: project.slug,
                        item_name: project.title,
                        section: "projects_grid",
                      })
                    }
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#12161C] via-transparent to-transparent opacity-60" />

                      {/* Category badge */}
                      <span className="absolute top-3 left-3 rounded bg-[#00ff15]/20 px-2.5 py-1 text-[10px] font-medium tracking-wider text-[#272727] uppercase backdrop-blur-sm">
                        {project.category.split("·")[0].trim()}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-sm font-semibold tracking-tight text-white group-hover:text-[#1DA9C2] transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-xs text-white/40">
                        {project.category}
                      </p>
                      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[#A9B6BF]">
                        {project.impactLine}
                      </p>

                      <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-amber-400 transition-colors group-hover:text-amber-300">
                        Ver case completo
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 text-center text-sm text-white/40"
            >
              Nenhum projeto encontrado nesta categoria.
            </motion.p>
          )}

          {/* Microcopy */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center text-xs leading-relaxed tracking-wide text-white/40"
          >
            Cada projeto possui um case completo — explore processo, decisões de
            design e o impacto gerado para o negócio.
          </motion.p>
        </Container>
      </section>
    </>
  );
}
