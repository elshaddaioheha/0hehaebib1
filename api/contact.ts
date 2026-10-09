import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

// The sender must be on a domain verified in Resend; the inbox can be anywhere.
const FROM = process.env.CONTACT_FROM_EMAIL ?? "Oheha Ebibi Portfolio <contact@ohehaebibi.dev>";
const TO = process.env.CONTACT_TO_EMAIL ?? "info@ohehaebibi.dev";

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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    res.status(500).json({ error: "Email is not configured yet. Please email me directly." });
    return;
  }

  const body = coerceBody(req);

  // Honeypot: real visitors never see this field, bots fill it in. Pretend success so they move on.
  if (sanitize(body?.company)) {
    res.status(200).json({ ok: true });
    return;
  }

  const name = sanitize(body?.name, 200).replace(/[\r\n]+/g, " ");
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

  // The SDK reports failures in `error` rather than throwing, so both paths need handling.
  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend rejected the email:", error);
      res.status(502).json({ error: "Couldn't send your message. Please try again or email me directly." });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Resend request failed:", error);
    res.status(500).json({ error: "Couldn't send your message. Please try again or email me directly." });
  }
}
