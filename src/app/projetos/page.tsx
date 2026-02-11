import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { TrackedCtaLink } from "@/components/analytics/TrackedCtaLink";
import { projectCases } from "@/content/projects";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://erikschirato.com";

export const metadata: Metadata = {
  title: "Projetos — Portfólio de UI Design & Frontend Development",
  description:
    "Explore o portfólio completo de projetos de UI Design, Frontend Development e Design Systems. Soluções digitais reais para startups, SaaS, e-commerce e mais.",
  alternates: { canonical: `${BASE_URL}/projetos` },
  openGraph: {
    type: "website",
    title: "Projetos — Erik Schirato · Portfólio Frontend & UI",
    description:
      "Cases completos de projetos digitais: UI Design, Frontend, Design Systems e Branding. Processo, decisões e resultados mensuráveis.",
    url: `${BASE_URL}/projetos`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Projetos — Erik Schirato · Portfólio Frontend & UI",
    description:
      "Cases completos de projetos digitais com processo, decisões e resultados.",
  },
};

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Portfólio de Projetos — Erik Schirato",
  description:
    "Coleção completa de projetos de UI Design, Frontend Development e Design Systems desenvolvidos por Erik Schirato.",
  url: `${BASE_URL}/projetos`,
  author: {
    "@type": "Person",
    name: "Erik Schirato",
    url: BASE_URL,
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: projectCases.length,
    itemListElement: projectCases.map((project, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${BASE_URL}/projetos/${project.slug}`,
      name: project.title,
    })),
  },
};

export default function ProjetosPage() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(projectsJsonLd),
          }}
        />

        {/* Hero */}
        <section
          aria-labelledby="projetos-hero-title"
          className="bg-[#0A3442] pt-32 pb-12 md:pt-40 md:pb-16"
        >
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium tracking-[0.25em] text-[#1DA9C2] uppercase">
                Portfólio completo
              </p>
              <h1
                id="projetos-hero-title"
                className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
              >
                Projetos desenvolvidos a partir
                <br className="hidden sm:block" /> de desafios reais de negócio
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#A9B6BF] sm:text-lg">
                Cada projeto abaixo representa uma solução desenhada e
                desenvolvida para resolver problemas concretos — combinando
                visão de produto, decisões de UI e engenharia frontend.
              </p>
              <div className="mx-auto mt-6 h-px w-16 bg-[#1DA9C2]/40" />
            </div>
          </Container>
        </section>

        {/* Intro SEO text */}
        <section
          aria-label="Contexto do portfólio"
          className="bg-[#0A3442] pb-4 md:pb-6"
        >
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm leading-relaxed text-white/40">
                Os projetos reúnem diferentes contextos, setores e objetivos —
                de interfaces para fintechs a plataformas educacionais, de
                design systems escaláveis a landing pages focadas em conversão.
                O fio condutor é sempre o mesmo: unir UI design de alta
                qualidade, frontend performático e impacto mensurável para o
                negócio.
              </p>
            </div>
          </Container>
        </section>

        {/* Filterable grid */}
        <ProjectsGrid projects={projectCases} />

        {/* CTA intermediário */}
        <section
          aria-label="Chamada para projetos similares"
          className="bg-[#0B3A4A]/40 py-14 md:py-20"
        >
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-medium tracking-[0.25em] text-amber-400 uppercase">
                Identificou algo parecido com o seu desafio?
              </p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Se você busca uma solução semelhante para seu produto, vamos
                conversar.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#A9B6BF]">
                Cada projeto começa com uma escuta real do problema. Conte o que
                você precisa — sem compromisso.
              </p>
              <div className="mt-8">
                <TrackedCtaLink
                  href="/#contato"
                  label="iniciar_conversa"
                  section="projetos_mid_cta"
                  className="inline-flex items-center gap-2 rounded bg-[#1DA9C2] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1DA9C2]/90 hover:shadow-lg hover:shadow-[#1DA9C2]/20"
                >
                  Iniciar conversa
                </TrackedCtaLink>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Final */}
        <section
          aria-label="Chamada para contato"
          className="bg-[#1DA9C2] py-16 md:py-20"
        >
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Pronto para elevar seu produto digital?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Transformo desafios de produto em interfaces que geram
                resultado. Conte o que você precisa — respondo em até 24 horas.
              </p>
              <div className="mx-auto mt-4 h-px w-16 bg-white/40" />
              <div className="mt-8">
                <TrackedCtaLink
                  href="/#contato"
                  label="fale_comigo"
                  section="projetos_final_cta"
                  className="inline-flex items-center gap-2 bg-white px-8 py-3 text-sm font-semibold text-[#1DA9C2] transition-all hover:bg-white/90 hover:shadow-lg"
                >
                  Fale comigo
                </TrackedCtaLink>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
