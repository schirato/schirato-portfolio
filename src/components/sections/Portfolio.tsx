"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { portfolioItems, categories } from "@/content/portfolio";
import { event as gaEvent } from "@/lib/gtag";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Wave separator + cyan band with title */}
      <div className="relative">
        {/* Wave SVG on top */}
        <div className="absolute -top-1 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block h-16 w-full sm:h-20 md:h-24"
            aria-hidden="true"
          >
            <path
              d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,0 L0,0 Z"
              fill="#12161C"
            />
          </svg>
        </div>

        {/* Cyan band */}
        <div className="bg-[#1DA9C2] pt-20 pb-14 md:pt-28 md:pb-16">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-2xl font-semibold tracking-wide text-white sm:text-3xl">
                Projetos selecionados
              </h2>
              <p className="mt-2 text-xs tracking-widest text-white/70 uppercase">
                Resultados reais para empresas reais
              </p>
              <div className="mx-auto mt-4 mb-4 h-px w-16 bg-white/40" />
              <p className="mt-4 text-xs tracking-widest text-white/70 uppercase">
                Os projetos abaixo representam soluções desenvolvidas a partir
                de desafios reais de negócio, considerando usuários, contexto e
                objetivos.
              </p>
            </motion.div>

            {/* Category filter */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded px-3 py-1.5 text-xs font-medium tracking-wider uppercase transition-all ${
                    activeCategory === cat
                      ? "bg-white text-[#1DA9C2]"
                      : "text-white/80 hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Container>
        </div>
      </div>

      {/* Portfolio grid */}
      <section
        id="portfolio"
        aria-label="Grade de projetos"
        className="bg-[#0A3442] py-12 md:py-16"
      >
        <Container>
          <motion.div
            layout
            className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative aspect-[3/2] overflow-hidden"
              >
                <Link
                  href={item.href ?? `/projetos/${item.slug}`}
                  className="absolute inset-0 z-10"
                  onClick={() =>
                    gaEvent("select_content", {
                      content_type: "project",
                      content_id: item.slug,
                      item_name: item.title,
                      section: "portfolio_grid",
                    })
                  }
                >
                  <span className="sr-only">Ver projeto: {item.title}</span>
                </Link>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/60">
                  <div className="translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/70">
                      {item.category}
                    </p>
                    <ExternalLink className="mx-auto mt-3 h-5 w-5 text-amber-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* "Ver mais trabalhos" link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link
              href="/projetos"
              className="inline-block text-xs font-medium tracking-wider text-amber-400 uppercase transition-colors hover:text-amber-300"
            >
              Conhecer mais projetos →
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
