import React, { useState } from 'react';
import { useConfirmEmailMutation } from '../../redux/slices/usersApiSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import styles from './EmailVerification.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const EmailVerification = () => {
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [confirmEmail, { isLoading }] = useConfirmEmailMutation();
    const navigate = useNavigate();

    const handleConfirmEmail = async (e) => {
        e.preventDefault();
        try {
            await confirmEmail({ email, code: verificationCode }).unwrap();
            toast.success('E-posta başarıyla doğrulandı! Lütfen e-posta kutunuzu kontrol edin.');
            navigate('/');
        } catch (error) {
            toast.error(`Doğrulama başarısız: ${error.data?.message || error.message}`);
        }
    };

    return (
        <div>
            <Header />
            <div className={styles.EmailVerificationhero}>
                <div className={styles.container}>
                    <div className={styles.EmailVerificationdesk}>
                        <h3>E-posta Hesabınızı Kontrol Edin <FontAwesomeIcon icon={faEnvelope} style={{marginLeft:"10px"}} /></h3>
                        <p className={styles.instruction}>
                            Doğrulama kodunuz, kayıtlı e-posta adresinize gönderildi. Lütfen e-posta hesabınızı açın ve gelen kutunuzu kontrol edin. Kodun, gönderen kişi olarak bizim adımıza (Şirket Adı) görünmesi gerekiyor.</p></div>
                    <form onSubmit={handleConfirmEmail} className={styles.emailVerificationForm}>
                        <input
                            type="email"
                            placeholder="E-postanızı girin"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Doğrulama kodunu girin"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            required
                            className={styles.input}
                        />
                        <button type="submit" disabled={isLoading} className={styles.button}>
                            {isLoading ? 'Doğrulanıyor...' : 'E-postayı Doğrula'}
                        </button>
                    </form>
                </div></div>
            <Footer />
        </div>
    );
};

export default EmailVerification;
