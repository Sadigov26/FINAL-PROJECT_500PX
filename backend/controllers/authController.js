import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
import { sendEmail } from '../config/mail.js';
import multer from 'multer';
import path from 'path';

dotenv.config();

const generateToken = (user) => {
  return jwt.sign({ user: { id: user.id } }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const generateCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${uuidv4()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

export const register = async (req, res) => {
  const { email } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    const confirmCode = generateCode();
    user = new User({ email, confirmCode });
    await user.save();

    await sendEmail(user.email, 'Email Confirmation', `Your confirmation code is ${user.confirmCode}`);

    res.json({ message: 'Confirmation email sent' });
  } catch (err) {
    console.error('Error during registration:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const confirmEmail = async (req, res) => {
  const { email, code } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && user.confirmCode === code) {
      res.json({ message: 'Email confirmed' });
    } else {
      res.status(400).json({ message: 'Invalid code' });
    }
  } catch (err) {
    console.error('Error during email confirmation:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const completeRegistration = async (req, res) => {
  const { email, name, surname, birthdate, password } = req.body;
  const profilePicture = req.file ? `/uploads/${req.file.filename}` : null;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    user.name = name;
    user.surname = surname;
    user.birthdate = birthdate;  // No need to convert to Date object
    user.password = bcrypt.hashSync(password, 10);
    user.confirmed = true;
    user.profilePicture = profilePicture;
    await user.save();

    const token = generateToken(user);
    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        surname: user.surname,
        birthdate: user.birthdate,
        profilePicture: user.profilePicture,
      },
    });
  } catch (err) {
    console.error('Error during registration completion:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !user.confirmed) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = generateToken(user);
    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        surname: user.surname,
        birthdate: user.birthdate,
        profilePicture: user.profilePicture,
      },
    });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
