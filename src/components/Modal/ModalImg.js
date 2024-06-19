import React from 'react';
import styles from './PhotoModal.module.scss';
import { IoClose } from 'react-icons/io5';

const ModalImg = ({ isOpen, onClose, imageUrl }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <img src={imageUrl} alt="Large Image" className={styles.modalImage} />
                <button onClick={onClose} className={styles.closeButton}>
                <IoClose />
                </button>
            </div>
        </div>
    );
};

export default ModalImg;
