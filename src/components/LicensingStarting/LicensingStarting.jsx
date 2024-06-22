import React, { useState } from 'react';
import styles from '../../components/LicensingStarting/LicensingStarting.module.scss';


const LicensingStarting = () => {
    const [menuhelp, sethelpmenu] = useState(false);
    const helpmenu = () => {
        sethelpmenu(!menuhelp);
    };
    return (
        <div>
            <div className={styles.LicensingStarting}>
                <div className={styles.LicensingStartingContainer}>
                    <div className={styles.LicensingStartingContainerTop}>
                        <h2>500px Licensing: Get Started</h2>
                        <p>Easily license your photos for stock usage through 500px. It's quick to setup and completely optional for all membership levels.</p>
                    </div>.
                    <li style={{ listStyle: "none" }}><a onClick={helpmenu} className={styles.TableContents}>Table of Contents
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M4.57926 7.03499C4.57933 6.73524 4.75993 6.46502 5.03687 6.35032C5.31381 6.23562 5.63258 6.299 5.84457 6.51093L11.2505 11.9168L16.6564 6.51093C16.9472 6.23002 17.4096 6.23404 17.6955 6.51996C17.9814 6.80589 17.9854 7.26821 17.7045 7.55906L11.7745 13.489C11.4851 13.7784 11.0159 13.7784 10.7264 13.489L4.79645 7.55906C4.65743 7.42008 4.57931 7.23157 4.57926 7.03499Z"
                                fill="#6D7378"></path>
                        </svg></a>
                        {menuhelp && (
                            <ul className={styles.licensingg}>
                                <a href="/licensing/licensing#">Stock photo licensing</a>
                                <a href="/licensing/contribute">Become a contributor</a>
                                <a href="/licensing/requirements">Submission requirements</a>
                                <a href="/licensing/releases">Releases</a>
                                <a href="/licensing/keywording">Choosing keywords</a>
                                <a href="/licensing/content">Content types</a>
                                <a style={{ borderLeft: "3px solid #2986F7", fontWeight: "bold", backgroundColor: "#F7F8FA" }} href="/licensing/distribution">Distribution</a>

                            </ul>
                        )}
                    </li>
                    <div className={styles.LicensingStartingContainerBottom}>
                        <div className={styles.LicensingBottomNavbar}>
                            <a href="/licensing/licensing#">Stock photo licensing</a>
                            <a href="/licensing/contribute">Become a contributor</a>
                            <a href="/licensing/requirements">Submission requirements</a>
                            <a href="/licensing/releases">Releases</a>
                            <a href="/licensing/keywording">Choosing keywords</a>
                            <a href="/licensing/content">Content types</a>
                            <a style={{ borderLeft: "3px solid #2986F7", fontWeight: "bold", backgroundColor: "#F7F8FA" }} href="/licensing/distribution">Distribution</a>
                        </div>
                        <div className={styles.LicensingBottomDesk}>
                            <div className={styles.Distribution} >
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h2>From 500px to Everywhere</h2>
                                    <p>500px works exclusively with two trusted, strategic distribution partners - Getty Images & VCG (Visual China Group) - to increase the global exposure of our Contributor’s photography.</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>How do 500px distribution partners increase exposure of your imagery?</h3>
                                    <p>Getty Images is the largest photography marketplace in the world, as well as a leading distributor of award-winning imagery. Serving approximately 1M customers in almost every country in the world, Getty Images is the go-to choice for professionals to discover and purchase creative content. Meanwhile, VCG is also among the top image licensing companies in the world, the go-to choice for creative and media professionals in China, and an award-winning leader in copyright protection.</p>
                                </div>
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>Distribution Partners</h3>
                                    <p>Getty Images and VCG are just like us, committed to excellence in the premium photography market. We believe our partnerships will help our Contributors reach a wider audience, increase their revenue, and build greater awareness and demand for their photos worldwide.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LicensingStarting
