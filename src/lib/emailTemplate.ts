const emailTemplate = ({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) => `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Novo contato</title>
</head>
<body style="
  margin:0;
  padding:0;
  background-color:#fff;
  font-family:Arial, Helvetica, sans-serif;
">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
  <tr>
    <td align="center">

      <!-- Card -->
      <table width="600" cellpadding="0" cellspacing="0" style="
        background:#020617;
        border-radius:14px;
        overflow:hidden;
        box-shadow:0 12px 40px rgba(0,0,0,.45);
      ">

        <!-- Header -->
        <tr>
          <td style="
            padding:28px;
            text-align:center;
            border-bottom:1px solid #1e293b;
          ">

            <!-- Logo -->
            <img
              src="https://schirato.net/images/logo-email.png"
              alt="Erik Schirato"
              width="120"
              style="display:block; margin:0 auto 12px;"
            />

            <h1 style="
              margin:0;
              font-size:20px;
              color:#e5e7eb;
              letter-spacing:0.4px;
            ">
              Novo contato — Portfólio
            </h1>

            <p style="
              margin:6px 0 0;
              font-size:13px;
              color:#94a3b8;
            ">
              schirato.net
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="
            padding:28px;
            color:#e5e7eb;
            font-size:14px;
            line-height:1.6;
          ">

            <p style="margin:0 0 14px;">
              <strong>Nome</strong><br/>
              ${name}
            </p>

            <p style="margin:0 0 14px;">
              <strong>Email</strong><br/>
              <a href="mailto:${email}" style="color:#38bdf8; text-decoration:none;">
                ${email}
              </a>
            </p>

            <p style="margin:0 0 20px;">
              <strong>Assunto</strong><br/>
              ${subject || "Contato pelo site"}
            </p>

            <!-- Message -->
            <div style="
              background:#020617;
              border:1px solid #1e293b;
              border-radius:10px;
              padding:18px;
              color:#e5e7eb;
              font-size:14px;
              line-height:1.6;
            ">
              ${message.replace(/\n/g, "<br/>")}
            </div>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="
            padding:18px;
            text-align:center;
            font-size:12px;
            color:#64748b;
            border-top:1px solid #1e293b;
          ">
            Enviado através do formulário de contato do site<br/>
            <strong>Erik Schirato</strong> — UI Developer & Frontend
          </td>
        </tr>

      </table>

    </td>
  </tr>
</table>

</body>
</html>
`;

export { emailTemplate };
