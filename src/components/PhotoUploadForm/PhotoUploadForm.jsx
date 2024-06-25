import React, { useState } from 'react';
import axios from 'axios';

const PhotoUploadForm = ({ userId }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [caption, setCaption] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('caption', caption);
    formData.append('userId', userId); // Kullanıcı kimliğini ekleyin

    try {
      const response = await axios.post('http://localhost:5000/api/photos/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Photo uploaded successfully:', response.data);
      // Burada kullanıcıya başarılı yükleme mesajı gösterebilirsiniz

      // İsteğe bağlı olarak, fotoğraf yüklendikten sonra sayfayı yenileyebilirsiniz
      // window.location.reload();
    } catch (error) {
      console.error('Error uploading photo:', error);
      // Kullanıcıya hata mesajı gösterebilirsiniz
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="file" onChange={handleFileChange} required />
      </div>
      <div>
        <input type="text" placeholder="Caption" value={caption} onChange={(e) => setCaption(e.target.value)} />
      </div>
      <button type="submit">Upload Photo</button>
    </form>
  );
};

export default PhotoUploadForm;
