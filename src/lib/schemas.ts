import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome muito longo"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(1, "Selecione um assunto"),
  message: z
    .string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(2000, "Mensagem muito longa"),
  honeypot: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
