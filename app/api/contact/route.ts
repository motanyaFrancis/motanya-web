import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const body = await req.json();
    const { name, email, message, service, budget } = body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    });

    await transporter.sendMail({
        from: `"${name}" <${process.env.GMAIL_USER}>`,
        to: "francismotanya@outlook.com",
        replyTo: email,
        subject: service ? `New Inquiry — ${service}` : "General Inquiry",
        html: `
                <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:40px 0;font-family:Arial,Helvetica,sans-serif;">
                    <tr>
                    <td>
                        <table width="600" cellpadding="0" cellspacing="0" align="center" style="background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.08);">
                        
                        <!-- Header -->
                        <tr>
                            <td style="background:#0f172a;padding:30px 25px;text-align:center;">
                            <img src="/logo-white.png" alt="Logo" style="max-width:160px;margin-bottom:10px;">
                            <h3 style="color:#ffffff;font-size:22px;margin:0;">New Customer Inquiry</h3>
                            <p style="color:#a5b4fc;margin:5px 0 0;font-size:13px;">
                                ${service || "General Inquiry"}
                            </p>
                            </td>
                        </tr>

                        <!-- Body -->
                        <tr>
                            <td style="padding:30px;">
                            
                            <p style="font-size:14px;color:#111827;margin:0 0 15px;">
                                You have received a new inquiry from your portfolio website.
                            </p>

                            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:15px;">
                                <tr>
                                <td style="padding:6px 0;font-size:14px;">
                                    <strong>Service:</strong> ${service || "Not selected"}
                                </td>
                                </tr>
                                <tr>
                                <td style="padding:6px 0;font-size:14px;">
                                    <strong>Budget:</strong> ${budget || "Not provided"}
                                </td>
                                </tr>
                                <tr>
                                <td style="padding:6px 0;font-size:14px;">
                                    <strong>Name:</strong> ${name}
                                </td>
                                </tr>
                                <tr>
                                <td style="padding:6px 0;font-size:14px;">
                                    <strong>Email:</strong> ${email}
                                </td>
                                </tr>
                            </table>

                            <h3 style="margin-top:25px;margin-bottom:10px;font-size:16px;color:#111827;">
                                Message
                            </h3>

                            <p style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:15px;font-size:14px;color:#374151;line-height:1.6;">
                                ${message || "No message provided"}
                            </p>

                            <a href="mailto:${email}"
                                style="
                                display:inline-block;
                                margin-top:15px;
                                background:#2563eb;
                                color:#ffffff;
                                padding:10px 18px;
                                border-radius:6px;
                                text-decoration:none;
                                font-size:14px;">
                                Reply to ${name}
                            </a>

                            </td>
                        </tr>

                        <!-- Footer -->
                        <tr>
                            <td style="background:#f3f4f6;padding:18px;text-align:center;">
                            <p style="margin:0;font-size:12px;color:#6b7280;">
                                This email was generated from your portfolio contact form.
                            </p>
                            </td>
                        </tr>

                        </table>
                    </td>
                    </tr>
                </table>
            `

    });


    return Response.json({ success: true });
}
