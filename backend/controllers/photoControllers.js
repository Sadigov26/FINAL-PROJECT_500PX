import Photo from "../models/photoModel.js";
const addUserPhoto = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized: User not authenticated' });
        }

        const { imageUrl, description } = req.body;
        const photo = await Photo.create({
            imageUrl,
            description,
            user_id: req.user._id,
        });

        res.status(201).json({ photo });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserPhotos = async (req, res) => {
    try {
        if (req.user) {
            const userPhotos = await Photo.find({ user_id: req.user._id });
            res.status(200).json({ userPhotos });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteUserPhoto = async (req, res) => {
    try {
        const deletePhoto = await Photo.findById(req.params.id);

        if (deletePhoto) {
            await Photo.deleteOne({ _id: req.params.id });
            res.json({ message: `${req.params.id} id-li post silindi` });
        } else {
            res.status(404).json({ message: 'Photo not found or unauthorized' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { addUserPhoto, getUserPhotos, deleteUserPhoto };
