# Schirato Portfolio

Portfólio profissional desenvolvido com Next.js 14+, TypeScript, TailwindCSS e Framer Motion.

---

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **TailwindCSS v4**
- **Framer Motion** — animações e transições
- **Lucide React** — ícones
- **React Hook Form + Zod** — validação de formulário
- **Resend** — envio de emails do formulário de contato

---

## Setup

### 1. Clone e instale

```bash
git clone <repo-url>
cd schirato-portfolio
npm install
```

### 2. Configure variáveis de ambiente

Copie o arquivo de exemplo e preencha com suas credenciais:

```bash
cp .env.example .env.local
```

Edite `.env.local`:

| Variável           | Descrição                                     |
| ------------------ | --------------------------------------------- |
| `RESEND_API_KEY`   | Sua API Key do [Resend](https://resend.com)   |
| `CONTACT_TO_EMAIL` | Email que receberá as mensagens do formulário |

### 3. Rode em desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### 4. Build para produção

```bash
npm run build
npm start
```

---

## Estrutura do Projeto

```
src/
├── app/
│   ├── api/contact/route.ts    # API Route para envio de email via Resend
│   ├── globals.css             # Estilos globais + tema TailwindCSS
│   ├── layout.tsx              # Layout raiz (fonte, metadata, SEO)
│   └── page.tsx                # Página principal — compõe todas as seções
├── components/
│   ├── header/
│   │   └── Header.tsx          # Header fixo com nav + mobile menu
│   ├── sections/
│   │   ├── Hero.tsx            # Hero com imagem de fundo + texto
│   │   ├── About.tsx           # Seção "Sobre" com 2 colunas
│   │   ├── SoftSkills.tsx      # Grid de soft skills + progress rings
│   │   ├── Portfolio.tsx       # Grid de portfólio com filtro
│   │   ├── QuoteBand.tsx       # Faixa de citação (Steve Jobs)
│   │   ├── CtaBand.tsx         # CTA "Vamos trabalhar juntos"
│   │   ├── Contact.tsx         # Formulário de contato
│   │   └── Footer.tsx          # Rodapé com social links
│   └── ui/
│       ├── Button.tsx          # Botão reutilizável
│       ├── Card.tsx            # Card animado
│       ├── Container.tsx       # Wrapper de largura máxima
│       ├── ProgressRing.tsx    # Anel de progresso SVG animado
│       ├── SectionTitle.tsx    # Título de seção com ornamento
│       └── Toast.tsx           # Notificação de sucesso/erro
├── content/
│   └── portfolio.ts            # Dados mock do portfólio
└── lib/
    ├── rateLimit.ts            # Rate limiting simples por IP
    ├── resend.ts               # Cliente Resend
    ├── schemas.ts              # Schemas Zod (validação)
    └── utils.ts                # Utilitários (cn)
```

---

## Como trocar imagens e textos

### Imagens do Portfólio

Edite `src/content/portfolio.ts` — altere `imageUrl`, `title`, `category` e `href` de cada item.

### Imagens de fundo (Hero, Quote)

Edite os URLs diretamente nos componentes:

- **Hero**: `src/components/sections/Hero.tsx` — propriedade `backgroundImage`
- **Quote**: `src/components/sections/QuoteBand.tsx` — propriedade `backgroundImage`

Para usar imagens locais, coloque-as em `public/images/` e referencie como `/images/nome.jpg`.

### Textos da seção Sobre

Edite as constantes `leftColumnText` e `rightColumnItems` em `src/components/sections/About.tsx`.

### Soft Skills

Edite o array `softSkills` em `src/components/sections/SoftSkills.tsx`.

### Dados pessoais / Nome

Procure por "Erik Schirato" ou "Schirato" nos componentes e altere conforme necessário.

---

## Comandos

| Comando         | Descrição                            |
| --------------- | ------------------------------------ |
| `npm run dev`   | Inicia o servidor de desenvolvimento |
| `npm run build` | Build de produção                    |
| `npm start`     | Inicia o servidor de produção        |
| `npm run lint`  | Roda o ESLint                        |

---

## Deploy

O projeto é compatível com deploy direto na **Vercel**:

1. Faça push para o GitHub
2. Conecte o repositório na [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`)
4. Deploy automático!

---

## Licença

MIT
