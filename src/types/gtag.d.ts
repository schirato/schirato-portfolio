/// <reference types="gtag.js" />

interface Window {
  gtag: Gtag.Gtag;
  dataLayer: Record<string, unknown>[];
}
