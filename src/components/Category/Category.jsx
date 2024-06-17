import React, { useState, useEffect } from 'react';

const Category = ({ category }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const apiKey = '636e1481b4f3c446d26b8eb6ebfe7127';
    const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${category}&per_page=6&format=json&nojsoncallback=1`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Flickr API'den gelen fotoğraf verilerini al
        if (data.photos && data.photos.photo) {
          setPhotos(data.photos.photo);
        }
      })
      .catch(error => {
        console.error('Error fetching data from Flickr API:', error);
      });
  }, [category]); // category props'u değiştiğinde useEffect yeniden çalışacak

  return (
    <div className="category">
      <h2>{category}</h2>
      <div className="photo-list">
        {photos.map(photo => (
          <img key={photo.id} src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.title} />
        ))}
      </div>
    </div>
  );
}

export default Category;
