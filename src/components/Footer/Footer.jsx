import React from 'react'
import styles from './Footer.module.scss'
import playmarket from '../../about/image.png'
import appstore from '../../about/image copy.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className={styles.Footer}>
                <div className={styles.FooterContainerLarge}>
                    <div className={styles.FooterContainer}>
                        <div className={styles.FooterContainerTop}>
                            <div style={{ display: "flex" }} className={styles.NavContainer}>
                                <div className={styles.FooterNavbar}>
                                    <h3>Company</h3>
                                    <ul>
                                        <li><a href="/licensing/licensing">Newsroom</a></li>
                                        <li><a href="/licensing/contribute">About us</a></li>
                                        <li><a href="/licensing/requirements">Careers</a></li>
                                    </ul>
                                </div>
                                <div className={styles.FooterNavbar}>
                                    <h3>By community</h3>
                                    <ul>
                                        <li><a href="/discover">Popular photos</a></li>
                                        <li><a href="/discover">Editors' Choice</a></li>
                                        <li><a href="/discover">Quests</a></li>
                                        <li><a href="/discover">Portfolio</a></li>
                                    </ul>
                                </div>
                                <div className={styles.FooterNavbarLic}>
                                    <h3>Licensing</h3>
                                    <ul>
                                        <li><a href="/licensing">About Licensing</a></li>
                                        <li><a href="/licensing/contribute">Become a Contributor</a></li>
                                        <li><a href="/licensing/requirements">Submission requirements</a></li>
                                        <li><a href="/licensing/content">Content types</a></li>
                                        <li><a href="/licensing/distribution">Distribution</a></li>
                                    </ul>
                                </div>
                                <div className={styles.FooterNavbar}>
                                    <h3>Social</h3>
                                    <ul>
                                        <li><a style={{ display: "flex", alignItems: "center", gap: "15px" }} href="https://www.facebook.com/500px" target="blank"><FaFacebookF /> Facebook</a></li>
                                        <li><a style={{ display: "flex", alignItems: "center", gap: "15px" }} href="https://x.com/500px?mx=2" target="blank"><FaTwitter /> Twitter</a></li>
                                        <li><a style={{ display: "flex", alignItems: "center", gap: "15px" }} href="https://www.instagram.com/500px/" target="blank"><IoLogoInstagram /> Instagram</a></li>
                                        <li><a style={{ display: "flex", alignItems: "center", gap: "15px" }} href="https://www.pinterest.ca/500px/" target="blank"><FaPinterestP /> Pinterest</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.FooterApp}>
                                <h3>Download the app</h3>
                                <div className={styles.getTheAppStore}>
                                    <a href="https://apps.apple.com/us/app/500px-photo-sharing-community/id471965292"><img src={appstore} alt="" /></a>
                                    <a href="https://play.google.com/store/apps/details?id=com.fivehundredpx.viewer"><img src={playmarket} alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.FooterContainerBottom}>
                            <div className={styles.FooterContainerLeft}>
                                <h1>© 500px</h1>
                            </div>
                            <div className={styles.FooterContainerRight}>
                                <ul>
                                    <li><a href="https://500px.com/terms" target='blank'>Terms</a></li>
                                    <li><a href="https://500px.com/privacy" target='blank'>Privacy</a></li>
                                    <li><a href="https://support.500px.com/hc/en-us" target='blank'>Support</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
