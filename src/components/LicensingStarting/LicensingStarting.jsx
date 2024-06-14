import React from 'react';
import styles from '../../components/LicensingStarting/LicensingStarting.module.scss';


const LicensingStarting = () => {
    return (
        <div>
            <div className={styles.LicensingStarting}>
                <div className={styles.LicensingStartingContainer}>
                    <div className={styles.LicensingStartingContainerTop}>
                        <h1>500px Licensing: Get Started</h1>
                        <p>Easily license your photos for stock usage through 500px. It's quick to setup and completely optional for all membership levels.</p>
                    </div>
                    <div className={styles.LicensingStartingContainerBottom}>
                        <div className={styles.LicensingBottomNavbar}>
                            <a href="/licensing/licensing#">Stock photo licensing</a>
                            <a href="/licensing/contribute">Become a contributor</a>
                            <a href="/licensing/requirements">Submission requirements</a>
                            <a href="/licensing/releases">Releases</a>
                            <a href="/licensing/keywording">Choosing keywords</a>
                            <a href="/licensing/content">Content types</a>
                            <a  style={{ borderLeft: "3px solid #2986F7", fontWeight: "bold", backgroundColor: "#F7F8FA" }} href="/licensing/distribution">Distribution</a>
                        </div>
                        <div className={styles.LicensingBottomDesk}>
                            <div className={styles.Distribution} >
                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h1>From 500px to Everywhere</h1>
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
