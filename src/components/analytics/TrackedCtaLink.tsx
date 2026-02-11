"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { event as gaEvent } from "@/lib/gtag";

interface TrackedCtaLinkProps {
  href: string;
  label: string;
  section: string;
  className?: string;
  children: React.ReactNode;
  showArrow?: boolean;
}

/** Link com tracking GA4 para uso em server components */
export function TrackedCtaLink({
  href,
  label,
  section,
  className,
  children,
  showArrow = true,
}: TrackedCtaLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => gaEvent("cta_click", { section, label })}
    >
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" />}
    </Link>
  );
}
