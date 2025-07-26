import { NextRequest, NextResponse } from 'next/server';

const CONTACT = process.env.BOT_URL;

const RECAPATCHA_URL = 'https://www.google.com/recaptcha/api/siteverify';
const SECRET_KEY = process.env.SECRET_KEY;

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (body.message.length > 2000) {
    return new NextResponse('Message too long', {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const response = await fetch(RECAPATCHA_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${SECRET_KEY}&response=${body.token}`,
    });

    const recaptchaResult = await response.json();

    if (recaptchaResult.success !== true) {
      return new NextResponse('reCAPTCHA verification failed', {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const time = new Date(Date.now());
    const { name, email, message } = body;

    const markdown = `
      *Mensagem do dia ${time.toLocaleString('pt-BR')}*

      👤 *Nome:* ${name}
      📧 *Email:* ${email}

      ${message}
    `
      .replace(/[-().|]/g, '\\$&')
      .replace(/^(?!\s*$)\s+/gm, '');

    const url = `${CONTACT}&text=${encodeURIComponent(
      markdown
    )}&parse_mode=MarkdownV2`;

    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new NextResponse('Message not sent due to an error', {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new NextResponse('Message sent successfully', {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
