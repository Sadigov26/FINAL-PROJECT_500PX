import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import neww from '../../about/image copy 32.png';

const Search = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const [isModalOpen, setModalOpen] = useState(false);
    const [query, setQuery] = useState(new URLSearchParams(location.search).get('query') || '');
    const apiKey = '636e1481b4f3c446d26b8eb6ebfe7127';

    useEffect(() => {
        if (query) {
            const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

            fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => {
                    if (data.photos && data.photos.photo) {
                        setImages(data.photos.photo);
                    }
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching images:', error);
                    setLoading(false);
                });
        }
    }, [query]);

    const handleSearch = () => {
        if (query.trim()) {
            navigate(`/search?query=${encodeURIComponent(query)}`);
            setLoading(true);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    return (
        <div style={{ width: "100%", gap: "80px", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
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
                    <div onClick={openModal} className={styles.new}>
                        <img src={neww} alt="" />
                    </div>
                    <Modal isOpen={isModalOpen} onClose={closeModal} />
                </div>
                <h1>Search Results for "{query}"</h1>
                {loading ? (
                    <p>  <div className={styles.spinnerContainer}>
                        <div className={styles.spinner}></div>
                        <div className={styles.loader}>
                            <p>loading</p>
                            <div className={styles.words}>
                                <span className={styles.word}>posts</span>
                                <span className={styles.word}>images</span>
                                <span className={styles.word}>followers</span>
                                <span className={styles.word}>hashtags</span>
                                <span className={styles.word}>posts</span>
                            </div>
                        </div>
                    </div>
                    </p>
                ) : images.length > 0 ? (
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={styles.myMasonryGrid}
                columnClassName={styles.myMasonryGridColumn}
            >
                {images.map((image) => (
                    <div className={styles.imageContainer} key={image.id}>
                        <img
                            src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
                            alt={image.title}
                        />
                    </div>
                ))}
            </Masonry>
            ) : (
            <p>No results found.</p>
                )}
        </div>
        </div >
    );
};

export default Search;
