import React, { useState } from 'react';
import styles from './ComparePlans.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faGamepad, faGem } from '@fortawesome/free-solid-svg-icons';
import off20 from '../../about/image copy 2.png';

const ComparePlans = () => {
    const [isCheckVisible, setIsCheckVisible] = useState(true);
    const [priceOne, setPriceOne] = useState("$3.99 US / mo");
    const [priceTwo, setPriceTwo] = useState("$7.99 US / mo");

    const toggleCheckVisibility = () => {
        setIsCheckVisible(!isCheckVisible);
        if (priceOne === "$3.99 US / mo") {
            setPriceOne("$6.49 US / mo");
            setPriceTwo("$12.99 US / mo");
        } else {
            setPriceOne("$3.99 US / mo");
            setPriceTwo("$7.99 US / mo");
        }
    };

    return (
        <div>
            <div className={styles.ComparePlans}>
                <div className={styles.ComparePlansContainer}>
                    <div className={styles.ComparePlansContainerTop}>
                        <h1>Membership plans</h1>
                    </div>
                    <div className={styles.ComparePlansContainerMidle}>
                        <h1>Yearly</h1>
                        <label className={styles.switch}>
                            <input type="checkbox" onClick={toggleCheckVisibility} />
                            <span className={styles.slider}></span>
                        </label>
                        <h2>Monthly</h2>
                    </div>
                    <div className={styles.ComparePlansContainerBottom}>
                        <div className={styles.ComparePlansOne}>
                            <div className={styles.ComparePlansOneTop}>
                                <h1 className={styles.firstoftype}> <FontAwesomeIcon icon={faGamepad} />Awesome</h1>
                            </div>
                            <div className={styles.ComparePlansTwoBottom}>
                                <div className={`${styles.ComparePlansTwoBottomCheck} ${isCheckVisible ? '' : styles.hidden}`}>
                                    <img src={off20} alt="" className={styles.off20} />
                                    <del>$4.99 US / mo</del>
                                    <h1>{priceOne}</h1>
                                    <p>$47.90 US / yr</p>
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
                                    <img src={off20} alt="" className={styles.off20} />
                                    <del>$9.99 US / mo</del>
                                    <h1>{priceTwo}</h1>
                                    <p>$95.90 US / yr</p>
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
                                </div>
                                <div className={styles.ComparePlansTwoBottomSignBtn}>
                                    <button>Sign up</button>
                                    <p>Memberships are auto-renewed yearly at the regular price of $119.88 US and can be canceled any time.</p>
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
