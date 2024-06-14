import React from 'react';
import styles from '../Login/Login.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Recover = () => {
    return (
        <div style={{ width: "100%", gap: "80px", minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#F7F8FA" }}>
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
                            <label htmlFor=""> <span>Email or Username*</span></label>
                            <input type="text" />
                        </div>
                        <div className={styles.EmailorUsername}>
                            <button>Send email</button>
                        </div>
                        <div className={styles.LoginContainerSignup}>
                        <p>Don't have an account? <a href="/register">Sign up</a> </p>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Recover
