import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRouter from './routes/userRouter.js';
import photoRouter from './routes/photoRouter.js';
import { sendEmail } from './config/mail.js'; // sendEmail fonksiyonunu içe aktardık
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true,
}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectDB();

// Örnek POST endpoint'i
app.post('/send-email', async (req, res) => {
    const { to, subject } = req.body;

    try {
        const code = await sendEmail(to, subject);
        res.status(200).json({ message: 'Email sent successfully', code });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email' });
    }
});

app.use('/api/users', userRouter);
app.use('/api/photos', photoRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
