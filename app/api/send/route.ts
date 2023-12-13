import { Resend } from "resend";
import * as React from "react";

import EmailTemplate from "@/components/email/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, body } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "hello@brucesalcedo.com",
      to: "hello@brucesalcedo.com",
      subject: "Message Request From Portfolio",
      react: EmailTemplate({ email, body }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
