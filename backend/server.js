import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRouter from './routes/userRouter.js';
import photoRouter from './routes/photoRouter.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true,
  }));app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

connectDB();

app.use('/api/users', userRouter);
app.use('/api/photos', photoRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
