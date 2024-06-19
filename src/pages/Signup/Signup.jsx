import React, { useEffect, useState } from 'react';
import styles from '../Login/Login.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from "../../redux/slices/usersApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../redux/slices/authSlice";
import { toast } from "react-toastify";

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigate();
    const dispatch = useDispatch();

    const [register, { isLoading }] = useRegisterMutation();

    const { userInfo } = useSelector(state => state.auth);

    useEffect(() => {
        if (userInfo) {
            navigation('/dashboard');
        }
    }, [navigation, userInfo]);



    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Sifreler duz deyil');
            return;
        }
        try {
            const res = await register({ name, email, password }).unwrap();
            dispatch(setCredentials({ ...res }));
            navigation('/dashboard');
        } catch (error) {
            toast.error('Register fail');
        }
    }


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
                    <form onSubmit={handleRegister} className={styles.LoginContainerInput}>
                        <div className={styles.EmailorUsername}>
                            <label htmlFor="email"><span>Email*</span></label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={styles.EmailorUsername}>
                            <label htmlFor="username"><span>Username*</span></label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className={styles.EmailorUsername}>
                            <label htmlFor="password"><span>Password*</span></label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className={styles.EmailorUsername}>
                            <button type="submit" disabled={isLoading}>
                                {isLoading ? 'User creating' : 'Register'}
                            </button>
                        </div>
                    </form>


                    <div className={styles.LoginContainerInput}>
                        <div className={styles.LoginContainerSignup}>
                            <p>Already have an account? <a href="/login">Log in</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Signup;