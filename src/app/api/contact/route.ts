import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getResend } from "@/lib/resend";
import { rateLimit } from "@/lib/rateLimit";
import { contactSchema } from "@/lib/schemas";
import { emailTemplate } from "@/lib/emailTemplate";

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Muitas requisições. Tente novamente em 1 minuto." },
        { status: 429 },
      );
    }

    const body = await request.json();

    // Server-side validation
    const data = contactSchema.parse(body);

    // Honeypot check
    if (data.honeypot) {
      // Silently reject bot submissions
      return NextResponse.json({ success: true });
    }

    const toEmail = process.env.EMAIL_TO;
    const fromEmail =
      process.env.EMAIL_FROM || "Portfólio Schirato <onboarding@resend.dev>";
    if (!toEmail) {
      console.error("Missing EMAIL_TO env var");
      return NextResponse.json(
        { error: "Configuração de email ausente no servidor." },
        { status: 500 },
      );
    }

    // Send email via Resend
    const { name, email, subject, message } = data;
    const { error } = await getResend().emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `[Portfólio] Novo contato — ${subject || "Contato pelo site"}`,
      html: emailTemplate({
        name,
        email,
        subject,
        message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Erro ao enviar email. Tente novamente mais tarde." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      const issues = err.issues ?? [];
      const firstMessage = issues[0]?.message ?? "Dados inválidos";
      return NextResponse.json({ error: firstMessage }, { status: 400 });
    }

    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 },
    );
  }
}
