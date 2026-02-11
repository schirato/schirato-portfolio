import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://erikschirato.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Erik Schirato — Frontend Developer Sênior & UI Specialist | Freelancer",
    template: "%s | Erik Schirato",
  },
  description:
    "Frontend Developer freelancer especializado em React, Next.js e TypeScript. Interfaces de alta performance, acessíveis e focadas em conversão para startups e empresas.",
  keywords: [
    "UI Developer",
    "Frontend Developer",
    "Freelancer Frontend",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Desenvolvimento de interfaces",
    "Performance web",
    "Design System",
    "Freelancer frontend sênior",
  ],
  authors: [{ name: "Erik Schirato", url: BASE_URL }],
  creator: "Erik Schirato",
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/favicon.ico",
  },
  manifest: "/icons/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    title: "Erik Schirato — Frontend Developer Sênior & UI Specialist",
    description:
      "Transformo visão de produto em interfaces digitais rápidas, acessíveis e focadas em resultado. React, Next.js, TypeScript.",
    siteName: "Erik Schirato · Frontend & UI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erik Schirato — Frontend Developer Sênior & UI Specialist",
    description:
      "Transformo visão de produto em interfaces digitais rápidas, acessíveis e focadas em resultado.",
    creator: "@erikschirato",
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/** JSON-LD: Person schema for the professional */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Erik Schirato",
  url: BASE_URL,
  jobTitle: "Frontend Developer Sênior & UI Specialist",
  description:
    "Frontend Developer freelancer especializado em React, Next.js e TypeScript. Interfaces de alta performance, acessíveis e focadas em conversão.",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "UI Design",
    "Design Systems",
    "Frontend Development",
    "Web Performance",
    "Accessibility",
  ],
  sameAs: [
    "https://github.com/erikschirato",
    "https://linkedin.com/in/erikschirato",
  ],
};

/** JSON-LD: WebSite schema for sitelinks search box */
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Erik Schirato · Frontend & UI",
  url: BASE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
