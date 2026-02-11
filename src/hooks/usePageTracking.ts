"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageView } from "@/lib/gtag";

/**
 * Rastreia page views em navegação client-side (App Router / SPA).
 * Deve ser usado dentro de um Suspense boundary por causa do useSearchParams.
 */
export function usePageTracking(): void {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url =
      pathname +
      (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    pageView(url);
  }, [pathname, searchParams]);
}
