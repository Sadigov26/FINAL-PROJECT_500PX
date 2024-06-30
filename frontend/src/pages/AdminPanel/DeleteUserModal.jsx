import React from 'react';
import Modal from 'react-modal'; // Modal kullanmak için gerekli kütüphane
import { useDeleteUserMutation } from '../../redux/slices/usersApiSlice';
import { toast } from 'react-toastify';
import styles from './AdminPanel.module.scss'; // Stil dosyanızı buraya dahil ettiğinizden emin olun

const DeleteUserModal = ({ isOpen, onRequestClose, userId, onDelete }) => {
    const [deleteUser] = useDeleteUserMutation(); // Kullanıcı silme mutation hook'u

    const handleDeleteUser = async () => {
        try {
            await deleteUser(userId).unwrap(); // Kullanıcıyı silme
            toast.success(`User with ID ${userId} deleted successfully.`); // Başarılı silme mesajı
            onDelete(); // Silme işlemi tamamlandığında ana bileşende yenileme işlemi yapabiliriz
        } catch (error) {
            toast.error(`Failed to delete user with ID ${userId}. ${error.message}`); // Hata mesajı
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '8px',
                    maxWidth: '400px',
                    width: '80%',
                    padding: '20px',
                },
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
            }}
        >
            <h2>Delete Account Confirmation</h2>
            <p>Are you sure you want to delete this user's account? This action cannot be undone.</p>
            <div>
                <button className={styles.submitButton} style={{ background: 'red' }} onClick={handleDeleteUser}>
                    Confirm
                </button>
                <button className={styles.submitButton} style={{ marginTop: '10px' }} onClick={onRequestClose}>
                    Cancel
                </button>
            </div>
        </Modal>
    );
};

export default DeleteUserModal;
