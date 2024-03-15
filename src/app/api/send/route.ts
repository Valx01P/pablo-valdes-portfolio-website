import { EmailTemplate } from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Interface for tracking request counts
interface RequestCount {
  timestamp: number;
}

// Object to store request counts per IP address
const requestCounts: Record<string, RequestCount[]> = {};

// Function to check if the request rate exceeds the limit
const isRateLimited = (ip: string): boolean => {
  const requestLimit = 3; // Limiting to 2 requests per 10 minutes
  const interval = 10 * 60 * 1000; // 10 minutes

  // Initialize request count if not already present
  requestCounts[ip] = requestCounts[ip] || [];

  // Remove requests older than 1 minute
  requestCounts[ip] = requestCounts[ip].filter(({ timestamp }) => timestamp > Date.now() - interval);

  // Check if request count exceeds limit
  if (requestCounts[ip].length >= requestLimit) {
    return true; // Rate limit exceeded
  }

  // Increment request count
  requestCounts[ip].push({ timestamp: Date.now() });
  return false; // Rate limit not exceeded
};

export async function POST(request: any) {
  try {
    // Get IP address of requester
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || request.headers.get('remote_addr') || request.connection.remoteAddress;

    // Check if request is rate limited
    if (isRateLimited(ip)) {
      return new Response('Too many requests', { status: 429, statusText: 'Too Many Requests' });
    }

    const body = await request.json();
    const { email, firstName, lastName, message, phone, subject } = body;
    const data = await resend.emails.send({
      from: 'Pablo <pablo@pablovaldes.com>',
      to: 'pablovaldes0925@gmail.com',
      subject: "Portfolio Website New Message",
      react: EmailTemplate({ email, firstName, lastName, message, phone, subject }) as React.ReactElement,
    });

    return NextResponse.json(data); // Email sent successfully

  } catch (error) {
    console.error('Error:', error);
  }
}


// import { EmailTemplate } from '@/components/EmailTemplate';
// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: any) {
//   try {
//     const body = await request.json();
//     const { email, firstName, lastName, message, phone, subject } = body;
//     const data = await resend.emails.send({
//       from: 'Pablo <pablo@pablovaldes.com>',
//       to: 'pablovaldes0925@gmail.com',
//       subject: "Portfolio Website New Message",
//       react: EmailTemplate({ email: email, firstName: firstName, lastName: lastName, message: message, phone: phone, subject: subject }) as React.ReactElement,
//     });

//     return NextResponse.json(data) //email sent successfully

//   } catch (error) {
//     console.log('error', error);
//   }
// }