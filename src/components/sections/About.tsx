"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const leftColumnText = [
  "Atuo há mais de 20 anos desenvolvendo interfaces e aplicações para diferentes contextos de negócio.",
  "Há mais de 15 anos, ajudo empresas e startups a transformar requisitos de negócio em interfaces digitais que geram resultado. Meu trabalho vai além do código: entendo o contexto do produto, identifico oportunidades de melhoria na experiência e entrego soluções que usuários realmente usam.",
  "Já atuei em projetos de alta complexidade — plataformas SaaS, dashboards analíticos, e-commerces e aplicações mobile-first — sempre com foco em performance, acessibilidade e escalabilidade do frontend.",
  "Trabalho com metodologias ágeis, Design Systems e pipelines de CI/CD. Me integro ao seu time como parceiro técnico, participando desde o discovery até a entrega final. Se o seu produto precisa de um frontend que funcione de verdade, podemos conversar.",
];

const rightColumnItems = [
  "Desenvolvimento de interfaces com React, Next.js e TypeScript",
  "Implementação de Design Systems escaláveis",
  "Performance web e otimização de Core Web Vitals",
  "UI/UX — tradução de protótipos Figma em código fiel",
  "Integração com APIs RESTful e GraphQL",
  "Testes automatizados (Jest, Testing Library, Cypress)",
  "HTML semântico, acessibilidade (WCAG) e SEO técnico",
  "TailwindCSS, CSS Modules, Styled Components",
  "Versionamento Git e code review rigoroso",
  "CI/CD, Docker e deploy em ambientes cloud",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className="bg-[#0A3442] py-20 md:py-28"
    >
      <Container>
        <SectionTitle
          id="about-title"
          title="Sobre"
          subtitle="Quem está por trás do código"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-10 md:grid-cols-2 md:gap-16"
        >
          {/* Left column - text */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white/90 uppercase">
              Visão de produto, execução técnica
            </h3>
            {leftColumnText.map((text, i) => (
              <p key={i} className="text-sm leading-relaxed text-gray-300/90">
                {text}
              </p>
            ))}
          </motion.div>

          {/* Right column - skills list */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white/90 uppercase">
              O que entrego no seu projeto
            </h3>
            <ul className="space-y-2.5">
              {rightColumnItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-300/90"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
