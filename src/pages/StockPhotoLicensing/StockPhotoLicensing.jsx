import React from 'react';
import styles from '../../components/LicensingStarting/LicensingStarting.module.scss';
import { FaChevronRight } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const StockPhotoLicensing = () => {

    return (
        <div style={{ width: "100%", gap: "100px", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />
            <div className={styles.LicensingStarting}>
                <div className={styles.LicensingStartingContainer}>
                    <div className={styles.LicensingStartingContainerTop}>
                        <h1>500px Licensing: Get Started</h1>
                        <p>Easily license your photos for stock usage through 500px. It's quick to setup and completely optional for all membership levels.</p>
                    </div>
                    <div className={styles.LicensingStartingContainerBottom}>
                        <div className={styles.LicensingBottomNavbar}>
                            <a style={{ borderLeft: "3px solid #2986F7", fontWeight: "bold", backgroundColor: "#F7F8FA" }} href="/licensing/licensing#">Stock photo licensing</a>
                            <a href="/licensing/contribute">Become a contributor</a>
                            <a href="/licensing/requirements">Submission requirements</a>
                            <a href="/licensing/releases">Releases</a>
                            <a href="/licensing/keywording">Choosing keywords</a>
                            <a href="/licensing/content">Content types</a>
                            <a href="/licensing/distribution">Distribution</a>
                        </div>
                        <div className={styles.LicensingBottomDesk}>
                            <div className={styles.section}>
                                <h1>Learn about stock photo licensing</h1>
                                <p>Easily license your photos for stock photography usage through 500px and our distribution partners. It's quick to setup and completely optional for all membership levels.</p>

                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>What does licensing your photo mean?</h3>
                                    <p>Stock photo licensing, often referred to as commercial licensing, allows potential buyers to purchase a license to use a photo for Creative (Commercial) or Editorial purposes. As the photographer, you will always maintain the copyright of your photos and by agreeing to our Contributor Agreement you are giving permission for 500px and our distribution partners, Getty Images and VCG (Visual China Group), to manage the licensing of your photos on your behalf.</p>
                                    <p>Examples of Creative (Commercial) use include:</p>
                                    <ul>
                                        <li>Advertising in print and digital media campaigns</li>
                                        <li>Marketing and promotional materials</li>
                                        <li>Corporate presentations and brochures</li>
                                        <li>Commercial websites</li>
                                        <li>Product packaging</li>
                                        <li>Film and television</li>
                                        <li>Books and book covers</li>
                                    </ul>
                                    <p>Examples of Editorial use include:</p>
                                    <ul>
                                        <li>Newspaper and magazine articles</li>
                                        <li>Editorial features</li>
                                        <li>Blog or website (for descriptive purposes)</li>
                                        <li>News broadcasts</li>
                                        <li>Documentaries</li>
                                        <li>Textbooks</li>
                                        <li>Essays and journals</li>
                                    </ul>
                                </div>

                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>What are my licensing options? What do these mean?</h3>
                                    <p><span style={{ fontWeight: "bold" }}>Royalty-Free (RF)</span> Royalty-free means that the licence fee is paid once and there is no need for the buyer to pay additional royalties if the content is reused. Royalty-free content is licensed for unlimited, perpetual use, and pricing is based on the file size. Content submitted to 500px for licensing is all royalty-free. Note: due to the nature of royalty-free, it's not possible to confirm the end user or client in most cases.</p>
                                </div>

                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>Exclusive vs non-Exclusive options</h3>
                                    <p><span style={{ fontWeight: "bold" }}>Exclusive</span> licensing means that only 500px and our distribution partners can license the image(s) commercially and you (photographer) have never licensed the content commercially before, either directly or through another licensing platform. For instance, if you have made your photos available in the past through Creative Commons licensing or through another vendor such as iStock, Shutterstock, Alamy, etc., then these specific photos would not qualify as exclusive to 500px.</p>
                                    <p><span style={{ fontWeight: "bold" }}>Non-Exclusive</span> licensing means that in addition to 500px, you can license your images through other commercial licensing vendors, or to other commercial buyers, or you have licensed the photo commercially in the past.</p>
                                </div>

                                <div className={styles.LicensingBottomDeskSSS}>
                                    <h3>End-User License Agreement (EULA)</h3>
                                    <a style={{ width: "100%", fontSize: "18px", paddingTop: "20px", color: '#2995F9', textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "start" }} href="https://www.gettyimages.ca/eula" target='blank'>Getty Images EULA</a>
                                    <a style={{ width: "100%", fontSize: "18px", paddingTop: "10px", color: '#2995F9', textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "start" }} href="https://www.vcg.com/help/auth-message" target='blank'>VCG (Visual China Group) EULA</a>
                                </div>

                                <a style={{ width: "100%", textAlign: "end", paddingTop: "30px", color: '#2995F9', textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "end", gap: "10px" }} href="/licensing/contribute">Become a contributor <FaChevronRight /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default StockPhotoLicensing;
