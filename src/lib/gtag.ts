export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const isGAEnabled = (): boolean =>
  typeof window !== "undefined" && GA_MEASUREMENT_ID.length > 0;

/** Dispara um page_view customizado para navegação SPA */
export const pageView = (url: string): void => {
  if (!isGAEnabled()) return;
  window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
};

/** Dispara um evento personalizado no GA4 */
export const event = (
  action: string,
  params?: Gtag.EventParams & Record<string, string | number | boolean>,
): void => {
  if (!isGAEnabled()) return;
  window.gtag("event", action, params);
};
