import { EmailTemplate } from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: any) {
  try {
    const body = await request.json();
    const { email, firstName, lastName, message, phone, subject } = body;
    const data = await resend.emails.send({
      from: 'Pablo <pablo@pablovaldes.com>',
      to: 'pablovaldes0925@gmail.com',
      subject: "Portfolio Website New Message",
      react: EmailTemplate({ email: email, firstName: firstName, lastName: lastName, message: message, phone: phone, subject: subject }) as React.ReactElement,
    });

    return NextResponse.json(data) //email sent successfully

  } catch (error) {
    console.log('error', error);
  }
}