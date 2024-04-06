"use server";

import nodemailer from "nodemailer";

const mail = process.env.MAIL;
const gmailUsername = process.env.USERNAME_GMAIL;
const gmailPassword = process.env.GMAIL_PASSKEY;

export default async function sendMail(formData) {
  const { name, email, comment, honeypot } = formData;

    if (honeypot) {
        return { success: true, message: "😁 Success" };
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: gmailUsername,
            pass: gmailPassword,
        },
    });


    const mailOptions = {
        from: `${email}`,
        to: `${mail}`,
        subject: `New message from ${name}`,
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    font-family: 'Helvetica', Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
                h2 {
                    color: skyblue;
                }
                p {
                    margin: 0 0 10px;
                    line-height: 1.5;
                    color: #555;
                }
                strong {
                    font-weight: bold;
                }
                .container {
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 5px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    margin: 20px auto;
                    max-width: 600px;
                    width: 100%;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>New message from ${name}</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${comment}</p>
            </div>
        </body>
        </html>
        `,
    };

     return new Promise(async (resolve, reject) => {
       transporter.sendMail(mailOptions, async (error, info) => {
         if (error) {
           console.error("Error sending email:", error);
           resolve({ success:false , message: "😢 Error sending email" });
         } else {
           console.log("Email sent:", info.response);

           const confirmationMailOptions = {
             from: `${mail}`,
             to: `${email}`,
             subject: ` Message Received`,
             html: `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: 'Helvetica', Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f6f6f6;
            }
        
            .email-container {
              width: 100%;
              max-width: 600px;
              margin: 20px auto;
              padding: 20px;
              background-color: #ffffff;
              box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
            }
        
            .email-header {
              text-align: center;
              padding: 20px 0;
              border-bottom: 1px solid #ddd;
            }
        
            .email-header h2 {
              margin: 0;
              color: #333;
              font-size: 24px;
            }
        
            .email-body {
              padding: 20px;
            }
        
            .email-body p {
              line-height: 1.5;
              color: #333;
              font-size: 16px;
            }
        
            .professional-signature {
              text-align: center;
              margin-top: 20px;
            }
        
            .professional-signature p {
              color: #777;
              margin-bottom: 10px;
              font-size: 14px;
            }
        
            .upwork-link,
            .social-link {
              display: inline-block;
              text-decoration: none;
              color: #3498db;
              font-weight: bold;
              margin: 5px;
            }
        
            .logo {
              text-align: center;
            }
        
            .logo img {
              max-width: 100%;
              height: auto;
            }
        
            @media screen and (max-width: 600px) {
              .email-container {
                width: 100%;
                max-width: none;
                margin: 10px auto;
                padding: 15px;
              }
        
              .email-header h2 {
                font-size: 20px;
              }
        
              .email-body p {
                font-size: 14px;
              }
        
              .professional-signature p {
                font-size: 12px;
              }
            }
          </style>
        </head>
        
        <body>
          <div class="email-container">
            <div class="logo">
              <a href='https://www.swastikdan.in/' target='_blank'><img src="https://i.postimg.cc/xjs7QqLm/logo-mail.webp" alt='logo-mail' width="40" height="40" > </a>
            </div>
            <div class="email-header">
              <h2>Message Received</h2>
            </div>
            <div class="email-body">
              <p>Hi ${name},</p>
              <p>Thank you for contacting me through my portfolio. Your message has been received, and I value your interest. While it may take a few days for me to respond, please rest assured that I will get back to you at the earliest opportunity.</p>
              <p>Talk to you soon,</p>
            </div>
            <div class="professional-signature">
              <p>Best regards,<br>Swastik</p>
              <a href="https://www.upwork.com/freelancers/~01e7de179fc6b3bab7" class="upwork-link" target="_blank">Upwork</a>
              <a href="https://github.com/Swastikdan" class="social-link" target="_blank">GitHub</a>
              <a href="https://www.linkedin.com/in/swastikdan" class="social-link" target="_blank">LinkedIn</a>
            </div>
          </div>
        </body>
        
        </html>
        
              `,
           };

           try {
             await transporter.sendMail(confirmationMailOptions);
             console.log("Confirmation email sent");
           } catch (error) {
             console.error("Error sending confirmation email:", error);
           }

           resolve({ success: true, message: "🎉 Message sent successfully" });
         }
       });
     });

}