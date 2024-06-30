import React from 'react';
import styles from './Modal.module.scss';
import { IoIosSearch } from "react-icons/io";

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <IoIosSearch style={{fontSize:"66px"}}/>
                <h2>New AI Search</h2>
                <p>
                    Finding the exact photos you want is now effortless with our advanced natural language search. All you have to do is describe what you're looking for, as if you were chatting to a friend. For example, "friends going on a scenic fall hike in the mountains with their dog." Our search engine will understand your request and find you the exact photos you need. Please note: if you enter fewer than three words, it will default to our previous keyword search.
                </p>
                <button onClick={onClose} className={styles.closeButton}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
