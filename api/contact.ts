import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(value: string | undefined) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function sanitize(value: unknown, max = 2000) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function coerceBody(req: VercelRequest) {
  if (!req.body) return {};
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return req.body as Record<string, unknown>;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const body = coerceBody(req);
  const name = sanitize(body?.name, 200);
  const email = sanitize(body?.email, 320);
  const message = sanitize(body?.message, 4000);

  if (!name || !email || !message) {
    res.status(400).json({ error: "Name, email, and message are required." });
    return;
  }

  if (!isValidEmail(email)) {
    res.status(400).json({ error: "Invalid email address." });
    return;
  }

  try {
    await resend.emails.send({
      from: "portfolio@oheha.dev",
      to: ["elshaddaioheha@gmail.com"],
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    const messageOut = error instanceof Error ? error.message : "Failed to send email.";
    res.status(500).json({ error: messageOut });
  }
}
