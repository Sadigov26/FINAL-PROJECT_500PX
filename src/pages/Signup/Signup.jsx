import React, { useState } from 'react';
import axios from 'axios';
import styles from '../Login/Login.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { email, username, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/auth/register', { username, email, password });
            setSuccess('Registration successful');
            setError('');
            console.log(res.data); // Token or success message
        } catch (err) {
            setError('Registration failed');
            setSuccess('');
            console.error(err.response.data);
        }
    };

    return (
        <div style={{ width: "100%", gap: "80px", minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#F7F8FA" }}>
            <Header />
            <div className={styles.Login}>
                <div className={styles.LoginContainer}>
                    <div className={styles.LoginContainerSignup}>
                        <span>Sign up with <a href="">Apple,</a> <a href="">Facebook</a> or <a href="">Google</a></span>
                    </div>
                    <div className={styles.distancLog}>
                        <div style={{ width: '40%', height: "2px", backgroundColor: "gray" }}></div>
                        <span>or</span>
                        <div style={{ width: '40%', height: "2px", backgroundColor: "gray" }}></div>
                    </div>
                    <form onSubmit={onSubmit} className={styles.LoginContainerInput}>
                        <div className={styles.EmailorUsername}>
                            <label htmlFor="email"><span>Email*</span></label>
                            <input type="email" name="email" value={email} onChange={onChange} required />
                        </div>
                        <div className={styles.EmailorUsername}>
                            <label htmlFor="username"><span>Username*</span></label>
                            <input type="text" name="username" value={username} onChange={onChange} required />
                        </div>
                        <div className={styles.EmailorUsername}>
                            <label htmlFor="password"><span>Password*</span></label>
                            <input type="password" name="password" value={password} onChange={onChange} placeholder="(minimum 8 characters)" required />
                        </div>
                        <div className={styles.EmailorUsername}>
                            <button type='submit'>Sign up</button>
                        </div>
                    </form>
                    {error && <div className={styles.error} style={{ color: "red" }}>{error}</div>}
                    {success && <div className={styles.success} style={{ color: "#0056a7" }}>{success}</div>}
                    <div className={styles.LoginContainerInput}>
                        <div className={styles.LoginContainerSignup}>
                            <p>Already have an account? <a href="/login">Log in</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Signup;
