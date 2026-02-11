"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Settings,
  Target,
  Users,
  HeartHandshake,
  MessageCircle,
  Shield,
  Layers,
  Zap,
  Monitor,
  Gem,
  LayoutDashboard,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { ProgressRing } from "@/components/ui/ProgressRing";

const softSkills = [
  {
    icon: Lightbulb,
    title: "Soluções criativas, não genéricas",
    description:
      "Cada interface é pensada para o contexto do seu produto. Você recebe soluções visuais originais — não templates adaptados.",
  },
  {
    icon: Settings,
    title: "Planejamento previsível",
    description:
      "Escopos bem definidos, prazos realistas e comunicação constante. Você sabe exatamente o que esperar em cada etapa.",
  },
  {
    icon: Target,
    title: "Foco em resultado",
    description:
      "Não entrego apenas código: identifico melhorias proativas que impactam conversão, retenção e satisfação do usuário.",
  },
  {
    icon: Users,
    title: "Integração fluida ao time",
    description:
      "Me adapto ao workflow da sua equipe — Scrum, Kanban ou squads. Colaboro com designers, PMs e QAs sem fricção.",
  },
  {
    icon: HeartHandshake,
    title: "Visão centrada no usuário",
    description:
      "Traduzo necessidades reais de quem usa o produto em experiências intuitivas que reduzem suporte e aumentam engajamento.",
  },
  {
    icon: MessageCircle,
    title: "Comunicação sem ruído",
    description:
      "Explico decisões técnicas de forma clara para stakeholders não-técnicos. Sua equipe sempre entende o que está acontecendo.",
  },
  {
    icon: Shield,
    title: "Compromisso com prazo e qualidade",
    description:
      "Transparência total no progresso, entregas pontuais e código revisado. Sem surpresas no final do sprint.",
  },
  {
    icon: Layers,
    title: "Atenção pixel-perfect",
    description:
      "Do espaçamento ao estado de hover: cada detalhe visual é implementado com precisão para manter a fidelidade ao design.",
  },
  {
    icon: Zap,
    title: "Agilidade com mudanças",
    description:
      "Requisitos mudam — e tudo bem. Me adapto rápido a pivôs de escopo sem comprometer a qualidade da entrega.",
  },
];

const progressRings = [
  {
    label: "UI Development",
    percentage: 90,
    icon: <Monitor className="h-8 w-8" />,
  },
  {
    label: "Product Design",
    percentage: 85,
    icon: <Gem className="h-8 w-8" />,
  },
  {
    label: "Gestão Ágil",
    percentage: 75,
    icon: <LayoutDashboard className="h-8 w-8" />,
  },
];

export function SoftSkills() {
  return (
    <section
      id="habilidades"
      aria-labelledby="skills-title"
      className="bg-[#12161C] py-20 md:py-28"
    >
      <Container>
        {/* Section header with small icon */}
        <div className="mb-2 flex justify-center">
          <Settings className="h-5 w-5 text-white/40" />
        </div>
        <SectionTitle
          id="skills-title"
          title="Por que trabalhar comigo"
          subtitle="O que você ganha além do código"
        />

        {/* Skills grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {softSkills.map((skill, i) => (
            <Card key={skill.title} delay={i * 0.06}>
              <skill.icon className="mb-3 h-5 w-5 text-amber-400" />
              <h3 className="mb-2 text-sm font-semibold text-white">
                {skill.title}
              </h3>
              <p className="text-xs leading-relaxed text-gray-400">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Progress rings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-12 md:gap-20"
        >
          {progressRings.map((ring) => (
            <ProgressRing
              key={ring.label}
              percentage={ring.percentage}
              label={ring.label}
              icon={ring.icon}
              size={130}
              strokeWidth={4}
            />
          ))}
        </motion.div>
        <p className="mt-8 text-center text-lg leading-relaxed text-gray-50">
          Essas competências atuam de forma integrada conforme a necessidade de
          cada projeto.
        </p>
      </Container>
    </section>
  );
}
