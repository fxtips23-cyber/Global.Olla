import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT = process.env.CONTACT_TO || "info@ollatrade.com";

function isValidEmail(e: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

function sanitize(s: string) {
  return String(s).replace(/[<>]/g, "").trim().slice(0, 2000);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, country, enquiryType, subject, message, pageUrl, _honeypot } = body;

    /* ── Honeypot spam check ─────────────────────────────────────── */
    if (_honeypot) {
      return NextResponse.json({ success: true });
    }

    /* ── Validation ──────────────────────────────────────────────── */
    if (!fullName?.trim())          return NextResponse.json({ error: "Full name is required." }, { status: 400 });
    if (!email?.trim())             return NextResponse.json({ error: "Email is required." }, { status: 400 });
    if (!isValidEmail(email))       return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    if (!enquiryType?.trim())       return NextResponse.json({ error: "Enquiry type is required." }, { status: 400 });
    if (!subject?.trim())           return NextResponse.json({ error: "Subject is required." }, { status: 400 });
    if (!message?.trim())           return NextResponse.json({ error: "Message is required." }, { status: 400 });
    if (message.trim().length < 20) return NextResponse.json({ error: "Message must be at least 20 characters." }, { status: 400 });

    /* ── Build email HTML ────────────────────────────────────────── */
    const submittedAt = new Date().toLocaleString("en-GB", {
      timeZone: "UTC",
      year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", second: "2-digit",
    }) + " UTC";

    const rows = [
      ["Full Name",    sanitize(fullName)],
      ["Email",        sanitize(email)],
      ["Phone",        sanitize(phone || "—")],
      ["Country",      sanitize(country || "—")],
      ["Enquiry Type", sanitize(enquiryType)],
      ["Subject",      sanitize(subject)],
      ["Message",      sanitize(message)],
      ["Page URL",     sanitize(pageUrl || "—")],
      ["Submitted At", submittedAt],
    ];

    const tableRows = rows
      .map(
        ([label, value]) =>
          `<tr>
            <td style="padding:10px 14px;background:#f5f7fa;border:1px solid #e5e7eb;font-size:12px;font-weight:700;color:#374151;white-space:nowrap;width:160px">${label}</td>
            <td style="padding:10px 14px;border:1px solid #e5e7eb;font-size:13px;color:#111827;white-space:pre-wrap">${value}</td>
           </tr>`
      )
      .join("");

    const html = `
      <!DOCTYPE html>
      <html>
      <body style="font-family:Arial,sans-serif;background:#f9fafb;margin:0;padding:20px">
        <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb">
          <div style="background:#050c15;padding:24px 28px">
            <div style="font-size:20px;font-weight:800;color:#fff">Olla Trade</div>
            <div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px">New Contact Form Submission</div>
          </div>
          <div style="padding:24px 28px">
            <table style="width:100%;border-collapse:collapse">
              ${tableRows}
            </table>
          </div>
          <div style="background:#f5f7fa;padding:14px 28px;border-top:1px solid #e5e7eb">
            <p style="font-size:11px;color:#9ca3af;margin:0">
              This message was sent via the Olla Trade website contact form.
              Do not reply directly to this email — respond to the sender's email address above.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    /* ── Transporter ─────────────────────────────────────────────── */
    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST   || "smtp.gmail.com",
      port:   Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const fromAddress = process.env.SMTP_FROM || `"Olla Trade Website" <${process.env.SMTP_USER}>`;

    await transporter.sendMail({
      from:    fromAddress,
      to:      RECIPIENT,
      replyTo: sanitize(email),
      subject: `New Contact Form Submission - Olla Trade | ${sanitize(enquiryType)}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact/route] sendMail error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please email info@ollatrade.com directly." },
      { status: 500 }
    );
  }
}
