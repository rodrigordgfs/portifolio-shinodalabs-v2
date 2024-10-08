// pages/api/send-email.ts

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import resend from "@/libs/resend";

const emailSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email({ message: "Invalid email" }),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

const handleError = (message: string) => {
  return new NextResponse(JSON.stringify({ error: message }), { status: 500 });
};

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin');

  // Define CORS headers
  const headers = new Headers({
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });

  // Handle preflight requests (OPTIONS)
  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { status: 200, headers });
  }
  try {
    const body = await req.json();
    const parsedBody = emailSchema.parse(body);
    const { email, message, name, subject } = parsedBody;

    const { data, error } = await resend.emails.send({
      from: "Shinoda Labs | Web Designer <contato@shinodalabs.xyz>",
      to: [email],
      subject,
      html: `Nome: ${name}<br>Email: ${email}<br>Mensagem: ${message}`,
    });

    if (error) {
      return handleError("Failed to send email");
    }

    console.log("Email sent", data);

    return new NextResponse(JSON.stringify({ status: 200 }), { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify({ error: error.errors }), { status: 400 });
    }
    return handleError("Failed to send email");
  }
}
