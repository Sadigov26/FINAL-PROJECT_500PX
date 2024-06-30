import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './CategoryPhotos.module.scss';
import Header from '../../components/Header/Header';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useAddPhotoMutation } from '../../redux/slices/photoApiSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const CategoryPhotos = () => {
    const { categoryName } = useParams();
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [addPhoto] = useAddPhotoMutation();
    const { userInfo } = useSelector((state) => state.auth);
    const fetchPhotos = useCallback(async () => {
        const apiKey = '636e1481b4f3c446d26b8eb6ebfe7127';
        const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${categoryName}&per_page=24&page=${page}&format=json&nojsoncallback=1`;


        try {
            setLoading(true);
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch photos');
            }
            const data = await response.json();
            setPhotos((prevPhotos) => [...prevPhotos, ...data.photos.photo]);
        } catch (error) {
            console.error('Error fetching photos:', error);
        } finally {
            setLoading(false);
        }
    }, [categoryName, page]);

    useEffect(() => {
        fetchPhotos();
    }, [fetchPhotos]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) return;
            setPage((prevPage) => prevPage + 1);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);
    const navigation = useNavigate()
    const handleAddPhoto = async (imageUrl) => {
        try {
            const favoritePhotos = JSON.parse(localStorage.getItem('favoritePhotos')) || [];
            if (favoritePhotos.includes(imageUrl)) {
                toast.error('This photo is already in favorites!', {
                    position: 'top-right',
                    autoClose: 3000,
                });
                return;
            }
            const newPhoto = await addPhoto({
                imageUrl,
            }).unwrap();
            dispatch({ type: 'photo/addPhoto', payload: newPhoto });
            localStorage.setItem('favoritePhotos', JSON.stringify([...favoritePhotos, imageUrl]));
            toast.success('Photo added to favorites!', {
                position: 'top-right',
                autoClose: 3000,
            });
        } catch (err) {
            console.error('Failed to add the photo:', err);
            toast.error('Failed to add photo. Please try again later.', {
                position: 'top-right',
                autoClose: 3000,
            });
        }
    };

    return (
        <div>
            <Header />
            <div>
                <h1>Photos for {categoryName}</h1>
                <div className={styles.photogallery}>
                    {photos.map((photo) => (
                        <div key={photo.id} className={styles.photoItem}>
                            <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.title} />
                            {userInfo &&
                                <button onClick={() => handleAddPhoto(`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`)}>
                                    <FontAwesomeIcon icon={faHeart} style={{ fontSize: "17px" }} />
                                </button>}
                            {!userInfo &&
                                <button onClick={() => navigation("/register")}>
                                    <FontAwesomeIcon icon={faHeart} style={{ fontSize: "17px" }} />
                                </button>}
                        </div>
                    ))}
                </div>
                {loading && (
                    <div className={styles.loading}>
                        <div className={styles.threebody}>
                            <div className={styles.threebody__dot}></div>
                            <div className={styles.threebody__dot}></div>
                            <div className={styles.threebody__dot}></div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
};

export default CategoryPhotos;
