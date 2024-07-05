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
import axios from "axios";
import videoSource from '../../pages/LikePhotos/Animation - 1719352935615.gif';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo } = useSelector((state) => state.auth);

    const [name, setName] = useState(userInfo ? userInfo.name : "");
    const [surname, setSurname] = useState(userInfo ? userInfo.surname : "");
    const [email, setEmail] = useState(userInfo ? userInfo.email : "");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [data, setData] = useState([]);
    const [editMode, setEditMode] = useState(false); // State to manage edit mode

    const [logoutApiCall] = useLogoutMutation();
    const [updateUser] = useUpdateUserMutation();

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios
            .get(`https://664c587c35bbda10987ff83d.mockapi.io/Basket`)
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    const handleLogout = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdateName = async () => {
        try {
            const res = await updateUser({
                _id: userInfo._id,
                name,
            }).unwrap();

            dispatch(setCredentials({ ...res }));
            toast.success("Name updated successfully");
        } catch (error) {
            toast.error(error.data.message || error.message);
        }
    };

    const handleUpdateSurname = async () => {
        try {
            const res = await updateUser({
                _id: userInfo._id,
                surname,
            }).unwrap();

            dispatch(setCredentials({ ...res }));
            toast.success("Surname updated successfully");
        } catch (error) {
            toast.error(error.data.message || error.message);
        }
    };

    const handleUpdateEmail = async () => {
        try {
            const res = await updateUser({
                _id: userInfo._id,
                email,
            }).unwrap();

            dispatch(setCredentials({ ...res }));
            toast.success("Email updated successfully");
        } catch (error) {
            toast.error(error.data.message || error.message);
        }
    };

    const handleUpdatePassword = async () => {
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            const res = await updateUser({
                _id: userInfo._id,
                password,
            }).unwrap();

            dispatch(setCredentials({ ...res }));
            toast.success("Password updated successfully");
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            toast.error(error.data.message || error.message);
        }
    };

    const defaultProfilePhotoUrl = "https://pacdn.500px.org/userpic.png";

    if (!userInfo) {
        return <div>User data not found</div>;
    }

    return (
        <div>
            <Header />

            <div className={styles.container}>
                <ToastContainer />
                <div className={styles.main}>
                    <div className={styles.proContainer}>
                        <div className={styles.headBox}>
                            <button className={styles.btnHead} onClick={() => navigate("/")}>
                                Back
                            </button>
                        </div>
                        <h1>Profile Information</h1>
                        <div className={styles.profileInfo}>

                            {editMode ? (
                                <form className={styles.form}>
                                    <div className={styles.profilePhotoContainer}>
                                        <img
                                            src={defaultProfilePhotoUrl}
                                            alt="Default Profile"
                                            className={styles.profilePhoto}
                                        />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Name</label>
                                        <div className={styles.inputandbutton}>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                            <button type="button" onClick={handleUpdateName} className={styles.updateButton}>
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Surname</label>
                                        <div className={styles.inputandbutton}>
                                            <input
                                                type="text"
                                                value={surname}
                                                onChange={(e) => setSurname(e.target.value)}
                                            />
                                            <button type="button" onClick={handleUpdateSurname} className={styles.updateButton}>
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Email</label>
                                        <div className={styles.inputandbutton}>

                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <button type="button" onClick={handleUpdateEmail} className={styles.updateButton}>
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Password</label>
                                        <div className={styles.inputandbutton}>
                                            <input
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="*****"
                                            />

                                        </div>
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Confirm Password</label>
                                        <div className={styles.inputandbutton}>
                                            <input
                                                type="password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                placeholder="*****"
                                            />
                                            <button type="button" onClick={handleUpdatePassword} className={styles.updateButton}>
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.buttonGroup}>
                                        <button
                                            type="button"
                                            className={styles.cancelButton}
                                            onClick={() => setEditMode(false)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className={styles.profileData}>
                                    <div className={styles.profilePhotoContainer}>
                                        <img
                                            src={defaultProfilePhotoUrl}
                                            alt="Default Profile"
                                            className={styles.profilePhoto}
                                        />
                                    </div>
                                    <div className={styles.dataGroup}>
                                        <label>Name:</label>
                                        <div style={{ fontWeight: "bold" }}>{name}</div>
                                    </div>
                                    <div className={styles.dataGroup}>
                                        <label >Surname:</label>
                                        <div style={{ fontWeight: "bold" }}>{surname}</div>
                                    </div>
                                    <div className={styles.dataGroup}>
                                        <label>Email:</label>
                                        <div style={{ fontWeight: "bold" }}>{email}</div>
                                    </div>
                                    <div style={{display:"flex" , alignItems:'center' , justifyContent:"space-between" ,width:"100%"}}>
                                        <button
                                            className={styles.editButton}
                                            onClick={() => setEditMode(true)}
                                        >
                                            Edit Profile
                                        </button>
                                        <button className={styles.Btn} onClick={handleLogout}>
                                            <div className={styles.sign}><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
                                            <div className={styles.text}>Logout</div>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={styles.dashboard}>
                        <h2>User Photos</h2>
                        <div className={styles.dashboardCardsContainer}>
                            <div className={styles.dashboardContainerBottom}>
                                {data && data.length > 0 ? (
                                    data.map((item) => (
                                        <div className={styles.dashboardCards} key={item.id}>
                                            <h3>{item.title}</h3>
                                            <img src={item.thumbnail} alt="" />
                                        </div>
                                    ))
                                ) : (
                                    <div className={styles.dataNotFound}>
                                        <p className={styles.emptyMessage}> <img src={videoSource} alt="" />
                                            Your list is empty.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProfilePage;
