import { Layout } from "lucide-react";

export interface ProjectCase {
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  heroImage: string;
  impactLine: string;

  context: string[];
  challenge: string[];
  solution: string[];

  process: {
    step: string;
    description: string;
  }[];

  technologies: string[];

  results: {
    metric: string;
    detail: string;
  }[];

  role: string[];

  ctaText: string;

  /** Gallery images shown between sections */
  gallery?: string[];
}

export const projectCases: ProjectCase[] = [
  {
    slug: "app-mobile-beleza-bem-estar",
    title: "App Mobile · Beleza & Bem-Estar",
    category: "App Mobile · UX/UI · Produto Digital · Projeto Autor",
    client: "Erik Schirato (projeto autoral)",
    year: "2025",
    heroImage: "/images/projects/app-beleza-bem-estar.png",
    impactLine:
      "Aplicativo focado em autocuidado, rotina saudável e bem-estar físico e emocional.",

    context: [
      "O Beleza & Bem-Estar é um aplicativo autoral, idealizado e desenvolvido com o objetivo de centralizar práticas de autocuidado, organização de rotinas e acompanhamento de hábitos ligados à saúde, estética e bem-estar.",
      "O projeto nasce da necessidade real de simplificar o cuidado diário, oferecendo uma experiência intuitiva, acolhedora e funcional para usuários que buscam equilíbrio entre corpo, mente e rotina.",
    ],

    challenge: [
      "Excesso de informações dispersas",
      "Aplicativos genéricos, pouco personalizados",
      "Falta de continuidade nas rotinas de autocuidado",
      "Experiências confusas ou excessivamente técnicas",
    ],

    solution: [
      "Definição do conceito do produto",
      "Logo e identidade visual",
      "UX e UI do aplicativo",
      "Protótipos navegáveis",
      "Design de telas e fluxos principais",
      "Desenvolvimento do app",
      "Estrutura pronta para evolução futura (novas features)",
    ],

    process: [
      {
        step: "Concepção do produto",
        description:
          "Definição da proposta de valor, público-alvo e funcionalidades centrais do app.",
      },
      {
        step: "UX e fluxos",
        description:
          "Mapeamento da jornada do usuário, priorizando simplicidade, clareza e uso recorrente.",
      },
      {
        step: "UI Design",
        description:
          "Criação de uma interface com foco em conforto visual, legibilidade e sensação de bem-estar, evitando estímulos excessivos.",
      },
      {
        step: "Logo e identidade visual",
        description:
          "Criação da identidade visual, incluindo logo, paleta de cores e tipografia, garantindo consistência em todas as telas do aplicativo.",
      },
      {
        step: "Desenvolvimento",
        description:
          "Implementação do aplicativo utilizando ReactJS e Supabase, garantindo compatibilidade multiplataforma e boa performance.",
      },
    ],

    technologies: ["Figma", "ReactJS", "TypeScript", "TailwindCSS"],

    results: [
      {
        metric: "Consolidação de um produto autoral do zero",
        detail:
          "O app foi idealizado, projetado e desenvolvido do zero, validando a capacidade de criar um produto completo de forma independente.",
      },
      {
        metric: "Aplicação prática de decisões de UX baseadas em uso real",
        detail:
          "O desenvolvimento do app permitiu validar decisões de UX e UI com base no uso real, ajustando a experiência para melhor atender às necessidades dos usuários.",
      },
      {
        metric: "Integração entre design e desenvolvimento no mesmo fluxo",
        detail:
          "A criação do app permitiu uma integração fluida entre design e desenvolvimento, garantindo que a visão do produto fosse mantida em todas as etapas do processo.",
      },
      {
        metric:
          "Base sólida para evolução do app (novas features e monetização)",
        detail:
          "O app foi estruturado com uma base sólida, permitindo a adição de novas funcionalidades e a possibilidade de monetização futura, garantindo a escalabilidade do produto.",
      },
    ],

    role: [
      "Atuei de forma end-to-end, desde a concepção do produto, passando pelo design e desenvolvimento, até a estruturação para evolução futura.",
    ],

    ctaText:
      "Se o seu produto precisa de uma identidade visual sólida e uma interface que transmita confiança, vamos conversar sobre como posso ajudar.",

    gallery: [
      "/images/projects/app-beleza-bem-estar-gallery-01.png",
      "/images/projects/app-beleza-bem-estar-gallery-02.png",
    ],
  },

  {
    slug: "japantoys-ecomerce",
    title: "Japantoys — E-commerce focado em performance e conversão",
    category: "Frontend Development · UI Design",
    client: "JapanToys (plataforma de vendas de figuras de ação de luxo)",
    year: "2018",
    heroImage: "/images/projects/japantoys-2000x1200-1.png",
    impactLine:
      "Plataforma de e-commerce especializada em figures colecionáveis premium, com atuação nacional e foco em produtos exclusivos e de alto valor agregado.",

    context: [
      "A Japantoys é uma das principais referências brasileiras no mercado de figures colecionáveis, atuando desde 2007 com produtos oficiais, raros e importados.",
      "O desafio do projeto foi modernizar completamente a interface do site, migrando de um modelo institucional para uma plataforma de e-commerce robusta, capaz de:",
      "• Suportar crescimento de catálogo",
      "• Comunicar valor premium dos produtos",
      "• Melhorar a experiência de navegação e compra",
      "• Aumentar conversões em desktop e mobile",
      "O trabalho envolveu UI Design, Frontend e estruturação da experiência, garantindo alinhamento entre negócio, usuário e tecnologia.",
    ],

    challenge: [
      "Interface visual desatualizada e pouco atrativa para produtos premium",
      "Experiência de compra pouco fluida, especialmente no mobile",
      "Baixa clareza na hierarquia de informações e destaque de produtos",
      "Estrutura limitada para crescimento e novos lançamentos",
      "Falta de consistência visual entre desktop e mobile",
    ],

    solution: [
      "Redesign completo da interface do e-commerce",
      "Prototipação de fluxos de navegação e compra",
      "Layouts responsivos focados em mobile-first",
      "Organização visual do catálogo e páginas de produto",
      "Melhoria da hierarquia de informações e CTAs",
      "Integração visual entre desktop, tablet e mobile",
      "Estrutura preparada para escalabilidade do negócio",
    ],

    process: [
      {
        step: "Análise e entendimento do negócio",
        description:
          "Estudo do público colecionador, comportamento de compra, diferenciais competitivos e posicionamento da marca no mercado.",
      },
      {
        step: "Arquitetura da informação",
        description:
          "Reorganização do catálogo, categorias e navegação para facilitar descoberta de produtos e reduzir fricção no processo de compra.",
      },
      {
        step: "UI Design e prototipação",
        description:
          "Criação de layouts modernos, com foco em produtos premium, utilizando boas práticas de contraste, tipografia e hierarquia visual.",
      },
      {
        step: "Desenvolvimento frontend",
        description:
          "Implementação do layout com atenção a performance, responsividade e consistência entre dispositivos.",
      },
      {
        step: "Ajustes finos e otimizações",
        description:
          "Refinamento visual e funcional com base em testes reais de uso e navegação.",
      },
    ],

    technologies: [
      "Figma",
      "Photoshop",
      "Wordpress",
      "HTML",
      "CSS",
      "JavaScript",
      "UI Patterns",
    ],

    results: [
      {
        metric: "Aumento de 25% na taxa de conversão geral",
        detail: "Aumento da clareza visual e percepção de valor dos produtos",
      },
      {
        metric:
          "Melhoria significativa na experiência de compra, especialmente no mobile",
        detail: "Melhor experiência de navegação em dispositivos móveis",
      },
      {
        metric: "Redução de 30% no tempo médio para finalizar uma compra",
        detail: "Redução de fricção no processo de compra",
      },
      {
        metric:
          "Estrutura preparada para crescimento de catálogo e lançamentos",
        detail:
          "Interface escalável que suporta adição de novos produtos e categorias sem perda de usabilidade",
      },
      {
        metric: "Feedbacks positivos de clientes e aumento de engajamento",
        detail: "Melhora no engajamento e tempo de permanência no site",
      },
    ],

    role: [
      "Concepção da interface",
      "Prototipação dos fluxos",
      "Desenvolvimento Frontend",
      "Garantia de consistência visual e técnica",
      "Alinhamento entre objetivos de negócio e experiência do usuário",
    ],

    ctaText: "Vamos criar experiências que geram resultado?",

    gallery: ["/images/projects/japantoys-gallery-01.png"],
  },

  {
    slug: "everarda-design-grafico",
    title: "Everarda Hatha Yoga — Presença visual para conexão e propósito",
    category: "Design Gráfico · Social Media · Bem-estar",
    client: "Everarda Hatha Yoga",
    year: "2019",
    heroImage: "/images/projects/everarda-2000x1200-1.png",
    impactLine:
      "Projeto de prototipação visual para divulgação do trabalho da instrutora Everarda, focado em Hatha Yoga, bem-estar e equilíbrio corpo–mente, utilizando o Instagram como principal canal de comunicação.",

    context: [
      "A Everarda Hatha Yoga é um trabalho voltado à prática consciente do yoga, com foco em saúde física, equilíbrio emocional e conexão interior.",
      "O projeto teve como objetivo criar peças visuais para redes sociais que refletissem a essência da prática, transmitindo:",
      "• Calma",
      "• Confiança",
      "• Profissionalismo",
      "• Acolhimento",
      "• Autenticidade",
      "O desafio foi traduzir conceitos intangíveis, como respiração, presença e equilíbrio, em uma linguagem visual clara e coerente, alinhada ao perfil do público no Instagram.",
    ],

    challenge: [
      "Criar uma identidade visual mais consistente para redes sociais",
      "Melhorar a percepção profissional do trabalho da instrutora",
      "Comunicar os benefícios da prática de forma clara e sensível",
      "Padronizar os posts para fortalecer reconhecimento de marca",
      "Tornar o conteúdo mais atrativo e alinhado ao público-alvo",
    ],

    solution: [
      "Prototipação de layouts para posts no Instagram",
      "Definição de estilo visual (cores, tipografia e composição)",
      "Peças gráficas focadas em divulgação de aulas e conteúdo",
      "Direção visual alinhada ao bem-estar e equilíbrio",
      "Estrutura visual reutilizável para novos conteúdos",
    ],

    process: [
      {
        step: "Entendimento do propósito",
        description:
          "Análise da proposta da instrutora, valores da prática de Hatha Yoga e perfil do público atendido.",
      },
      {
        step: "Conceito visual",
        description:
          "Criação de uma linguagem visual suave, com foco em cores calmas, boa leitura e equilíbrio entre texto e imagem.",
      },
      {
        step: "Prototipação gráfica",
        description:
          "Desenvolvimento dos layouts no Photoshop, simulando aplicações reais no feed do Instagram.",
      },
      {
        step: "Ajustes finais",
        description:
          "Refinamento de tipografia, espaçamentos e hierarquia visual para garantir clareza e harmonia.",
      },
    ],

    technologies: [
      "Photoshop",
      "Princípios de Design Visual",
      "Boas práticas para Social Media (Instagram)",
    ],

    results: [
      {
        metric: "Percepção de profissionalismo aumentada",
        detail: "Comunicação visual mais profissional e consistente",
      },
      {
        metric: "Engajamento e alcance melhorados",
        detail: "Melhor clareza na divulgação das aulas e propostas",
      },
      {
        metric: "Fortalecimento da identidade visual da instrutora",
        detail:
          "Identidade visual mais alinhada ao propósito e valores do trabalho de yoga",
      },
      {
        metric: "Conteúdo mais atrativo e alinhado ao público de bem-estar",
        detail:
          "Peças visuais que comunicam melhor os benefícios da prática de Hatha Yoga",
      },
      {
        metric: "Base visual sólida para crescimento nas redes sociais",
        detail:
          "Estrutura visual reutilizável que permite criação de novos conteúdos de forma consistente",
      },
    ],

    role: [
      "Atuei como Designer, sendo responsável por definição do conceito visual",
      "Criação dos layouts e protótipos",
      "Direção estética e visual",
      "Garantia de alinhamento entre mensagem e identidade",
    ],

    ctaText:
      "Projetos de bem-estar exigem clareza, empatia e equilíbrio, valores que traduzo em soluções visuais funcionais e humanas.",
  },

  {
    slug: "app-mobile-afc",
    title: "AFC — Action Figure Collection",
    category: "Mobile Design · UI/UX · Development",
    client: "Uso pessoal",
    year: "2021",
    heroImage: "/images/projects/app-afc-2000x1200-1.png",
    impactLine:
      "Um aplicativo mobile criado para organizar, gerenciar e valorizar coleções de action figures, desenvolvido do zero — da concepção à implementação.",

    context: [
      "O AFC (Action Figure Collection) é um app autoral, criado para atender uma dor real de colecionadores: a dificuldade em organizar, catalogar e acompanhar suas coleções de forma prática e visual.",
      "O projeto nasceu como uma iniciativa pessoal, unindo paixão por colecionismo e experiência em design e desenvolvimento mobile, evoluindo desde a prototipação de interface até a codificação em React Native para iOS e Android.",
    ],

    challenge: [
      "Falta de organização da coleção",
      "Dificuldade para registrar peças, edições e status",
      "Controle manual (planilhas ou anotações) pouco eficientes",
      "Ausência de apps focados especificamente nesse nicho",
      "Interfaces genéricas, pouco visuais ou complexas",
    ],

    solution: [
      "Prototipação completa das telas do aplicativo",
      "Design de interface focado em usabilidade mobile",
      "Definição de fluxos de navegação",
      "Implementação do app em React Native",
      "Estrutura base pronta para evolução futura",
    ],

    process: [
      {
        step: "Ideação e conceito",
        description:
          "Mapeamento das principais necessidades do colecionador e definição das funcionalidades essenciais do MVP.",
      },
      {
        step: "Prototipação",
        description:
          "Criação das telas no Sketch e Figma, explorando hierarquia visual, fluxo de uso e consistência entre plataformas.",
      },
      {
        step: "Design visual",
        description:
          "Refinamento da identidade visual e componentes no Photoshop, garantindo um visual alinhado ao universo geek/colecionável.",
      },
      {
        step: "Desenvolvimento",
        description:
          "Implementação do app utilizando React Native, com foco em performance, reutilização de componentes e experiência consistente em iOS e Android.",
      },
    ],

    technologies: [
      "Sketch",
      "Figma",
      "Photoshop",
      "React Native",
      "TypeScript",
    ],

    results: [
      {
        metric: "Organização completa da coleção de action figures",
        detail: "Validação de um produto autoral do zero",
      },
      {
        metric: "Interface mobile intuitiva e visualmente atraente",
        detail: "Integração prática entre design e código",
      },
      {
        metric: "App funcional em ambas as plataformas (iOS e Android)",
        detail: "Evolução técnica em desenvolvimento mobile",
      },
      {
        metric: "Feedback positivo de outros colecionadores usuários",
        detail: "Aprimoramento de decisões de UX baseadas no uso real",
      },
      {
        metric: "Base sólida para futuras funcionalidades e monetização",
        detail:
          "Preparação para expansão do app e implementação de novas features.",
      },
    ],

    role: [
      "Ideia e concepção do produto",
      "Prototipação e design das interfaces",
      "Definição dos fluxos de navegação",
      "Implementação completa em React Native",
      "Estruturação técnica do aplicativo",
    ],

    ctaText:
      "Quer tirar uma ideia do papel e transformar em app? Vamos conversar.",
  },

  {
    slug: "carla-maria-podologa",
    title: "Carla Maria · Podóloga",
    category: "Design Gráfico · Product · Bem-estar",
    client: "Carla Maria",
    year: "2020",
    heroImage: "/images/projects/carla-maria-podologa-2000x1200-1.png",
    impactLine:
      "Cartão de visita desenvolvido para fortalecer a identidade profissional, facilitar o contato e ampliar a presença local da profissional.",

    context: [
      "Este projeto teve como objetivo a criação de um cartão de visita profissional para a podóloga Carla Maria, unindo clareza de informação, estética adequada ao segmento da saúde e uma comunicação visual confiável.",
      "Mesmo em um cenário altamente digital, o cartão de visita segue sendo uma ferramenta relevante, especialmente para profissionais da área da saúde, onde o contato presencial e a confiança são fatores decisivos.",
    ],

    challenge: [
      "Comunicação visual genérica ou improvisada",
      "Falta de padronização na identidade profissional",
      "Dificuldade de divulgação em atendimentos presenciais",
      "Materiais que não transmitem credibilidade",
    ],

    solution: [
      "Design de cartão de visita profissional",
      "Definição de hierarquia visual das informações",
      "Escolha de cores adequadas ao segmento de saúde",
      "Arquivo final pronto para impressão",
    ],

    process: [
      {
        step: "Análise do perfil profissional",
        description:
          "Entendimento do público atendido e do posicionamento desejado: confiança, cuidado e profissionalismo.",
      },
      {
        step: "Conceito visual",
        description:
          "Criação de uma identidade visual limpa, com leitura fácil e foco nas informações essenciais.",
      },
      {
        step: "Design gráfico",
        description:
          "Desenvolvimento do layout no Photoshop, garantindo equilíbrio visual, contraste adequado e legibilidade.",
      },
      {
        step: "Finalização",
        description:
          "Preparação do material considerando padrões gráficos para impressão e uso profissional.",
      },
    ],

    technologies: ["Photoshop", "Design e finalização gráfica"],

    results: [
      {
        metric: "Material profissional alinhado ao segmento de saúde",
        detail:
          "Cartão de visita desenvolvido para fortalecer a identidade profissional, facilitar o contato e ampliar a presença local da profissional.",
      },
      {
        metric:
          "Facilidade na divulgação de contato em atendimentos presenciais",
        detail:
          "Cartão de visita permite que a profissional compartilhe suas informações de forma prática e eficiente durante atendimentos presenciais.",
      },
      {
        metric: "Fortalecimento da marca pessoal da profissional",
        detail:
          "O cartão de visita contribuiu para a construção de uma imagem profissional sólida e confiável, fortalecendo a marca pessoal da podóloga.",
      },
      {
        metric: "Comunicação visual clara e confiável",
        detail:
          "O cartão de visita apresenta uma comunicação visual clara e confiável, transmitindo profissionalismo e confiança aos clientes.",
      },
    ],

    role: [
      "Conceito visual",
      "Design gráfico",
      "Definição da hierarquia de informação",
      "Preparação do material final para impressão",
    ],

    ctaText:
      "Precisa de materiais profissionais para o seu negócio ou atendimento? Vamos conversar.",
  },

  {
    slug: "ecommerce-lab-77",
    title: "E-commerce · LAB 77 · Moda & Lifestyle",
    category: "Frontend Development · UI Design · E-commerce Responsivo",
    client: "Lab77",
    year: "2020",
    heroImage: "/images/projects/lab-2000x1200-1.png",
    impactLine:
      "Prototipação, design e desenvolvimento da interface do usuário para um e-commerce de moda, com foco em experiência, performance e conversão.",

    context: [
      "O projeto LAB 77 envolveu todo o ciclo de criação da interface do usuário, desde a concepção dos wireframes, passando pela prototipação visual, até a implementação completa das telas em React.",
      "O objetivo foi desenvolver uma experiência de compra moderna, responsiva e alinhada ao comportamento do consumidor do segmento de vestuário, garantindo fluidez na navegação e clareza na apresentação dos produtos.",
    ],

    challenge: [
      "Interfaces genéricas e pouco diferenciadas",
      "Experiência inconsistente entre desktop e mobile",
      "Fluxo de navegação pouco intuitivo",
      "Baixa clareza na hierarquia das informações",
    ],

    solution: [
      "Wireframes estruturais",
      "Prototipação completa da interface (UI)",
      "Design responsivo (desktop, tablet e mobile)",
      "Desenvolvimento das telas em React",
      "Estrutura de componentes reutilizáveis",
      "Integração visual fiel ao protótipo",
    ],

    process: [
      {
        step: "Wireframes e arquitetura da informação",
        description:
          "Definição dos fluxos principais do e-commerce, navegação, páginas de produto e hierarquia de conteúdo.",
      },
      {
        step: "Prototipação de UI",
        description:
          "Criação da interface visual no Figma, refinando layout, espaçamentos, tipografia e identidade visual.",
      },
      {
        step: "Codificação do frontend",
        description:
          "mplementação das telas utilizando ReactJS, TypeScript e Styled-Components, garantindo: Componentização, Manutenibilidade, Performance e Responsividade nativa.",
      },
      {
        step: "Ajustes e refinamentos",
        description:
          "Ajustes visuais e funcionais para manter fidelidade ao design e melhorar a experiência final do usuário.",
      },
    ],

    technologies: [
      "React",
      "TypeScript",
      "Styled-Components",
      "Storybook",
      "Figma",
      "Photoshop",
    ],

    results: [
      {
        metric: "Interface moderna alinhada ao segmento de moda",
        detail:
          "Design visual que comunica o posicionamento da marca e valor dos produtos",
      },
      {
        metric: "Experiência consistente entre desktop e mobile",
        detail:
          "Design responsivo que mantém a usabilidade e estética em diferentes dispositivos",
      },
      {
        metric: "Base sólida para evolução do e-commerce",
        detail:
          "Estrutura de componentes e código organizada para facilitar futuras",
      },
      {
        metric: "Código organizado e reutilizável",
        detail:
          "Estrutura de componentes e código organizada para facilitar futuras evoluções e manutenções do e-commerce.",
      },
      {
        metric: "Redução de fricções no fluxo de navegação",
        detail:
          "Melhoria na experiência do usuário ao navegar pelo e-commerce, reduzindo obstáculos e aumentando a conversão.",
      },
    ],

    role: [
      "Wireframes",
      "UI Design",
      "Prototipação",
      "Desenvolvimento frontend",
      "Estruturação de componentes",
      "Garantia de fidelidade entre design e código",
    ],

    ctaText:
      "Quer transformar sua ideia ou produto em uma interface profissional? Vamos conversar.",

    gallery: ["/images/projects/lab-gallery-01.png"],
  },

  {
    slug: "flyer-circuit-fit-johnny-eduardo",
    title: "Flyer Circuit Fit · Johnny Eduardo",
    category: "Design Gráfico · Comunicação Visual · Evento Fitness",
    client: "Johnny Eduardo",
    year: "2018",
    heroImage: "/images/projects/flyer-circuit-fit-2000x1200-1.png",
    impactLine:
      "Criação de material gráfico para divulgação de evento fitness local em formato de circuito funcional.",

    context: [
      "O projeto Circuit Fit consistiu na criação de um flyer promocional para divulgação de um evento temporário de Circuito Fitness, com foco em atrair o público local e comunicar de forma clara o conceito, a energia e os benefícios da atividade.",
      "O material precisava ser direto, chamativo e funcional, atendendo tanto à divulgação digital quanto ao uso impresso.",
    ],

    challenge: [
      "Chamasse atenção rapidamente",
      "Comunicasse o conceito de circuito fitness",
      "Transmitisse energia, movimento e dinamismo",
      "Funcionasse bem em mídia digital e impressa",
      "Mantivesse clareza das informações principais",
    ],

    solution: [
      "Flyer promocional para divulgação do evento",
      "Layout pensado para uso digital e impresso",
      "Composição visual focada em impacto e clareza",
      "Hierarquia visual bem definida para informações-chave",
    ],

    process: [
      {
        step: "Definição do conceito visual",
        description:
          "Criação de uma identidade gráfica alinhada ao universo fitness, transmitindo energia, movimento e intensidade.",
      },
      {
        step: "Composição e hierarquia",
        description:
          "Organização dos elementos visuais e textuais para garantir leitura rápida, priorizando informações essenciais como tipo de atividade e chamada principal.",
      },
      {
        step: "Produção gráfica",
        description:
          "Desenvolvimento do material no Photoshop, com atenção a cores, contrastes e legibilidade.",
      },
    ],

    technologies: ["Photoshop"],

    results: [
      {
        metric: "Material visual claro e atrativo",
        detail:
          "O flyer conseguiu transmitir de forma eficaz o conceito de circuito fitness, atraindo o público-alvo e gerando interesse pelo evento.",
      },
      {
        metric: "Comunicação direta com o público-alvo",
        detail:
          "O flyer conseguiu transmitir de forma eficaz o conceito de circuito fitness, atraindo o público-alvo e gerando interesse pelo evento.",
      },
      {
        metric: "Apoio visual eficiente para divulgação local",
        detail:
          "O flyer funcionou bem tanto em mídia digital quanto impressa, garantindo visibilidade e engajamento local.",
      },
      {
        metric: "Fortalecimento da identidade do evento",
        detail:
          "O flyer ajudou a consolidar a identidade visual do evento, tornando-o mais reconhecível e memorável para o público.",
      },
    ],

    role: [
      "Atuei como responsável por todo o processo de criação visual, incluindo: Definição do conceito gráfico, Design do flyer, Tratamento visual e preparação do material para divulgação",
    ],

    ctaText:
      "Quer transformar sua ideia ou sua marca conhecida? Vamos conversar.",
  },

  {
    slug: "media-social-danca-de-salao",
    title: "Media Social · Danca de Salão",
    category: "Design Gráfico · Social Media · Divulgação Digital",
    client: "Johnny Eduardo",
    year: "2018",
    heroImage: "/images/projects/flyer-danca-salao-2000x1200-1.png",
    impactLine:
      "Criação de material gráfico para divulgação digital de aulas de dança através das redes sociais.",

    context: [
      "O projeto Dança de Salão surgiu da necessidade de divulgar aulas de dança de forma digital, utilizando as redes sociais como principal canal de comunicação.",
      "O foco foi criar peças visuais atrativas, acessíveis e alinhadas ao universo da dança, capazes de despertar interesse tanto em iniciantes quanto em pessoas já familiarizadas com a modalidade.",
    ],

    challenge: [
      "Chamasse atenção em feeds de redes sociais",
      "Transmitisse leveza, movimento e bem-estar",
      "Comunicasse claramente a proposta das aulas",
      "Funcionasse bem em diferentes formatos digitais",
      "Atingisse um público amplo e diversificado",
    ],

    solution: [
      "Artes gráficas para divulgação digital",
      "Layouts otimizados para Facebook e Instagram",
      "Composição visual focada em movimento e fluidez",
      "Materiais prontos para uso em mídias sociais",
    ],

    process: [
      {
        step: "Entendimento do público",
        description:
          "Análise do público-alvo, considerando pessoas interessadas em lazer, saúde e bem-estar.",
      },
      {
        step: "Criação do conceito visual",
        description:
          "Desenvolvimento de uma linguagem gráfica leve e dinâmica, alinhada à estética da dança de salão.",
      },
      {
        step: "Produção das peças",
        description:
          "Criação e finalização das artes gráficas, garantindo consistência visual e adequação aos diferentes formatos digitais.",
      },
    ],

    technologies: ["Photoshop"],

    results: [
      {
        metric: "Comunicação visual mais atrativa nas redes sociais",
        detail:
          "As peças gráficas criadas conseguiram chamar a atenção do público-alvo, aumentando o engajamento e o interesse pelas aulas de dança.",
      },
      {
        metric: "Maior clareza na divulgação das aulas",
        detail:
          "As informações sobre as aulas foram apresentadas de forma clara e acessível, facilitando a compreensão do público-alvo.",
      },
      {
        metric: "Fortalecimento da presença digital do projeto",
        detail:
          "As artes gráficas contribuíram para fortalecer a presença digital do projeto, tornando-o mais reconhecível e atraente para o público nas redes sociais.",
      },
      {
        metric: "Melhor conexão com o público interessado em dança e bem-estar",
        detail:
          "As artes gráficas ajudaram a criar uma conexão mais forte com o público interessado em dança e bem-estar, transmitindo os valores e a proposta do projeto de forma eficaz.",
      },
    ],

    role: [
      "Fui responsável por todo o processo de design gráfico.",
      "Definição do conceito visual",
      "Criação das artes digitais",
      "Ajustes para diferentes canais sociais",
      "Finalização e entrega dos materiais",
    ],

    ctaText:
      "Projetos de bem-estar exigem clareza, empatia e equilíbrio, valores que traduzo em soluções visuais funcionais e humanas.",
  },

  {
    slug: "logo-johnny-assessoria-treinamento",
    title: "Logo · Johnny Assessoria Treinamento",
    category: "Identidade Visual · Design Gráfico · Branding",
    client: "Johnny Assessoria Treinamento",
    year: "2018",
    heroImage: "/images/projects/logo-johnny-2000x1200-1.png",
    impactLine:
      "Criação de identidade visual para divulgação do trabalho de personal trainer.",

    context: [
      "O projeto Johnny Assessoria Treinamento surgiu da necessidade de construir uma identidade visual sólida para fortalecer a presença profissional de um personal trainer no mercado de fitness, saúde e bem-estar.",
      "O objetivo principal foi criar uma logomarca profissional, capaz de transmitir confiança, performance e credibilidade, servindo como base para toda a comunicação visual da marca.",
    ],

    challenge: [
      "Representasse autoridade e profissionalismo",
      "Transmitisse energia, movimento e saúde",
      "Diferenciasse o serviço em um mercado competitivo",
      "Facilitasse a divulgação do trabalho em canais digitais e físicos",
      "Criasse reconhecimento de marca",
    ],

    solution: [
      "Criação da logomarca",
      "Definição do conceito visual da marca",
      "Aplicações básicas da identidade",
      "Arquivos prontos para uso digital e impresso",
    ],

    process: [
      {
        step: "Briefing e entendimento da marca",
        description:
          "Levantamento de referências, valores e objetivos do profissional, considerando seu posicionamento no mercado fitness.",
      },
      {
        step: "Criação do conceito visual",
        description:
          "Desenvolvimento de uma identidade visual focada em força, movimento e performance, mantendo equilíbrio entre impacto e legibilidade.",
      },
      {
        step: "Design e finalização",
        description:
          "Criação da logomarca utilizando Sketch, Figma e Photoshop, garantindo flexibilidade para diferentes aplicações.",
      },
    ],

    technologies: ["Sketch", "Figma", "Photoshop"],

    results: [
      {
        metric: "Fortalecimento da identidade profissional",
        detail:
          "A logomarca criada ajudou a construir uma identidade visual sólida, transmitindo confiança e profissionalismo para o personal trainer.",
      },
      {
        metric: "Comunicação visual mais clara e consistente",
        detail:
          "A identidade visual definida permitiu uma comunicação mais clara e consistente em todos os pontos de contato da marca, facilitando a divulgação do trabalho do personal trainer.",
      },
      {
        metric: "Maior credibilidade na divulgação dos serviços",
        detail:
          "A logomarca profissional contribuiu para aumentar a credibilidade do personal trainer, tornando-o mais atrativo para potenciais clientes e fortalecendo sua presença no mercado fitness.",
      },
      {
        metric: "Base sólida para expansão da marca",
        detail:
          "A identidade visual criada serviu como base para futuras aplicações, permitindo que a marca do personal trainer se expandisse de forma consistente e reconhecível em diferentes canais e materiais de divulgação.",
      },
    ],

    role: [
      "Atuei de forma completa em todo o processo de design gráfico e branding.",
      "Criação do conceito da marca",
      "Desenvolvimento da logomarca",
      "Definição da identidade visual",
      "Entrega dos materiais finais",
    ],

    ctaText: "Vamos conversar sobre a sua marca.",
  },
];

/** Find a project by slug */
export function getProjectBySlug(slug: string): ProjectCase | undefined {
  return projectCases.find((p) => p.slug === slug);
}

/** Get all slugs for generateStaticParams */
export function getAllProjectSlugs(): string[] {
  return projectCases.map((p) => p.slug);
}
