import React, { useState } from 'react';
import styles from '../../components/LicensingStarting/LicensingStarting.module.scss';
import { FaChevronRight } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const StockPhotoLicensing = () => {
    const [menuhelp, sethelpmenu] = useState(false);
    const helpmenu = () => {
        sethelpmenu(!menuhelp);
    };
    return (
        <div >
            <Header />
            <div className={styles.LicensingStarting}>
                <div className={styles.LicensingStartingContainer}>
                    <div className={styles.LicensingStartingContainerTop}>
                        <h2>500px Licensing: Get Started</h2>
                        <p>Easily license your photos for stock usage through 500px. It's quick to setup and completely optional for all membership levels.</p>
                    </div>
                    <li style={{ listStyle: "none" }}><a onClick={helpmenu} className={styles.TableContents}>Table of Contents
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M4.57926 7.03499C4.57933 6.73524 4.75993 6.46502 5.03687 6.35032C5.31381 6.23562 5.63258 6.299 5.84457 6.51093L11.2505 11.9168L16.6564 6.51093C16.9472 6.23002 17.4096 6.23404 17.6955 6.51996C17.9814 6.80589 17.9854 7.26821 17.7045 7.55906L11.7745 13.489C11.4851 13.7784 11.0159 13.7784 10.7264 13.489L4.79645 7.55906C4.65743 7.42008 4.57931 7.23157 4.57926 7.03499Z"
                                fill="#6D7378"></path>
                        </svg></a>
                        {menuhelp && (
                            <ul className={styles.licensingg}>
                                <a style={{ borderLeft: "3px solid #2986F7", fontWeight: "bold", backgroundColor: "#F7F8FA" }} href="/licensing/licensing#">Stock photo licensing</a>
                                <a href="/licensing/contribute">Become a contributor</a>
                                <a href="/licensing/requirements">Submission requirements</a>
                                <a href="/licensing/releases">Releases</a>
                                <a href="/licensing/keywording">Choosing keywords</a>
                                <a href="/licensing/content">Content types</a>
                                <a href="/licensing/distribution">Distribution</a>
                            </ul>
                        )}
                    </li>
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
                                <h2>Learn about stock photo licensing</h2>
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
