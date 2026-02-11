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
  background-color:#f4f4f5;
  font-family:Arial, Helvetica, sans-serif;
">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
  <tr>
    <td align="center">

      <!-- Card -->
      <table width="600" cellpadding="0" cellspacing="0" style="
        background:#ffffff;
        border-radius:12px;
        overflow:hidden;
        border:1px solid #e4e4e7;
      ">

        <!-- Header -->
        <tr>
          <td style="
            padding:32px 28px 24px;
            text-align:center;
            border-bottom:1px solid #e4e4e7;
          ">

            <!-- Logo -->
            <img
              src="https://schirato.net/images/logo-email.png"
              alt="Erik Schirato"
              width="110"
              style="display:block; margin:0 auto 14px;"
            />

            <h1 style="
              margin:0;
              font-size:19px;
              font-weight:700;
              color:#18181b;
              letter-spacing:0.2px;
            ">
              Novo contato — Portfólio
            </h1>

            <p style="
              margin:6px 0 0;
              font-size:13px;
              color:#71717a;
            ">
              <a href="https://schirato.net" style="color:#71717a; text-decoration:none;">
                schirato.net
              </a>
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="
            padding:28px;
            color:#27272a;
            font-size:14px;
            line-height:1.6;
          ">

            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:0 0 16px;">
                  <span style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.6px; color:#a1a1aa;">Nome</span><br/>
                  <span style="font-size:15px; color:#18181b;">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:0 0 16px;">
                  <span style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.6px; color:#a1a1aa;">Email</span><br/>
                  <a href="mailto:${email}" style="font-size:15px; color:#2563eb; text-decoration:none;">
                    ${email}
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding:0 0 20px;">
                  <span style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.6px; color:#a1a1aa;">Assunto</span><br/>
                  <span style="font-size:15px; color:#18181b;">${subject || "Contato pelo site"}</span>
                </td>
              </tr>
            </table>

            <!-- Message -->
            <div style="
              background:#fafafa;
              border:1px solid #e4e4e7;
              border-radius:8px;
              padding:18px;
              color:#27272a;
              font-size:14px;
              line-height:1.7;
            ">
              ${message.replace(/\n/g, "<br/>")}
            </div>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="
            padding:20px 28px;
            text-align:center;
            font-size:12px;
            color:#a1a1aa;
            border-top:1px solid #e4e4e7;
            background:#fafafa;
          ">
            Enviado através do formulário de contato do site<br/>
            <strong style="color:#52525b;">Erik Schirato</strong> — UI Developer &amp; Frontend
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
