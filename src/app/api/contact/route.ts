import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Payload = {
  fullName?: string;
  email?: string;
  phone?: string;
  dealership?: string;
  message?: string;
};

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderHtml(p: Required<Pick<Payload, "fullName" | "email" | "phone" | "dealership">> & { message: string }): string {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:8px 12px;background:#f1f5f9;font-weight:600;color:#0f172a;width:180px;">${label}</td>
      <td style="padding:8px 12px;color:#0f172a;">${value || "&mdash;"}</td>
    </tr>`;
  return `<!doctype html>
<html><body style="margin:0;padding:24px;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
    <div style="background:#09468D;color:#ffffff;padding:20px 24px;">
      <h1 style="margin:0;font-size:20px;line-height:1.3;">New Demo Request</h1>
      <p style="margin:4px 0 0;font-size:14px;opacity:0.85;">AutoAdvisor Agent</p>
    </div>
    <table role="presentation" style="width:100%;border-collapse:collapse;font-size:14px;">
      ${row("Full Name", escapeHtml(p.fullName))}
      ${row("Email", escapeHtml(p.email))}
      ${row("Phone", escapeHtml(p.phone))}
      ${row("Dealership", escapeHtml(p.dealership))}
      ${row("Message", escapeHtml(p.message).replace(/\n/g, "<br/>"))}
    </table>
  </div>
</body></html>`;
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const fullName = (body.fullName ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const dealership = (body.dealership ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!fullName || !email || !phone || !dealership) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const user = process.env.BREVO_USER;
  const pass = process.env.BREVO_API_KEY;
  if (!user || !pass) {
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: { user, pass },
  });

  const html = renderHtml({ fullName, email, phone, dealership, message });
  const text = [
    `Full Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Dealership: ${dealership}`,
    `Message: ${message || "—"}`,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: '"AutoAdvisor Agent" <noreply@autoadvisoragent.com>',
      to: "miller.adam@logostek.com",
      replyTo: email,
      subject: "New Demo Request — AutoAdvisor Agent",
      text,
      html,
    });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("contact mail error", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
