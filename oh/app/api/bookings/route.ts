import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const TO_EMAIL = 'info@ohpharma.co.uk';

type BookingPayload = {
  serviceId: string;
  serviceTitle: string;
  appointmentDate: string;
  appointmentTime: string;
  preferredContact?: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const requiredFields: Array<keyof BookingPayload> = [
  'serviceId',
  'serviceTitle',
  'appointmentDate',
  'appointmentTime',
  'name',
  'email',
  'phone',
];

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service is not configured. Missing RESEND_API_KEY.' },
        { status: 500 },
      );
    }

    const payload = (await request.json()) as Partial<BookingPayload>;

    for (const field of requiredFields) {
      if (!payload[field] || String(payload[field]).trim() === '') {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 },
        );
      }
    }

    const resend = new Resend(apiKey);
    const fromEmail = process.env.BOOKING_FROM_EMAIL || 'OH Pharmacy <onboarding@resend.dev>';

    const safePayload: BookingPayload = {
      serviceId: String(payload.serviceId),
      serviceTitle: String(payload.serviceTitle),
      appointmentDate: String(payload.appointmentDate),
      appointmentTime: String(payload.appointmentTime),
      preferredContact: payload.preferredContact ? String(payload.preferredContact) : '',
      name: String(payload.name),
      email: String(payload.email),
      phone: String(payload.phone),
      message: payload.message ? String(payload.message) : '',
    };

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [TO_EMAIL],
      replyTo: safePayload.email,
      subject: `New Booking Request: ${safePayload.serviceTitle}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Service:</strong> ${escapeHtml(safePayload.serviceTitle)} (${escapeHtml(safePayload.serviceId)})</p>
        <p><strong>Appointment Date:</strong> ${escapeHtml(safePayload.appointmentDate)}</p>
        <p><strong>Appointment Time:</strong> ${escapeHtml(safePayload.appointmentTime)}</p>
        <p><strong>Preferred Contact:</strong> ${escapeHtml(safePayload.preferredContact || 'Not specified')}</p>
        <hr />
        <p><strong>Name:</strong> ${escapeHtml(safePayload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(safePayload.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(safePayload.phone)}</p>
        <p><strong>Message:</strong><br />${escapeHtml(safePayload.message || 'No message provided')}</p>
      `,
      text: `New Booking Request

Service: ${safePayload.serviceTitle} (${safePayload.serviceId})
Appointment Date: ${safePayload.appointmentDate}
Appointment Time: ${safePayload.appointmentTime}
Preferred Contact: ${safePayload.preferredContact || 'Not specified'}

Name: ${safePayload.name}
Email: ${safePayload.email}
Phone: ${safePayload.phone}
Message: ${safePayload.message || 'No message provided'}`,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Unable to submit booking request.' },
      { status: 500 },
    );
  }
}
