// LikePhotos.jsx

import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useGetPhotosQuery, useDeletePhotoMutation } from '../../redux/slices/photoApiSlice';
import styles from "./likePhotos.module.scss";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import videoSource from './Animation - 1719352935615.gif';
const LikePhotos = () => {
  const dispatch = useDispatch();
  const { data: photosData, error, isLoading } = useGetPhotosQuery();
  const [deletePhoto] = useDeletePhotoMutation();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (photosData?.userPhotos) {
      setPhotos(photosData.userPhotos);
    }
  }, [photosData]);

  const handleDeletePhoto = async (id) => {
    try {
      await deletePhoto(id).unwrap();
      dispatch({ type: 'photo/deletePhoto', payload: id });
      setPhotos((prevPhotos) => prevPhotos.filter((photo) => photo._id !== id));

      toast.success('Photo deleted from favorites!', {
        position: 'top-right',
        autoClose: 3000, // 3 seconds
      });
    } catch (err) {
      console.error('Failed to delete the photo:', err);
      toast.error('Failed to delete photo. Please try again later.', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    if (error) {
      toast.error('Failed to load photos. Please try again later.', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  }, [error]);

  return (
    <div>
      <Header/>
      <div className={styles.favorite}>
        <h1>Like Photos</h1>
        {isLoading ? (
          <p>Loading photos...</p>
        ) : (
          <div className={styles.photosContainer}>
            {photos.length === 0 ? (
              <p className={styles.emptyMessage}> <img src={videoSource} alt="" />
              Your favorites list is empty.</p>
            ) : (
              photos.map((photo) => (
                <div key={photo._id} className={styles.photoItem}>
                  <img src={photo.imageUrl} alt={`${photo._id}`} />
                  <button className={styles.deleteButton} onClick={() => handleDeletePhoto(photo._id)}>
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default LikePhotos;
