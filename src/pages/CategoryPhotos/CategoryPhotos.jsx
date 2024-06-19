import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styles from './CategoryPhotos.module.scss';
import Header from '../../components/Header/Header';

const CategoryPhotos = () => {
    const { categoryName } = useParams();
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

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

    return (
        <div style={{ width: "100%", gap: "50px", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <div>
                <h1>Photos for {categoryName}</h1>
                <div className={styles.photogallery}>
                    {photos.map((photo) => (
                        <img key={photo.id} src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.title} />
                    ))}
                </div>
                {loading && <div className={styles.loading}>
                    <div className={styles.threebody}>
                        <div className={styles.threebody__dot}></div>
                        <div className={styles.threebody__dot}></div>
                        <div className={styles.threebody__dot}></div>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default CategoryPhotos;
