import React, { useState } from 'react';
import styles from '../Login/Login.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { toast } from 'react-toastify';

const Recover = () => {
    const [emailOrUsername, setEmailOrUsername] = useState('');

    const handleSendEmail = async () => {
        // You can implement your logic to send recovery email here
        try {
            // Example fetch or axios call to your backend API
            const response = await fetch('/api/recover-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ emailOrUsername }),
            });

            if (response.ok) {
                toast.success('Password recovery email sent successfully.');
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to send recovery email.');
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div>
            <Header />
            <div className={styles.Login}>
                <div className={styles.LoginContainer}>
                    <div className={styles.LoginContainerTop}>
                        <h1>Recover password</h1>
                    </div>
                    <div className={styles.LoginContainerSignup}>
                        <span>Please enter your username or email to reset your password. You'll receive an email with instructions. If you are experiencing problems with remembering your username or email, please contact <a href="https://support.500px.com/hc/en-us/requests/new">500px Support.</a></span>
                    </div>
                    <div className={styles.LoginContainerInput}>
                        <div className={styles.EmailorUsername}>
                            <label htmlFor="emailOrUsername"> <span>Email or Username*</span></label>
                            <input
                                type="text"
                                id="emailOrUsername"
                                value={emailOrUsername}
                                onChange={(e) => setEmailOrUsername(e.target.value)}
                            />
                        </div>
                        <div className={styles.EmailorUsername}>
                            <button onClick={handleSendEmail}>Send email</button>
                        </div>
                        <div className={styles.LoginContainerSignup}>
                            <p>Don't have an account? <a href="/register">Sign up</a> </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Recover;
