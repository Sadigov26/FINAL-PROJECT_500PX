import mongoose from 'mongoose';

const TempEmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  confirmCode: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60, // Expires after 60 seconds (adjust as needed)
  },
});

const TempEmail = mongoose.model('TempEmail', TempEmailSchema);
export default TempEmail;
