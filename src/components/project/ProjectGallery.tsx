"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className="bg-[#0A1015] py-12 md:py-16">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-video overflow-hidden rounded-lg"
            >
              <Image
                src={src}
                alt={`${title} — imagem ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
