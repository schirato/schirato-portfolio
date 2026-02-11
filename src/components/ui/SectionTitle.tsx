"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
  id?: string;
}

export function SectionTitle({
  title,
  subtitle,
  light = false,
  className,
  id,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={cn("mb-10 text-center md:mb-14", className)}
    >
      <h2
        id={id}
        className={cn(
          "text-2xl font-semibold tracking-wide sm:text-3xl",
          light ? "text-white" : "text-white",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-xs tracking-widest text-gray-400 uppercase">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-4 h-px w-16 bg-amber-400" />
    </motion.div>
  );
}
