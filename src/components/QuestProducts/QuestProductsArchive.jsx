import React, { useEffect, useState } from 'react';
import styles from './QuestProducts.module.scss';
import { IoRocket } from 'react-icons/io5';
import { CiCalendar } from 'react-icons/ci';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons/faTrophy';

const QuestProductsArchive = () => {
    const apiKey = '636e1481b4f3c446d26b8eb6ebfe7127';
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchImages = async () => {
            const query = 'Wilderness Wonders';
            const perPage = 5;
            const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${perPage}&page=${page}&format=json&nojsoncallback=1`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                if (data.photos && data.photos.photo) {
                    
                    setImages((prevImages) => [...prevImages, ...data.photos.photo]);
                } else {
                    console.error('No photos found for the query:', query);
                }
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, [page]); 

    const loadMoreImages = () => {
        setPage(page + 1);
    };

    return (
        <div className={styles.QuestProducts}>
            <div className={styles.QuestProductsContainer}>
                <div className={styles.QuestProductsContainerTop}>
                    <h1><IoRocket style={{ color: "#0870D1" }} /> Quest categories</h1>
                    <div className={styles.QuestProductsNavbar}>
                        <ul>
                            <li><a href="/quests">Community</a></li>
                            <li><a href="/quests/licensing">Licensing</a></li>
                            <li><a href="/quests/archive" style={{ borderBottom: "3px solid #2986F7", fontWeight: "700" }}>Archive</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.QuestProductsContainerBottom}>
                    <div className={styles.QuestProductsBottom}>
                        <div className={styles.QuestProductsCards}>
                            {images.map((photo) => (
                                <div key={photo.id} className={styles.imageContainer}>
                                    <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.title} />
                                    <h3 className={styles.cardPrice}><FontAwesomeIcon icon={faTrophy} />50$ US</h3>
                                    <div className={styles.cardDescription}>
                                        <div className={styles.iconText}>
                                            <div className={styles.iconCircle}>
                                            </div>
                                            <p>By 500px</p>
                                        </div>
                                        <h3>{photo.id}</h3>
                                        <div className={styles.iconText}>
                                            <CiCalendar style={{ fontSize: "20px" }} />
                                            <p><span>6</span> days left</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.QuestProductsADDCards} onClick={loadMoreImages}>
                            <div tabIndex="0" className={styles.plusButton}>
                                <svg className={styles.plusIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                    <g mask="url(#mask0_21_345)">
                                        <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestProductsArchive;
