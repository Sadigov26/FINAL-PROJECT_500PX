import React, { useState, useEffect } from 'react';
import styles from './DiscoverFeed.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Masonry from 'react-masonry-css';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useAddPhotoMutation } from '../../redux/slices/photoApiSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const DiscoverFeed = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const apiKey = '636e1481b4f3c446d26b8eb6ebfe7127';
    const dispatch = useDispatch();
    const [addPhoto] = useAddPhotoMutation();
    const [favoritePhotos, setFavoritePhotos] = useState([]);
    const { userInfo } = useSelector((state) => state.auth);
    useEffect(() => {
        fetchImages();
    }, [page]);

    const fetchImages = () => {
        const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cat&per_page=24&page=${page}&format=json&nojsoncallback=1`;

        setLoading(true);

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.photos && data.photos.photo) {
                    setImages(prevImages => [...prevImages, ...data.photos.photo]);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching images:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.offsetHeight;
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

            // Adjust the threshold for mobile devices
            const scrollTrigger = windowHeight + scrollTop >= documentHeight - 800;

            if (scrollTrigger && !loading) {
                setPage(prevPage => prevPage + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, page]);


    const breakpointColumnsObj = {
        default: 1,
        500: 2,
        700: 3,
        1100: 4,
        2100: 5
    }
    const navigation = useNavigate()
    const handleAddPhoto = async (imageUrl) => {
        if (favoritePhotos.includes(imageUrl)) {
            toast.error('This photo is already in favorites!', {
                position: 'top-right',
                autoClose: 3000,
            });
            return;
        }

        try {
            const newPhoto = await addPhoto({
                imageUrl,
            }).unwrap();
            dispatch({ type: 'photo/addPhoto', payload: newPhoto });
            setFavoritePhotos((prevPhotos) => [...prevPhotos, imageUrl]);

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
        <div className={styles.Discover}>
            <Header />
            <div className={styles.DiscoverContainer}>
                <div className={styles.discoverNavbar}>
                    <ul>
                        <li><a href="/discover">Select categories</a></li>
                        <li><a href="/discover/feed" style={{ borderBottom: "3px solid #2986F7", fontWeight: "700" }}>Feed</a></li>
                    </ul>
                </div>
                <div className={styles.DiscoverContainerTop}>
                    <p>For you</p>
                </div>
                <div className={styles.DiscoverContainerBottom}>
                    <div className={styles.photoGrid}>
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className={styles.myMasonryGrid}
                            columnClassName={styles.myMasonryGridColumn}
                        >
                            {images.map(image => (
                                <div className={styles.imageContainer} key={image.id}>
                                    <img
                                        src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
                                        alt={image.title}
                                    />
                                    {userInfo && <button
                                    className={styles.addButton}
                                    onClick={() =>
                                        handleAddPhoto(
                                            `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_b.jpg`
                                        )
                                    }
                                >
                                    <FontAwesomeIcon icon={faHeart} style={{ fontSize: "17px" }} />
                                </button>}
                                {!userInfo &&
                                    <button  className={styles.addButton} onClick={() => navigation("/register")}>
                                        <FontAwesomeIcon icon={faHeart} style={{ fontSize: "17px" }} />
                                    </button>}
                                </div>
                            ))}
                        </Masonry>
                    </div>
                    {loading && <div className={styles.spinnerContainer}>
                        <div className={styles.spinner}></div>
                        <div className={styles.loader}>
                            <p>Loading</p>
                            <div className={styles.words}>
                                <span className={styles.word}>posts</span>
                                <span className={styles.word}>images</span>
                                <span className={styles.word}>followers</span>
                                <span className={styles.word}>hashtags</span>
                                <span className={styles.word}>posts</span>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DiscoverFeed;
