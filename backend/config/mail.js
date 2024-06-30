// mail.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { generateCode } from './generateCode.js';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.eu',
  port: 465, // SSL portu. Eğer TLS kullanmak isterseniz 587 kullanabilirsiniz.
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// E-posta gönderme fonksiyonu
export const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(`Error sending email to ${to}:`, error);
    throw error;
  }
};
