    import React, { useState } from 'react';
    import styles from './ComparePlans.module.scss';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faCheck, faGamepad, faGem } from '@fortawesome/free-solid-svg-icons';
    import off20 from '../../about/image copy 2.png';
    import { faGlasses } from '@fortawesome/free-solid-svg-icons';
    import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
    import { faHeadset } from '@fortawesome/free-solid-svg-icons';
    import { faCamera } from '@fortawesome/free-solid-svg-icons';
    import { faImages } from '@fortawesome/free-solid-svg-icons';
    import { faComments } from '@fortawesome/free-solid-svg-icons';
    import { faRocket } from '@fortawesome/free-solid-svg-icons';
    import { faCrown } from '@fortawesome/free-solid-svg-icons';
    import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
    import { faImage } from '@fortawesome/free-solid-svg-icons';
    import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
    import { faHeart } from '@fortawesome/free-solid-svg-icons';
    import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
    import { faUser } from '@fortawesome/free-solid-svg-icons';
    import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
    import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
    import { faShop } from '@fortawesome/free-solid-svg-icons';

    const ComparePlans = () => {
        const [isCheckVisible, setIsCheckVisible] = useState(true);
        const [priceOne, setPriceOne] = useState("$3.99 US / mo");
        const [priceTwo, setPriceTwo] = useState("$7.99 US / mo");
        const [annualText, setAnnualText] = useState("$47.90 US / yr");

        const toggleCheckVisibility = () => {
            setIsCheckVisible(!isCheckVisible);
            if (priceOne === "$3.99 US / mo") {
                setPriceOne("$6.49 US / mo");
                setPriceTwo("$12.99 US / mo");
                setAnnualText("Save 30% with annual membership");
            } else {
                setPriceOne("$3.99 US / mo");
                setPriceTwo("$7.99 US / mo");
                setAnnualText("$47.90 US / yr");
            }
        };

        return (
            <div>
                <div className={styles.ComparePlans} id='compare-plans' >
                    <div className={styles.ComparePlansContainer}>
                        <div className={styles.ComparePlansContainerTop}>
                            <h1>Membership plans</h1>
                        </div>
                        <div className={styles.ComparePlansContainerMidle}>
                            <h1 style={{ color: isCheckVisible ? 'black' : 'gray' }}>Yearly</h1>
                            <label className={styles.switch}>
                            <input type="checkbox" onChange={toggleCheckVisibility} checked={!isCheckVisible} />

                                <span className={styles.slider}></span>
                            </label>
                            <h2 style={{ color: isCheckVisible ? 'gray' : 'black' }}>Monthly</h2>
                        </div>
                        <div className={styles.ComparePlansContainerBottom}>
                            <div className={styles.ComparePlansOne}>
                                <div className={styles.ComparePlansOneTop}>
                                    <h1 className={styles.firstoftype}> <FontAwesomeIcon icon={faGamepad} />Awesome</h1>
                                </div>
                                <div className={styles.ComparePlansTwoBottom}>
                                    <div className={`${styles.ComparePlansTwoBottomCheck} ${isCheckVisible ? '' : styles.hidden}`}>
                                        {isCheckVisible && <img src={off20} alt="" className={styles.off20} />}
                                        {isCheckVisible && <del>$4.99 US / mo</del>}
                                        <h1>{priceOne}</h1>
                                        <p>{annualText}</p>
                                        <h5 style={{ marginTop: "20px" }}> <FontAwesomeIcon icon={faCheck} /> Unlimited uploads</h5>
                                        <h5> <FontAwesomeIcon icon={faCheck} /> Priority customer support</h5>
                                        <h5> <FontAwesomeIcon icon={faCheck} /> Ad-free browsing</h5>
                                        <h5> <FontAwesomeIcon icon={faCheck} /> Statistics</h5>
                                        <h5> <FontAwesomeIcon icon={faCheck} /> Access Liked photos</h5>
                                        <h5> <FontAwesomeIcon icon={faCheck} /> Gallery slideshows</h5>
                                        <h5> <FontAwesomeIcon icon={faCheck} /> Profile badge</h5>
                                        <h5> <FontAwesomeIcon icon={faCheck} /> Available for Hire in Search</h5>
                                        <h5> <FontAwesomeIcon icon={faCheck} /> 100% Royalties (exclusive)</h5>
                                        <h5> <FontAwesomeIcon icon={faCheck} /> Offline Viewing <span>Android only</span></h5>
                                    </div>
                                    <div className={styles.ComparePlansTwoBottomSignBtn}>
                                        <button>Sign up</button>
                                        <p>Memberships are auto-renewed yearly at the regular price of $119.88 US and can be canceled any time.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.ComparePlansTwo}>
                                <div className={styles.ComparePlansTwoTop}>
                                    <h1><FontAwesomeIcon icon={faGem} />Pro</h1>
                                </div>
                                <div className={styles.ComparePlansTwoBottom}>
                                    <div className={`${styles.ComparePlansTwoBottomCheck} ${isCheckVisible ? '' : styles.hidden}`}>
                                        {isCheckVisible && <img src={off20} alt="" className={styles.off20} />}
                                        {isCheckVisible && <del>$9.99 US / mo</del>}
                                        <h1>{priceTwo}</h1>
                                        <p>{annualText}</p>
                                        <h5 style={{ marginTop: "20px" }}> <FontAwesomeIcon icon={faCheck} /> Unlimited uploads</h5>
                                        <h5> <FontAwesomeIcon icon={faCheck} /> Priority customer support</h5>
                                        <h5> <FontAwesomeIcon icon={faCheck} /> Ad-free browsing</h5>
                                        <h5> <FontAwesomeIcon icon={faCheck} /> Statistics</h5>
                                        <h5> <FontAwesomeIcon icon={faCheck} /> Access Liked photos</h5>
                                        <h5> <FontAwesomeIcon icon={faCheck} /> Gallery slideshows</h5>
                                        <h5> <FontAwesomeIcon icon={faCheck} /> Profile badge</h5>
                                        <h5> <FontAwesomeIcon icon={faCheck} /> Available for Hire in Search</h5>
                                        <h5> <FontAwesomeIcon icon={faCheck} /> 100% Royalties (exclusive)</h5>
                                        <h5> <FontAwesomeIcon icon={faGem} /> Offline Viewing <span>Android only</span></h5>
                                        <h5> <FontAwesomeIcon icon={faGem} /> Display Resume</h5>
                                        <h5> <FontAwesomeIcon icon={faGem} /> Portfolio website</h5>
                                        <h5> <FontAwesomeIcon icon={faGem} /> Customize your Profile</h5>
                                    </div>
                                    <div className={styles.ComparePlansTwoBottomSignBtn}>
                                        <button>Sign up</button>
                                        <p>Memberships are auto-renewed yearly at the regular price of $119.88 US and can be canceled any time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.FeaturePlans} >
                        <div className={styles.FeaturePlansContainer} >
                            <div className={styles.FeaturePlansContainerTop}>
                                <h1>Compare plans</h1>
                            </div>
                            <div className={styles.FeaturePlansContainerBottom}>
                                <h1 style={{ fontSize: "17px" }}> Feature</h1>
                                <div className={styles.RightPlans}>
                                    <h2 style={{ fontWeight: "bold" }}>Free</h2>
                                    <FontAwesomeIcon icon={faGlasses} />
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                            </div>
                            <div className={styles.FeaturePlansContainerBottom}>
                                <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}> <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: "19px" }} />Uploads</h3>
                                <div className={styles.RightPlans}>
                                    <h2>21 / week </h2>
                                    <h2>Unlimited</h2>
                                    <h2>Unlimited</h2>
                                </div>
                            </div>
                            <div className={styles.FeaturePlansContainerBottom}>
                                <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}> <FontAwesomeIcon icon={faHeadset} style={{ fontSize: "19px" }} />Support</h3>
                                <div className={styles.RightPlans}>
                                    <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "#FDBB4D" }}></div>
                                    <h2>Priority</h2>
                                    <h2>Priority</h2>
                                </div>
                            </div>
                            <div className={styles.FeaturePlansContainerBottom}>
                                <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}> <FontAwesomeIcon icon={faCamera} style={{ fontSize: "19px" }} />Support</h3>
                                <div className={styles.RightPlans}>
                                    <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "#FDBB4D" }}></div>
                                    <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "#07D3D4" }}></div>
                                    <h2>Priority</h2>
                                </div>
                            </div>
                            <div className={styles.FeaturePlansContainerBottom}>
                                <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}> <FontAwesomeIcon icon={faImages} style={{ fontSize: "19px" }} />Create & share Galleries</h3>
                                <div className={styles.RightPlans}>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "#FDBB4D" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "#07D3D4" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "black" }}></div>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.FeaturePlansContainerBottom}>
                                <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}> <FontAwesomeIcon icon={faComments} style={{ fontSize: "19px" }} />500px Blog access</h3>
                                <div className={styles.RightPlans}>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "#FDBB4D" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "#07D3D4" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "black" }}></div>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.FeaturePlansContainerBottom}>
                                <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}> <FontAwesomeIcon icon={faRocket} style={{ fontSize: "19px" }} />Submit to Quests</h3>
                                <div className={styles.RightPlans}>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "#FDBB4D" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "#07D3D4" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "black" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.FeaturePlansContainerBottom}>
                                <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}> <FontAwesomeIcon icon={faCrown} style={{ fontSize: "19px" }} />License your work</h3>
                                <div className={styles.RightPlans}>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "#FDBB4D" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "#07D3D4" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "black" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.FeaturePlansContainerBottom}>
                                <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}> <FontAwesomeIcon icon={faPiggyBank} style={{ fontSize: "19px" }} />100% Royalties (exclusive)</h3>
                                <div className={styles.RightPlans}>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "transparent" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "#07D3D4" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "black" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.FeaturePlansContainerBottom}>
                                <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}> <FontAwesomeIcon icon={faImage} style={{ fontSize: "19px" }} />Ad-free</h3>
                                <div className={styles.RightPlans}>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "transparent" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "#07D3D4" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "black" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.FeaturePlansContainerBottom}>
                                <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}> <FontAwesomeIcon icon={faChartColumn} style={{ fontSize: "19px" }} />Statistics</h3>
                                <div className={styles.RightPlans}>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "transparent" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "#07D3D4" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "black" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.FeaturePlansContainerBottom}>
                                <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}> <FontAwesomeIcon icon={faHeart} style={{ fontSize: "19px" }} />Liked photos</h3>
                                <div className={styles.RightPlans}>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "transparent" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "#07D3D4" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "black" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.FeaturePlansContainerBottom}>
                                <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}> <FontAwesomeIcon icon={faPhotoFilm} style={{ fontSize: "19px" }} />Gallery slideshows</h3>
                                <div className={styles.RightPlans}>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "transparent" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "#07D3D4" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "black" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.FeaturePlansContainerBottom}>
                                <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}> <FontAwesomeIcon icon={faUser} style={{ fontSize: "19px" }} />Profile badge</h3>
                                <div className={styles.RightPlans}>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "transparent" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "#07D3D4" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "black" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.FeaturePlansContainerBottom}>
                                <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}> <FontAwesomeIcon icon={faUser} style={{ fontSize: "19px" }} />Offline Viewing
                                    <span style={{ padding: "2px 10px", backgroundColor: "black", color: "white" }}>Android only</span></h3>
                                <div className={styles.RightPlans}>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "transparent" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "#07D3D4" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "black" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.FeaturePlansContainerBottom}>
                                <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}> <FontAwesomeIcon icon={faBriefcase} style={{ fontSize: "19px" }} />Portfolio website</h3>
                                <div className={styles.RightPlans}>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "transparent" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "transparent" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "black" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.FeaturePlansContainerBottom}>
                                <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}> <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: "19px" }} />Publish your Resume</h3>
                                <div className={styles.RightPlans}>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "transparent" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "transparent" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "black" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.FeaturePlansContainerBottom}>
                                <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}> <FontAwesomeIcon icon={faShop} style={{ fontSize: "19px" }} />Customizable Profile</h3>
                                <div className={styles.RightPlans}>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "transparent" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "transparent" }}></div>
                                    </div>
                                    <div style={{ width: "51px" }}>
                                        <div style={{ height: "15px", width: "15px", borderRadius: "100px", backgroundColor: "black" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    export default ComparePlans;