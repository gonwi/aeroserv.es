'use server';

import nodemailer from 'nodemailer';

function getTransport() {
  const smtpUrl = process.env.SMTP_URL;

  if (smtpUrl) {
    return nodemailer.createTransport(smtpUrl);
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) return null;

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function sendContactEmail(
  _: { status: 'idle' | 'success' | 'error'; message: string },
  formData: FormData,
): Promise<{ status: 'idle' | 'success' | 'error'; message: string }> {
  const name = String(formData.get('name') ?? '').trim();
  const company = String(formData.get('company') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();
  const consent = String(formData.get('consent') ?? '').trim();

  if (!name || !company || !email || !message) {
    return {
      status: 'error',
      message: 'Por favor, completa todos los campos obligatorios.',
    };
  }

  if (consent !== 'yes') {
    return {
      status: 'error',
      message: 'Debes aceptar la política de privacidad para enviar la solicitud.',
    };
  }

  const transporter = getTransport();

  if (!transporter) {
    return {
      status: 'error',
      message: 'La configuración SMTP no está disponible todavía. Añade SMTP_URL o SMTP_HOST/SMTP_USER/SMTP_PASS en el entorno.',
    };
  }

  try {
    await transporter.sendMail({
      to: process.env.CONTACT_TO_EMAIL ?? 'gonzalo@altifly.com',
      from: process.env.CONTACT_FROM_EMAIL ?? process.env.SMTP_FROM ?? process.env.SMTP_USER ?? 'no-reply@aeroserv.es',
      replyTo: email,
      subject: `Nuevo contacto web de ${name}${company ? ` · ${company}` : ''}`,
      text: [
        `Nombre: ${name}`,
        `Empresa: ${company}`,
        `Email: ${email}`,
        '',
        'Mensaje:',
        message,
      ].join('\n'),
      html: `
        <h2>Nuevo contacto desde la web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    return {
      status: 'success',
      message: 'Tu mensaje se ha enviado correctamente.',
    };
  } catch {
    return {
      status: 'error',
      message: 'No se ha podido enviar el mensaje en este momento. Inténtalo de nuevo más tarde.',
    };
  }
}
