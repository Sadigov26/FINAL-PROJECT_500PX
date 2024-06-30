import React, { useState, useEffect } from 'react';
import styles from './QuestsSlide.module.scss';
import desktopOne from '../../about/desktop.jpg';
import desktopTwo from '../../about/desktop (1).jpg';
import desktopThree from '../../about/desktop (2).jpg';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const QuestsSlide = () => {
    const slides = [
        { image: desktopOne, title: 'Quests', description: 'Challenges to help photographers test their skills, get recognized for their work, and win exciting prizes.' },
        { image: desktopTwo, title: 'Quests', description: 'Challenges to help photographers test their skills, get recognized for their work, and win exciting prizes.' },
        { image: desktopThree, title: 'Quests', description: 'Challenges to help photographers test their skills, get recognized for their work, and win exciting prizes.' }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoplay] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoplay) {
                handleNext();
            }
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, ); // currentSlide'i değişikliklere ekleyin

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length); // setCurrentSlide fonksiyonunu bir callback ile güncelleyin
    };

    const handlePrev = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className={styles.slider}>
            <div className={styles.slide}>
                <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className={styles.slideImage} />
                <div className={styles.slideContent}>
                    <h2 className={styles.slideTitle}>{slides[currentSlide].title}</h2>
                    <p style={{ minWidth: "50%", fontSize: "20px", marginTop: "10px", marginBottom: "10px" }} className={styles.slideDescription}>{slides[currentSlide].description}</p>
                </div>
            </div>
            <button onClick={handlePrev} className={styles.prevButton}><FaChevronLeft  style={{fontSize:"23px"}}/></button>
            <button onClick={handleNext} className={styles.nextButton}><FaChevronRight style={{fontSize:"23px"}}/></button>
        </div>
    );
};

export default QuestsSlide;

