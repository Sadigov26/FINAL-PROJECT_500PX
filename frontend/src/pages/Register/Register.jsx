import React, { useState } from 'react';
import styles from '../Login/Login.module.scss';
import { FaApple, FaFacebook } from 'react-icons/fa6';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { TfiEmail } from 'react-icons/tfi';

const Register = () => {
    const [agreed, setAgreed] = useState(false);

    const handleCheckboxChange = (e) => {
        setAgreed(e.target.checked);
    };

    const handleSocialLinkClick = (e) => {
        if (!agreed) {
            e.preventDefault();
            document.getElementById("agreementMessage").innerText = "You must agree in order to continue";
        }
    };

    return (
        <div>
            <Header />
            <div className={styles.Login}>
                <div className={styles.LoginContainer}>
                    <div className={styles.LoginContainerTop}>
                        <h1>Join 500px</h1>
                    </div>
                    <div className={styles.LoginContainerSignup}>
                        <p>Discover and share incredible photos, gain global exposure, and get paid for your work.</p>
                    </div>
                    <div className={styles.LoginContainerSocial}>
                        <a href="/signup" onClick={handleSocialLinkClick}> <FaApple className={styles.iconsLogin} />Continue with Apple</a>
                        <a href="/signup" onClick={handleSocialLinkClick} style={{ backgroundColor: "#3C5A96", border: "2px solid #3C5A96" }}> <FaFacebook className={styles.iconsLogin} />Continue with Facebook</a>
                        <a href="/signup" onClick={handleSocialLinkClick} style={{ backgroundColor: "white", color: "#6D7378", border: "2px solid #6D7378" }}> <svg className={styles.iconsLogin} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 12.2724C24 11.4216 23.9216 10.6044 23.7771 9.81836H12.2449V14.46H18.8351C18.6987 15.1942 18.4118 15.8937 17.9917 16.5162C17.5716 17.1386 17.0271 17.6712 16.391 18.0816V21.0936H20.3486C22.6641 19.0032 24 15.9276 24 12.2736V12.2724Z" fill="#4285F4"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2449 23.9999C15.551 23.9999 18.3233 22.9259 20.3486 21.0923L16.391 18.0815C15.2951 18.8015 13.8931 19.2275 12.2449 19.2275C9.0551 19.2275 6.3551 17.1155 5.39388 14.2799H1.30286V17.3879C2.32164 19.376 3.88454 21.0473 5.81685 22.2149C7.74917 23.3826 9.97477 24.0006 12.2449 23.9999Z" fill="#34A853"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.39388 14.2801C5.14898 13.5601 5.00939 12.7921 5.00939 12.0001C5.00939 11.2081 5.14898 10.4401 5.39388 9.72006V6.61206H1.30286C0.445732 8.28391 -0.000440122 10.1291 3.25781e-07 12.0001C3.25781e-07 13.9369 0.472653 15.7681 1.30286 17.3881L5.39265 14.2801H5.39388Z" fill="#FBBC05"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2449 4.7724C14.0424 4.7724 15.6563 5.3784 16.9261 6.5676L20.438 3.126C18.3171 1.188 15.5449 0 12.2449 0C7.45714 0 3.31837 2.688 1.30286 6.612L5.39265 9.72C6.35755 6.8832 9.05632 4.7724 12.2449 4.7724Z" fill="#EA4335"></path></svg>Continue with Google</a>
                        <a href="/signup" onClick={handleSocialLinkClick} style={{ backgroundColor: "#0870D1", border: "2px solid #0870D1" }}> <TfiEmail className={styles.iconsLogin} />Continue with email</a>
                    </div>
                    <div className={styles.agreetothe}>
                        <div className={styles.LoginContainerSignup}>
                            <input type="checkbox" id="agreeCheckbox" style={{ marginRight: "5px", width: "20px", height: "20px" }} onChange={handleCheckboxChange} />
                            <label htmlFor="agreeCheckbox" style={{ cursor: "pointer" }}>I agree to the <a href="https://500px.com/terms" target='blank'>Terms of Service</a> and <a href="https://500px.com/privacy" target='blank'>Privacy Policy</a></label>
                        </div>
                        <p id="agreementMessage" style={{ color: "red" }}></p>
                    </div>
                    <div className={styles.LoginContainerSignup}>
                        <p>Already have an account? <a href="/login">Log in</a> </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;

