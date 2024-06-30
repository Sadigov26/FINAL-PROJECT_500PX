import React, { useEffect, useState } from 'react';
import styles from '../Login/Login.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../redux/slices/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import { useRegisterMutation, useSendVerificationEmailMutation, useConfirmEmailMutation } from '../../redux/slices/usersApiSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state.auth);
    const [register, { isLoading: isRegistering }] = useRegisterMutation();
    const [sendVerificationEmail, { isLoading: isSendingEmail }] = useSendVerificationEmailMutation();
    const [confirmEmail, { isLoading: isConfirmingEmail }] = useConfirmEmailMutation();

    useEffect(() => {
        if (userInfo) {
            navigate('/confirm');
        }
    }, [navigate, userInfo]);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!email) {
            toast.error('Email is required');
            return;
        } else if (!validateEmail(email)) {
            toast.error('Invalid email address');
            return;
        }

        if (!name) {
            toast.error('Name is required');
            return;
        }
        if (!surname) {
            toast.error('Surname is required');
            return;
        }
        if (!password) {
            toast.error('Password is required');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        try {
            // Register user
            const data = await register({ surname, name, email, password }).unwrap();
            dispatch(setCredentials({ ...data }));

            // Send verification email
            await sendVerificationEmail({ email });

            // Show modal for verification code
            setShowModal(true);
        } catch (error) {
            toast.error(`Registration failed: ${error.data?.message || error.message}`);
        }
    };

    const handleVerifyEmail = async (e) => {
        e.preventDefault();

        try {
            await confirmEmail({ email, code: verificationCode }).unwrap();
            toast.success('Email successfully verified!');
            setShowModal(false);
            navigate('/confirm');
        } catch (error) {
            toast.error(`Verification failed: ${error.data?.message || error.message}`);
            setShowModal(false); // Close the modal
        }
    };

    return (
        <div>
            <Header />
            <div className={styles.Login}>
                <ToastContainer position="top-right" />
                <div className={styles.LoginContainer}>
                    <div className={styles.LoginContainerSignup}>
                        <span>
                            Sign up with <a href="#">Apple,</a> <a href="#">Facebook</a> or <a href="#">Google</a>
                        </span>
                    </div>
                    <div className={styles.distancLog}>
                        <div style={{ width: '40%', height: '2px', backgroundColor: 'gray' }}></div>
                        <span>or</span>
                        <div style={{ width: '40%', height: '2px', backgroundColor: 'gray' }}></div>
                    </div>
                    <form className={styles.LoginContainerInput} onSubmit={handleRegister}>
                        <div className={styles.EmailorUsername}>
                            <label htmlFor="email">
                                <span>Email*</span>
                            </label>
                            <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={styles.EmailorUsername}>
                            <label htmlFor="username">
                                <span>Username*</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className={styles.EmailorUsername}>
                            <label htmlFor="username">
                                <span>Surname*</span>
                            </label>
                            <input type="text" name="surname" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                        </div>
                        <div className={styles.EmailorUsername}>
                            <label htmlFor="password">
                                <span>Password*</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className={styles.EmailorUsername}>
                            <label htmlFor="confirmPassword">
                                <span>Confirm Password*</span>
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className={styles.EmailorUsername}>
                            <button type="submit" disabled={isRegistering || isSendingEmail}>
                                {isRegistering ? 'Creating User...' : 'Register'}
                            </button>
                        </div>
                    </form>

                    <div className={styles.LoginContainerInput}>
                        <div className={styles.LoginContainerSignup}>
                            <p>
                                Already have an account? <Link to="/login">Log in</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            {showModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <h2>Email Verification</h2>
                        <form onSubmit={handleVerifyEmail}>
                            <label htmlFor="verificationCode">Enter Verification Code</label>
                            <input
                                type="text"
                                name="verificationCode"
                                value={verificationCode}
                                onChange={(e) => setVerificationCode(e.target.value)}
                                required
                            />
                            <button type="submit" disabled={isConfirmingEmail}>
                                {isConfirmingEmail ? 'Verifying...' : 'Verify Email'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Signup;
