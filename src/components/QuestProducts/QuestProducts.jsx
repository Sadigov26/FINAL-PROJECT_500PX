import React, { useEffect, useState } from 'react';
import styles from './QuestProducts.module.scss'; 
import { IoRocket } from 'react-icons/io5';
import { CiCalendar } from 'react-icons/ci';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons/faTrophy';

const QuestProducts = () => {
    const apiKey = '636e1481b4f3c446d26b8eb6ebfe7127';
    const [images, setImages] = useState([]);

    useEffect(() => {
        const query = 'Community';
        const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=5&format=json&nojsoncallback=1`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.photos && data.photos.photo) {
                    setImages(data.photos.photo);
                } else {
                    console.error('No photos found for the query:', query);
                }
            })
            .catch((error) => {
                console.error('Error fetching images:', error);
            });
    }, []);

    return (
        <div className={styles.QuestProducts}>
            <div className={styles.QuestProductsContainer}>
                <div className={styles.QuestProductsContainerTop}>
                    <h2><IoRocket style={{ color: "#0870D1" }} /> Quest categories</h2>
                    <div className={styles.QuestProductsNavbar}>
                        <ul>
                            <li><a href="/quests" style={{ borderBottom: "3px solid #2986F7", fontWeight: "700" }}>Community</a></li>
                            <li><a href="/quests/licensing">Licensing</a></li>
                            <li><a href="/quests/archive">Archive</a></li>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuestProducts;
