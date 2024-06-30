import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

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

// 6 basamaklı rastgele bir kod oluştur
const generateCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const sendEmail = async (to, subject) => {
  const code = generateCode(); // Kod oluştur
  const mailOptions = {
    from: process.env.EMAIL,
    to,
    subject,
    text: `Your confirmation code is ${code}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to} with code: ${code}`);
    return code; // Oluşturulan kodu geri döndür
  } catch (error) {
    console.error(`Error sending email to ${to}:`, error);
    throw error;
  }
};
