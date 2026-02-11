export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  slug: string;
  href?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "App Mobile · Beleza & Bem-Estar",
    category: "Development",
    imageUrl: "/images/projects/app-beleza-bem-estar.png",
    slug: "app-mobile-beleza-bem-estar",
    href: "/projetos/app-mobile-beleza-bem-estar",
  },
  {
    id: 2,
    title: "E-commerce · SaaS B2B · Hobby & Colecionáveis",
    category: "Development",
    imageUrl: "/images/projects/japantoys-2000x1200-1.png",
    slug: "japantoys-ecomerce",
    href: "/projetos/japantoys-ecomerce",
  },
  {
    id: 3,
    title: "Design Gráfico · Social Media · Bem-estar",
    category: "Design",
    imageUrl: "/images/projects/everarda-2000x1200-1.png",
    slug: "everarda-design-grafico",
    href: "/projetos/everarda-design-grafico",
  },
  {
    id: 4,
    title: "Produto Digital · Mobile App · Full Cycle",
    category: "UI Design",
    imageUrl: "/images/projects/app-afc-2000x1200-1.png",
    slug: "app-mobile-afc",
    href: "/projetos/app-mobile-afc",
  },
  {
    id: 5,
    title: "Carla Maria · Podóloga",
    category: "Design",
    imageUrl: "/images/projects/carla-maria-podologa-2000x1200-1.png",
    slug: "carla-maria-podologa",
    href: "/projetos/carla-maria-podologa",
  },
  {
    id: 6,
    title: "E-commerce · LAB 77 · Moda & Lifestyle",
    category: "Development",
    imageUrl: "/images/projects/lab-2000x1200-1.png",
    slug: "ecommerce-lab-77",
    href: "/projetos/ecommerce-lab-77",
  },
  {
    id: 7,
    title: "Flyer Circuit Fit · Johnny Eduardo",
    category: "Design",
    imageUrl: "/images/projects/flyer-circuit-fit-2000x1200-1.png",
    slug: "flyer-circuit-fit-johnny-eduardo",
    href: "/projetos/flyer-circuit-fit-johnny-eduardo",
  },
  {
    id: 8,
    title: "Media Social · Danca de Salão",
    category: "Design",
    imageUrl: "/images/projects/flyer-danca-salao-2000x1200-1.png",
    slug: "media-social-danca-de-salao",
    href: "/projetos/media-social-danca-de-salao",
  },
  {
    id: 9,
    title: "Logo · Johnny Assessoria Treinamento",
    category: "Branding",
    imageUrl: "/images/projects/logo-johnny-2000x1200-1.png",
    slug: "logo-johnny-assessoria-treinamento",
    href: "/projetos/logo-johnny-assessoria-treinamento",
  },
];

export const categories = [
  "Todos",
  "Branding",
  "UI Design",
  "UI/UX",
  "Development",
  "Design",
];
