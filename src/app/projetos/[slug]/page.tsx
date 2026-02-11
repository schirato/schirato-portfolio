import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/sections/Footer";
import {
  ProjectHero,
  ProjectContext,
  ProjectChallenge,
  ProjectSolution,
  ProjectProcess,
  ProjectGallery,
  ProjectTechStack,
  ProjectResults,
  ProjectRole,
  ProjectCta,
} from "@/components/project";
import {
  projectCases,
  getProjectBySlug,
  getAllProjectSlugs,
} from "@/content/projects";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://erikschirato.com";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const url = `${BASE_URL}/projetos/${slug}`;

  return {
    title: `${project.title} — Case Study`,
    description: project.impactLine,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${project.title} — Erik Schirato`,
      description: project.impactLine,
      url,
      images: [
        {
          url: project.heroImage,
          width: 1920,
          height: 800,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Erik Schirato`,
      description: project.impactLine,
      images: [project.heroImage],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find prev/next projects for navigation
  const currentIndex = projectCases.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projectCases[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projectCases.length - 1
      ? projectCases[currentIndex + 1]
      : null;

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.impactLine,
    url: `${BASE_URL}/projetos/${slug}`,
    image: project.heroImage,
    author: {
      "@type": "Person",
      name: "Erik Schirato",
      url: BASE_URL,
    },
    dateCreated: `${project.year}-01-01`,
    keywords: project.technologies.join(", "),
    genre: project.category,
  };

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(projectJsonLd),
          }}
        />
        <article>
          <ProjectHero project={project} />

          <ProjectContext paragraphs={project.context} />

          <ProjectChallenge items={project.challenge} />

          {project.gallery && project.gallery.length > 0 && (
            <ProjectGallery images={project.gallery} title={project.title} />
          )}

          <ProjectSolution items={project.solution} />

          <ProjectProcess steps={project.process} />

          <ProjectTechStack technologies={project.technologies} />

          <ProjectResults results={project.results} />

          <ProjectRole items={project.role} />
        </article>

        <ProjectCta
          ctaText={project.ctaText}
          prevProject={prevProject}
          nextProject={nextProject}
        />
      </main>
      <Footer />
    </>
  );
}
