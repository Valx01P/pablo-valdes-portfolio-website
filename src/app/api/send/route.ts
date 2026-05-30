import { EmailTemplate } from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Avoid pre-rendering / build-time evaluation of this route.
export const dynamic = 'force-dynamic';

// Object to store request timestamps per IP address (best-effort, in-memory).
const requestCounts: Record<string, number[]> = {};

// Returns true when the caller has exceeded the allowed request rate.
const isRateLimited = (ip: string): boolean => {
  const requestLimit = 3; // 3 requests per 10 minutes
  const interval = 10 * 60 * 1000; // 10 minutes

  const now = Date.now();
  requestCounts[ip] = (requestCounts[ip] || []).filter((t) => t > now - interval);

  if (requestCounts[ip].length >= requestLimit) {
    return true;
  }

  requestCounts[ip].push(now);
  return false;
};

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    if (isRateLimited(ip)) {
      return new Response('Too many requests', { status: 429, statusText: 'Too Many Requests' });
    }

    const body = await request.json();
    const { email, firstName, lastName, message, phone, subject } = body;

    const resend = new Resend(apiKey);
    const data = await resend.emails.send({
      from: 'Pablo <pablo@pablovaldes.com>',
      to: 'pablovaldes0925@gmail.com',
      subject: 'Portfolio Website New Message',
      react: EmailTemplate({ email, firstName, lastName, message, phone, subject }) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
