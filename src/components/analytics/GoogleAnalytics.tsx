"use client";

import Script from "next/script";
import { Suspense } from "react";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";
import { usePageTracking } from "@/hooks/usePageTracking";

/** Componente interno que ativa o hook (precisa de Suspense por useSearchParams) */
function PageTracker() {
  usePageTracking();
  return null;
}

/**
 * Carrega o script do GA4 via next/script (afterInteractive) e
 * rastreia page views nas mudanças de rota do App Router.
 *
 * Renderiza nulo quando NEXT_PUBLIC_GA_ID não está definido,
 * garantindo falha silenciosa em ambientes sem analytics.
 */
export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: true
          });
        `}
      </Script>

      <Suspense fallback={null}>
        <PageTracker />
      </Suspense>
    </>
  );
}
