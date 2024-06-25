import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Masonry from 'react-masonry-css';
import Header from '../../components/Header/Header';
import ModalImg from '../../components/Modal/ModalImg';
import { useDispatch, useSelector } from 'react-redux';
import { useAddPhotoMutation } from '../../redux/slices/photoApiSlice';
import styles from './Search.module.scss';
import neww from '../../about/image copy 32.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Search = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const location = useLocation();
    const navigate = useNavigate();
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [query, setQuery] = useState(new URLSearchParams(location.search).get('query') || '');
    const apiKey = '636e1481b4f3c446d26b8eb6ebfe7127';
    const [favoritePhotos, setFavoritePhotos] = useState([]);
    const { userInfo } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [addPhoto] = useAddPhotoMutation();

    useEffect(() => {
        if (query) {
            fetchImages();
        }
    }, [query, page]);

    const fetchImages = () => {
        const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=${page}&format=json&nojsoncallback=1`;

        setLoading(true);

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.photos && data.photos.photo) {
                    setImages((prevImages) => [...prevImages, ...data.photos.photo]);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching images:', error);
                setLoading(false);
            });
    };
    const navigation = useNavigate()
    const handleSearch = () => {
        if (query.trim()) {
            navigate(`/search?query=${encodeURIComponent(query)}`);
            setImages([]);
            setPage(1);
            setLoading(true);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 700 &&
                !loading
            ) {
                setPage((prevPage) => prevPage + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };

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
        <div>
            <Header hideSearch={true} />
            <div className={styles.search}>
                <div className={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="Search powered by AI"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        style={{ fontSize: '23px', cursor: 'pointer' }}
                        onClick={handleSearch}
                    />
                    <div className={styles.new}>
                        <img src={neww} alt="" />
                    </div>
                </div>
                <h2>Search Results for "{query}"</h2>

                {loading && page === 1 ? (
                    <div className={styles.spinnerContainer}>
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
                    </div>
                ) : images.length > 0 ? (
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className={styles.myMasonryGrid}
                        columnClassName={styles.myMasonryGridColumn}
                    >
                        {images.map((image) => (
                            <div
                                className={styles.imageContainer}
                                key={image.id}
                            >
                                <img
                                    onClick={() =>
                                        openModal(
                                            `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_b.jpg`
                                        )
                                    }
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
                ) : (
                    <p>No results found.</p>
                )}
                {loading && page > 1 && (
                    <div className={styles.spinnerContainer}>
                        <div className={styles.spinner}></div>
                        <p>Loading more images...</p>
                    </div>
                )}
            </div>
            <ModalImg isOpen={isModalOpen} onClose={closeModal} imageUrl={selectedImage} />
        </div>
    );
};

export default Search;
