import nodemailer from "nodemailer";
import { contactFormSchema } from "@/components/contact-section/contact-form-schema";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      const firstMessage =
        validationResult.error.issues[0]?.message ?? "Invalid form data.";
      return Response.json({ message: firstMessage }, { status: 400 });
    }

    const { name, email, message } = validationResult.data;
    const safeMessage = message.replace(/\n/g, "<br />");

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!host || !user || !pass || !from || !to) {
      return Response.json(
        {
          message:
            "Mail service is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL.",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from,
      to,
      subject: `Portfolio contact: ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New portfolio contact message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return Response.json(
      { message: "Message sent successfully." },
      { status: 200 },
    );
  } catch {
    return Response.json(
      { message: "Could not send your message. Please try again later." },
      { status: 500 },
    );
  }
}
