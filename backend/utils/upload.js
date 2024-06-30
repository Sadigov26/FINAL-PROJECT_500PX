import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import path from 'path';

const storage = new GridFsStorage({
  url: process.env.MONGO_URL,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
      const fileInfo = {
        filename,
        bucketName: 'uploads',
        metadata: { userId: req.user._id }
      };
      resolve(fileInfo);
    });
  }
});

const upload = multer({ storage });

export default upload;
