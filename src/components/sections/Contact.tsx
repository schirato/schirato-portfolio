"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";
import type { ContactFormData } from "@/lib/schemas";
import { event as gaEvent } from "@/lib/gtag";

const subjectOptions = [
  { value: "", label: "Qual o tipo de projeto?" },
  { value: "projeto", label: "Novo produto digital" },
  { value: "freelance", label: "Reforço de time (freelancer)" },
  { value: "redesign", label: "Redesign / refatoração" },
  { value: "consultoria", label: "Consultoria técnica" },
  { value: "outro", label: "Outro assunto" },
];

export function Contact() {
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = useCallback(
    async (data: ContactFormData) => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        const json = await res.json();

        if (!res.ok) {
          throw new Error(json.error || "Erro ao enviar mensagem");
        }

        gaEvent("generate_lead", {
          section: "contact_form",
          subject: data.subject,
        });
        setToast({
          message: "Mensagem recebida! Retorno em até 24 horas úteis.",
          type: "success",
        });
        reset();
      } catch (err) {
        setToast({
          message:
            err instanceof Error
              ? err.message
              : "Erro ao enviar mensagem. Tente novamente.",
          type: "error",
        });
      }
    },
    [reset],
  );

  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="bg-[#0F2B36] py-20 md:py-28"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-md"
        >
          <h2 id="contact-title" className="sr-only">
            Formulário de contato
          </h2>

          {/* Intro text */}
          <p className="mb-8 text-center text-xs leading-relaxed text-gray-400">
            Descreva brevemente o que você precisa. Sem compromisso, sem
            burocracia. Respondo todas as mensagens em até 24 horas úteis.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            noValidate
          >
            {/* Honeypot */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="honeypot">Não preencha</label>
              <input
                id="honeypot"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register("honeypot")}
              />
            </div>

            {/* Name */}
            <div>
              <label htmlFor="contact-name" className="sr-only">
                Nome
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Seu nome"
                className="w-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors focus:border-amber-400/60 focus:outline-none focus:ring-1 focus:ring-amber-400/40"
                {...register("name", {
                  required: "Nome é obrigatório",
                  minLength: {
                    value: 2,
                    message: "Nome deve ter pelo menos 2 caracteres",
                  },
                })}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="sr-only">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="Seu melhor e-mail"
                className="w-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors focus:border-amber-400/60 focus:outline-none focus:ring-1 focus:ring-amber-400/40"
                {...register("email", {
                  required: "Email é obrigatório",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Email inválido",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="contact-subject" className="sr-only">
                Assunto
              </label>
              <select
                id="contact-subject"
                className="w-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-colors focus:border-amber-400/60 focus:outline-none focus:ring-1 focus:ring-amber-400/40 [&>option]:bg-[#0F2B36] [&>option]:text-white"
                {...register("subject", {
                  required: "Selecione um assunto",
                })}
                defaultValue=""
              >
                {subjectOptions.map((opt) => (
                  <option
                    key={opt.value}
                    value={opt.value}
                    disabled={opt.value === ""}
                  >
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.subject && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="sr-only">
                Mensagem
              </label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="Conte um pouco sobre o projeto, prazo e desafios..."
                className="w-full resize-none border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors focus:border-amber-400/60 focus:outline-none focus:ring-1 focus:ring-amber-400/40"
                {...register("message", {
                  required: "Mensagem é obrigatória",
                  minLength: {
                    value: 10,
                    message: "Mensagem deve ter pelo menos 10 caracteres",
                  },
                })}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            <p className="mb-8 text-center text-xs leading-relaxed text-gray-400">
              Respondo pessoalmente todas as mensagens.
            </p>

            {/* Submit */}
            <Button
              type="submit"
              isLoading={isSubmitting}
              className="w-full"
              size="lg"
            >
              Enviar mensagem
            </Button>
          </form>
        </motion.div>
      </Container>

      {/* Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
}
