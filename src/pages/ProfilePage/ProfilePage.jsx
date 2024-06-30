import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./ProfilePage.module.scss";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { useNavigate } from "react-router-dom";
import { logout, setCredentials } from "../../redux/slices/authSlice.js";
import { useLogoutMutation, useUpdateUserMutation } from "../../redux/slices/usersApiSlice.js";

const ProfilePage = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logoutApiCall] = useLogoutMutation();
    const [updateUser, { isLoading }] = useUpdateUserMutation();

    const { userInfo } = useSelector((state) => state.auth);

    const handleLogout = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
        } else {
            try {
                const res = await updateUser({
                    _id: userInfo._id,
                    name,
                    surname,
                    email,
                    password,
                }).unwrap();

                dispatch(setCredentials({ ...res }));
                toast.success("Profile updated successfully");
                setPassword('');
                setConfirmPassword('');
                navigate("/profile");
            } catch (error) {
                toast.error(error.data.message || error.message);
            }
        }
    };

    useEffect(() => {
        if (userInfo) {
            setName(userInfo.name);
            setSurname(userInfo.surname);
            setEmail(userInfo.email);
        }
    }, [userInfo]);

    const defaultProfilePhotoUrl = "https://pacdn.500px.org/userpic.png";

    return (
        <div>
            <Header />

            <div className={styles.container}>
                <ToastContainer />
                <div className={styles.main}>
                    <div className={styles.proContainer}>
                        <div className={styles.headBox}>
                            <button className={styles.btnhead} onClick={() => navigate("/")}>Back</button>

                            <button className={styles.Btn} onClick={handleLogout}>
                                <div className={styles.sign}><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
                                <div className={styles.text}>Logout</div>
                            </button>

                        </div>
                        <h1>Change Your Profile</h1>
                        <div className={styles.profilePhotoContainer}>
                            <img
                                src={defaultProfilePhotoUrl}
                                alt="Default Profile"
                                className={styles.profilePhoto}
                            />
                        </div>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.inputGroup}>
                                <label>Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Surname</label>
                                <input
                                    type="text"
                                    value={surname}
                                    onChange={(e) => setSurname(e.target.value)}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className={styles.submitButton}>
                                {isLoading ? "Updating..." : "Update"}
                            </button>
                        </form>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
                <Footer />
        </div>

    );
};

export default ProfilePage;