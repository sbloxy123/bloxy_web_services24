import { NextRequest, NextResponse } from "next/server";

import { Email } from "@/app/components/Email";
import { render } from "@react-email/components";
import { smtpEmail, transporter } from "@/app/components/utils/nodemailer";
// import { Email } from "@/components/Email";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { name, email, currentWebsite, message, phone } = body;

  // from react-email:
  const emailHtml = render(
    <Email
      name={name}
      email={email}
      message={message}
      phone={phone}
      currentWebsite={currentWebsite}
    />
  );

  const options = {
    from: smtpEmail,
    to: smtpEmail,
    subject: "New Form Submission from bloxie.co.uk",
    html: emailHtml,
  };

  try {
    // Send email using the transporter
    await transporter.sendMail(options);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
  return new Response("OK");
}
