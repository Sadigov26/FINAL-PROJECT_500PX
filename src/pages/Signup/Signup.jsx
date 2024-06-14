import React from 'react';
import styles from '../Login/Login.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Signup = () => {
    return (
        <div style={{ width: "100%", gap: "80px", minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#F7F8FA" }}>
            <Header />
            <div className={styles.Login}>
                <div className={styles.LoginContainer}>
                    <div className={styles.LoginContainerSignup}>
                        <span>Sign up with <a href="">Apple,</a> <a href="">Facebook</a> or <a href="">Google</a></span>
                    </div>
                    <div className={styles.distancLog}>
                        <div style={{width:'40%' , height:"2px" , backgroundColor:"gray"}}></div>
                        <span>or</span>
                        <div style={{width:'40%' , height:"2px" , backgroundColor:"gray"}}></div>
                    </div>
                    <div className={styles.LoginContainerInput}>
                        <div className={styles.EmailorUsername}>
                            <label htmlFor=""> <span>Email or Username*</span></label>
                            <input type="email"  />
                        </div>
                        <div className={styles.EmailorUsername}>
                            <label htmlFor=""> <span>Password*</span></label>
                            <input type="password" placeholder="(minimum 8 characters)" />
                        </div>
                        <div className={styles.EmailorUsername}>
                            <button type='sumbit'>Sign up </button>
                        </div>
                    </div>
                    <div className={styles.LoginContainerInput}>
                        <div className={styles.LoginContainerSignup}>
                        <p>Already have an account? <a href="/login">Log in</a> </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}



export default Signup
