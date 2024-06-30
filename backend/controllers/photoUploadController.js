import upload from '../utils/upload.js';
import Photo from '../models/photoModel.js';

const uploadPhoto = (req, res) => {
  upload.single('photo')(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    if (req.file === undefined) {
      return res.status(400).json({ message: 'No file selected!' });
    }

    const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

    try {
      const photo = new Photo({
        filename: req.file.filename,
        contentType: req.file.mimetype,
        userId: req.user._id,
        imageUrl: imageUrl
      });

      await photo.save();

      res.status(200).json({
        message: 'File uploaded!',
        file: req.file
      });
    } catch (error) {
      res.status(500).json({ message: 'Error saving photo info to database.' });
    }
  });
};

export { uploadPhoto };
