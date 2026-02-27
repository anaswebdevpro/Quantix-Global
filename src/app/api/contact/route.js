import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

export async function POST(req) {
  try {
    const { fullName, email, service, product, phone, message } =
      await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: process.env.MAIL_PORT == 465, // true for 465, false for other ports (587)
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    // Resolve path for header image
    const imagePath = path.join(
      process.cwd(),
      "public",
      "assets",
      "image",
      "Avner_Global.png",
    );
    const imageExists = fs.existsSync(imagePath);

    const mailOptions = {
      from: `"${fullName}" <${process.env.MAIL_USERNAME}>`,
      to: process.env.SUPPORT_EMAIL,
      subject: `New Contact Form Submission: ${service}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .email-container {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              max-width: 600px;
              margin: 0 auto;
              background-color: #f9fafb;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
              border: 1px solid #e5e7eb;
            }
            .header {
              background-color: #153577;
              padding: 0;
              text-align: center;
              position: relative;
            }
            .header img {
              height: 60px;
              width: auto;
              padding: 20px;
              display: inline-block;
            }
            .brand-overlay {
              display: none;
            }
            .content {
              padding: 40px 30px;
              color: #374151;
            }
            .title {
              color: #153577;
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 25px;
              border-bottom: 3px solid #09d0c6;
              padding-bottom: 12px;
              display: inline-block;
            }
            .data-table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 30px;
            }
            .data-table td {
              padding: 15px 0;
              border-bottom: 1px solid #f3f4f6;
            }
            .label {
              font-weight: bold;
              color: #6b7280;
              width: 160px;
              text-transform: uppercase;
              font-size: 11px;
              letter-spacing: 0.1em;
            }
            .value {
              color: #111827;
              font-weight: 600;
              font-size: 15px;
            }
            .message-section {
              margin-top: 30px;
            }
            .message-label {
              font-weight: bold;
              color: #153577;
              margin-bottom: 10px;
              font-size: 14px;
            }
            .message-box {
              background-color: #ffffff;
              border: 1px solid #e5e7eb;
              border-left: 4px solid #09d0c6;
              border-radius: 8px;
              padding: 20px;
              white-space: pre-wrap;
              color: #4b5563;
              line-height: 1.7;
              font-style: italic;
            }
            .footer {
              background-color: #f9fafb;
              padding: 30px;
              text-align: center;
              font-size: 12px;
              color: #9ca3af;
              border-top: 1px solid #f3f4f6;
            }
            .footer p {
              margin: 5px 0;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header" style="background-color: #ffffff; border-bottom: 2px solid #153577;">
              ${imageExists ? '<img src="cid:emailHeader" alt="Avner Global" />' : '<div style="padding: 20px; color: #153577; font-size: 24px; font-weight: bold;">AVNER GLOBAL</div>'}
            </div>
            <div class="content">
              <div class="title">New Inquiry Details</div>
              <p style="margin-bottom: 20px; font-size: 14px; color: #6b7280;">You have received a new message from your website contact form.</p>
              
              <table class="data-table">
                <tr>
                  <td class="label">Full Name</td>
                  <td class="value">${fullName}</td>
                </tr>
                <tr>
                  <td class="label">Email Address</td>
                  <td class="value">${email}</td>
                </tr>
                <tr>
                  <td class="label">Phone Number</td>
                  <td class="value">${phone}</td>
                </tr>
                <tr>
                  <td class="label">Service Interest</td>
                  <td class="value">${service}</td>
                </tr>
                <tr>
                  <td class="label">Product Area</td>
                  <td class="value">${product}</td>
                </tr>
              </table>
              
              <div class="message-section">
                <div class="message-label">User Message:</div>
                <div class="message-box">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>This inquiry was submitted via the <strong>Contact Section</strong>.</p>
              <p>&copy; 2024 Anver Global Technology. All rights reserved.</p>
              <p>Calgary, Alberta, Canada</p>
            </div>
          </div>
        </body>
        </html>
      `,
      attachments: imageExists
        ? [
            {
              filename: "Avner_Global.png",
              path: imagePath,
              cid: "emailHeader",
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
