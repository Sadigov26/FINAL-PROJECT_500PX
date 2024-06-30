// components/ImageUploadForm.js

import React, { useState } from 'react';
import axios from 'axios';

const ImageUploadForm = () => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadMessage, setUploadMessage] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image) {
            setUploadMessage('Please select an image.');
            return;
        }

        const formData = new FormData();
        formData.append('image', image);

        setUploading(true);
        setUploadMessage('');

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };

            const response = await axios.post('/api/images/upload', formData, config);
            console.log('Image uploaded:', response.data);
            setUploadMessage('Image uploaded successfully.');
        } catch (error) {
            console.error('Image upload error:', error);
            setUploadMessage('Error uploading image. Please try again.');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleImageChange} />
                <button type="submit" disabled={uploading}>Upload Image</button>
            </form>
            {uploadMessage && <p>{uploadMessage}</p>}
        </div>
    );
};

export default ImageUploadForm;
