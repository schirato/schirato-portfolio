import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-medium tracking-widest text-amber-400 uppercase">
        404
      </p>
      <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-400">
        O conteúdo que você procura não existe ou foi movido. Volte ao início
        para explorar o portfólio.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block bg-amber-500 px-6 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-amber-400"
      >
        Voltar ao início
      </Link>
    </main>
  );
}
