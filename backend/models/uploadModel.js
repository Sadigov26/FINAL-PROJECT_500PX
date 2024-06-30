import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  filename: { type: String,  },
  contentType: { type: String,   },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', },
  uploadDate: { type: Date, default: Date.now },
  imageUrl: { type: String, }
});

export default mongoose.model('upload', PhotoSchema);
