import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// ── HTML entity escaper — prevents XSS in email templates ─────────────────
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ── Basic email format validator ───────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Guard: fail fast with a clear message if API key is missing
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  try {
    const { firstName, lastName, email, phone, business, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return res.status(400).json({ error: 'Missing required fields: firstName, lastName, email' });
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ error: 'Invalid email address format' });
    }

    // Sanitize all user inputs before embedding in HTML
    const safe = {
      firstName: escapeHtml(firstName),
      lastName: escapeHtml(lastName),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      business: escapeHtml(business),
      message: escapeHtml(message),
    };

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const ownerEmail = process.env.RESEND_OWNER_EMAIL || fromEmail;

    // ── 1. Client confirmation email ──────────────────────────────────────
    const clientHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting QuickSite PH</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f3f4f6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">QuickSite PH</h1>
              <p style="margin: 10px 0 0 0; color: #bfdbfe; font-size: 14px; font-weight: 500;">Automated Websites for Filipino Businesses</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #111827; font-size: 24px; font-weight: 700;">Thanks for reaching out, ${safe.firstName}! 👋</h2>
              <p style="margin: 0 0 16px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">We've received your inquiry and we're excited to help automate your business!</p>
              <p style="margin: 0 0 24px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">Our team will review your message and get back to you within <strong style="color: #2563eb;">24 hours</strong>.</p>

              <!-- Inquiry Summary -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #eff6ff; border-radius: 12px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0 0 12px 0; color: #1e40af; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">📋 Your Inquiry Summary</p>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 6px 0; color: #6b7280; font-size: 14px; width: 120px;">Name:</td>
                        <td style="padding: 6px 0; color: #111827; font-size: 14px; font-weight: 500;">${safe.firstName} ${safe.lastName}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #6b7280; font-size: 14px;">Email:</td>
                        <td style="padding: 6px 0; color: #111827; font-size: 14px; font-weight: 500;">${safe.email}</td>
                      </tr>
                      ${safe.phone ? `<tr><td style="padding: 6px 0; color: #6b7280; font-size: 14px;">Phone:</td><td style="padding: 6px 0; color: #111827; font-size: 14px; font-weight: 500;">${safe.phone}</td></tr>` : ''}
                      ${safe.business ? `<tr><td style="padding: 6px 0; color: #6b7280; font-size: 14px;">Business:</td><td style="padding: 6px 0; color: #111827; font-size: 14px; font-weight: 500;">${safe.business}</td></tr>` : ''}
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td align="center">
                    <a href="https://quicksiteph.com" style="display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">Visit Our Website</a>
                  </td>
                </tr>
              </table>

              <p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 1.6;">
                In the meantime, feel free to check out our <a href="https://quicksiteph.com/#templates" style="color: #2563eb; text-decoration: none; font-weight: 500;">template gallery</a> to see examples of what we can build for you.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">QuickSite PH — Automated Websites for Filipino Businesses</p>
              <div style="margin-top: 12px;">
                <a href="https://www.facebook.com/profile.php?id=61574823853351" style="margin: 0 8px; color: #6b7280; text-decoration: none; font-size: 12px;">Facebook</a>
                <span style="color: #d1d5db;">•</span>
                <a href="https://www.linkedin.com/in/mark-anthony-dagon-41b478213/" style="margin: 0 8px; color: #6b7280; text-decoration: none; font-size: 12px;">LinkedIn</a>
                <span style="color: #d1d5db;">•</span>
                <a href="https://quicksiteph.com" style="margin: 0 8px; color: #6b7280; text-decoration: none; font-size: 12px;">Website</a>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    // ── 2. Owner notification email ────────────────────────────────────────
    const ownerHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f3f4f6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 800;">🔔 New Lead from QuickSite PH</h1>
              <p style="margin: 8px 0 0 0; color: #a7f3d0; font-size: 13px;">Someone just submitted the contact form</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 32px 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f0fdf4; border-radius: 12px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0 0 16px 0; color: #065f46; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">📬 Contact Details</p>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 120px; vertical-align: top;">Name:</td>
                        <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 600;">${safe.firstName} ${safe.lastName}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px; vertical-align: top;">Email:</td>
                        <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${safe.email}" style="color: #2563eb; text-decoration: none; font-weight: 500;">${safe.email}</a></td>
                      </tr>
                      ${safe.phone ? `<tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px; vertical-align: top;">Phone:</td><td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">${safe.phone}</td></tr>` : ''}
                      ${safe.business ? `<tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px; vertical-align: top;">Business:</td><td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">${safe.business}</td></tr>` : ''}
                    </table>
                  </td>
                </tr>
              </table>

              ${safe.message ? `
              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f9fafb; border-radius: 12px; border-left: 4px solid #2563eb; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="margin: 0 0 10px 0; color: #374151; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">💬 Message</p>
                    <p style="margin: 0; color: #4b5563; font-size: 15px; line-height: 1.7;">${safe.message}</p>
                  </td>
                </tr>
              </table>` : ''}

              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 24px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${safe.email}?subject=Re: Your QuickSite PH Inquiry" style="display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-weight: 600; font-size: 15px;">Reply to ${safe.firstName}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">This notification was sent from your QuickSite PH contact form.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    // ── Send both emails in parallel ───────────────────────────────────────
    const [clientResult, ownerResult] = await Promise.allSettled([
      resend.emails.send({
        from: fromEmail,
        to: email,
        subject: 'Thanks for contacting QuickSite PH! 🚀',
        html: clientHtml,
      }),
      resend.emails.send({
        from: fromEmail,
        to: ownerEmail,
        subject: `🔔 New Lead: ${safe.firstName} ${safe.lastName}${safe.business ? ` — ${safe.business}` : ''}`,
        html: ownerHtml,
        replyTo: email,
      }),
    ]);

    // Log any errors but don't fail the request
    if (clientResult.status === 'rejected' || clientResult.value?.error) {
      console.error('Client email error:', clientResult.reason || clientResult.value?.error);
    }
    if (ownerResult.status === 'rejected' || ownerResult.value?.error) {
      console.error('Owner email error:', ownerResult.reason || ownerResult.value?.error);
    }

    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully',
    });

  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
