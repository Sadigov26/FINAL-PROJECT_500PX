import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import User from '../models/userModel.js';
import generateToken  from '../utils/generateToken.js';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.eu',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const generateCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const sendEmail = async (to, subject, code) => {
  const mailOptions = {
    from: `Sadıqov Kamil <${process.env.EMAIL}>`,
    to,
    subject,
    html: `
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              padding: 20px;
              background-color: #fff;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              text-align: center;
            }
            .header {
              background-color: #007bff;
              color: #fff;
              text-align: center;
              padding: 20px;
              border-radius: 8px 8px 0 0;
              font-size: 24px;
            }
            .content {
              padding: 20px;
              text-align: left;
              font-size: 16px;
              line-height: 1.6;
            }
            .content strong {
              font-size: inherit;
            }
            .footer {
              background-color: #f0f0f0;
              text-align: left;
              padding: 10px;
              border-radius: 0 0 8px 8px;
              font-size: 14px;
              color: #666;
            }
            .footer p {
              margin: 5px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>E-poçt Təsdiqi</h2>
            </div>
            <div class="content">
              <p>Salam,</p>
              <p>Sizin təsdiq kodunuz <strong>${code}</strong>.</p>
              <p>Lütfən e-poçtunuzu doğrulamaq üçün bu kodu istifadə edin.</p>
              <p>Təşəkkürlər!</p>
            </div>
            <div class="footer">
              <p>Uğurlar,</p>
              <p>Sadıqov Kamil</p>
              <p>Bu e-poçt 500px tərəfindən göndərilmişdir. Xahiş edirik bu e-poçta cavab verməyin.</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to} with code: ${code}`);
  } catch (error) {
    console.error(`Error sending email to ${to}:`, error);
    throw error;
  }
};

export const registerUser = async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const confirmCode = generateCode();

    const user = await User.create({
      name,
      surname,
      email,
      password,
      confirmCode,
    });

    if (user) {
      await sendEmail(email, 'Confirm Your Email', confirmCode);

      res.status(201).json({
        _id: user._id,
        name: user.name,
        surname: user.surname,
        email: user.email,
      });
    } else {
      res.status(400).json({ message: "Failed to create user" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const confirmEmail = async (req, res) => {
  const { email, code } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const trimmedCode = code.trim();
    if (user.confirmCode !== trimmedCode) {
      return res.status(400).json({ message: 'Invalid code. Please enter the correct code.' });
    }

    user.isVerified = true;
    user.confirmCode = null;

    await user.save();

    res.json({ message: 'Email successfully confirmed' });
  } catch (error) {
    console.error('Error during email confirmation:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password'); // Parola dahil getir

    if (user && (await user.parolaKontrol(password))) {
      generateToken(res, user._id);
      res.status(200).json({
        _id: user._id,
        email: user.email,
        name: user.name,
        surname: user.surname
      });
    } else {
      res.status(400).json({ message: 'Email ya da parola hatalı' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const logoutUser = async (req, res) => {
  try {
    res.clearCookie('jwt'); // Assuming you use cookies for token storage
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        surname: user.surname,
        email: user.email,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.surname = req.body.surname || user.surname;
      user.email = req.body.email || user.email;

      if (req.body.password) {
        user.password = req.body.password;
      }

      const updatedUser = await user.save();

      res.status(200).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        surname: updatedUser.surname,
        email: updatedUser.email,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteUsers = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: `User with ID ${userId} deleted successfully` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateUserProfileByAdmin = async (req, res) => {
  try {
    const userId = req.params.id;

    const updatedFields = {
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email
    };

    if (req.body.password) {
      updatedFields.password = req.body.password;
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updatedFields, { new: true });

    if (updatedUser) {
      res.status(200).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        surname: updatedUser.surname,
        email: updatedUser.email,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Update User Error:', error);
    res.status(500).json({ message: error.message });
  }
};

export {
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  deleteUsers,
  updateUserProfileByAdmin,
};