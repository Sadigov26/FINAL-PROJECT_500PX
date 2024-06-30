import React from 'react'
import styles from './LicensingFeed.module.scss'
import feedone from '../../about/image copy 3.png'
import feedTwo from '../../about/image copy 4.png'
import feedfour from '../../about/image copy 5.png'
import { FaPiggyBank } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FaRegCopyright } from "react-icons/fa";
import { AiOutlineChrome } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { RiLeafFill } from "react-icons/ri";

const LicensingFeed = () => {
    return (
        <div>
            <div className={styles.LicensingFeed}>
                <div className={styles.LicensingFeedContainer}>
                    <div className={styles.LicensingFeedTop}>
                        <div className={styles.LicensingFeedTopContainer}>
                            <div className={styles.LicensingFeedTopContainerLeft}>
                                <div className={styles.deskFeed}>
                                    <FaPiggyBank style={{ fontSize: "47px" }} />
                                    <h2>Sell your photos and get paid up to 100% royalties</h2>
                                    <p>Once your photos are approved, paid members can earn up to 100% royalties and free users can earn up to 60% on content licensed exclusively with 500px.</p>
                                </div>
                                <div className={styles.deskFeed} style={{ borderTop: "1px solid gray" }}>
                                    <FaCrown style={{ fontSize: "47px", marginTop: "20px" }} />
                                    <h2>Easy submission process</h2>
                                    <p>Submit your photography to Licensing with just a few clicks. Receive feedback from the 500px editors and easily track your photos through the approval process.</p>
                                </div>
                            </div>
                            <div className={styles.LicensingFeedTopContainerRight}>
                                <img src={feedone} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.LicensingFeedTwo}>
                        <FaRegCopyright style={{ fontSize: "55px" }} />
                        <h2>Own your work</h2>
                        <p>All content submitted to 500px for licensing is royalty-free, but you always own your copyright when you work with 500px.</p>
                    </div>
                    <div className={styles.LicensingFeedThree}>
                        <h3 > "</h3>
                        <h2>The best advice an editor ever gave me is to try licensing more work. Aim for different moods and different styles. You never know what will hit the spot.</h2>
                        <p>-Renat Renee-Ell</p>
                    </div>
                    <div className={styles.LicensingFeedFour}>
                        <AiOutlineChrome style={{ fontSize: "50px" }} />
                        <h2>Gain global exposure for your photography</h2>
                        <p>Our distribution partners serve over 1M customers throughout the world and are the go-to choice for professionals to discover and purchase creative content.</p>
                    </div>
                    <div className={styles.LicensingFeedFive}>
                        <div className={styles.LicensingFeedTopContainer}>
                            <div className={styles.LicensingFeedTopContainerRight}>
                                <img src={feedTwo} alt="" />
                            </div>
                            <div className={styles.LicensingFeedTopContainerLeft}>
                                <div className={styles.deskFeed}>
                                    <HiUsers style={{ fontSize: "47px" }} />
                                    <h2>Join an inspiring community of photographers</h2>
                                    <p>Grow with our Contributor community—a creative group of talented artists, photographers, and content creators.</p>
                                </div>
                                <div className={styles.deskFeed} style={{ borderTop: "1px solid gray" }}>
                                    <RiLeafFill style={{ fontSize: "47px", marginTop: "20px" }} />
                                    <h2>Gain experience with Partnerships</h2>
                                    <p>As a Licensing Contributor, get exclusive opportunities to partner with 500px on special projects.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.LicensingFeedSix}>
                        <h2>Get started with Licensing</h2>
                        <p>Ready to get paid for your photography? Learn more about 500px Licensing and how to submit your work below.</p>
                    </div>
                    <div className={styles.LicensingFeedSeven}>
                        <div className={styles.LicensingFeedSevenCard}>
                            <div className={styles.LicensingFeedCards}>
                                <h2>Licensing stock photos</h2>
                                <a href="">What does licensing your photos mean?</a>
                                <a href="">What are all the licensing options?</a>
                                <a href="" className={styles.learnSevenBtn}>Learn more</a>
                            </div>
                            <div className={styles.LicensingFeedCards}>
                                <h2>Become a Contributor</h2>
                                <a href="">Submitting photos for commercial licensing</a>
                                <a href="">Resubmitting previously-reviewed content</a>
                                <a href="" className={styles.learnSevenBtn}>Learn more</a>
                            </div>
                            <div className={styles.LicensingFeedCards}>

                                <h2>Submissions requirements</h2>
                                <a href="">What are the technical requirements?</a>
                                <a href="">What are the quality requirements?</a>
                                <a href="" className={styles.learnSevenBtn}>Learn more</a>
                            </div>
                            <div className={styles.LicensingFeedCards}>
                                <h2>Releases</h2>
                                <a href="">What is a model release?</a>
                                <a href="">When do I really need one?</a>
                                <a href="" className={styles.learnSevenBtn}>Learn more</a>
                            </div>
                            <div className={styles.LicensingFeedCards}>
                                <h2>Choose keywords</h2>
                                <a href="">Photos without people</a>
                                <a href="">Photos with people</a>
                                <a href="" className={styles.learnSevenBtn}>Learn more</a>
                            </div>
                            <div className={styles.LicensingFeedCards}>
                                <h2>Content types</h2>
                                <a href="">What is a 'creative' image?</a>
                                <a href="">What is an 'editorial' image?</a>
                                <a href="" className={styles.learnSevenBtn}>Learn more</a>
                            </div>
                            <div className={styles.LicensingFeedCards}>
                                <h2>Distribution</h2>
                                <a href="">How do distributors increase my exposure?</a>
                                <a href="">Meet our distribution partners</a>
                                <a href="" className={styles.learnSevenBtn}>Learn more</a>
                            </div>
                        </div>
                        <img src={feedfour} alt="" className={styles.feedTopImg} />
                    </div>
                    <div className={styles.LicensingFeedBottom}>
                        <h2>Explore the 500px collection on Getty Images</h2>
                        <p>Get inspired to start contributing to Licensing—check out our collection of incredible photos on Getty Images.</p>
                        <a href="">View Collection</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LicensingFeed
