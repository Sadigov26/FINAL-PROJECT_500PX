import React from 'react'
import styles from './Grants.module.scss'
import secondImage from '../../about/image copy 6.png'
import five1 from '../../about/image copy 7.png'
import five2 from '../../about/image copy 8.png'
import five3 from '../../about/image copy 9.png'
import five4 from '../../about/image copy 10.png'
import five5 from '../../about/image copy 11.png'
import seven1 from '../../about/image copy 13.png'
import seven2 from '../../about/image copy 12.png'
import seven9 from '../../about/image copy 14.png'
import seven8 from '../../about/image copy 15.png'
import seven3 from '../../about/image copy 16.png'
import seven4 from '../../about/image copy 17.png'
import seven5 from '../../about/image copy 18.png'
import eight2 from '../../about/image copy 19.png'
import eight1 from '../../about/image copy 21.png'
import eight5 from '../../about/image copy 20.png'
import eight8 from '../../about/image copy 22.png'
import nine5 from '../../about/image copy 23.png'
import nine6 from '../../about/image copy 24.png'
import nine3 from '../../about/image copy 25.png'
import nine1 from '../../about/image copy 26.png'
import nine2 from '../../about/image copy 27.png'
import ten5 from '../../about/image copy 28.png'
import teen2 from '../../about/image copy 29.png'
import teen6 from '../../about/image copy 30.png'
import ten8 from '../../about/image copy 31.png'
import { LuCrown } from 'react-icons/lu'
import { CiImageOn, CiMail, CiUser } from 'react-icons/ci'
import { BsFiletypeTxt } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { GiFireFlower, GiWantedReward } from 'react-icons/gi'

const Grants = () => {
    return (
        <div>
            <div className={styles.Grants}>
                <div className={styles.GrantsContainerHero}>
                    <div className={styles.GrantsContainerHeroTextTop}>
                        <div className={styles.GrantsContainerHeroText}>
                            <LuCrown style={{ fontSize: "50px", color: "white", paddingBottom: "15px" }} />
                            <span className={styles.desc}>Pitch your shoot with 500px</span>
                            <span className={styles.bigTitle}>Commercial Grants</span>
                        </div>
                        <svg className={styles.svgwavestop} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 128'>
                            <path class='header-wave' fill='#FFF'
                                d='M0,471 L1440,471 L1440,386.338583 C1331.33333,357.446194 1239,343 1163,343 C821.995497,343 821.995497,463.944882 426,463.944882 C262.447846,463.944882 120.447846,438.076115 0,386.338583 L0,471 Z'
                                transform='translate(0 -343)' />
                        </svg>
                    </div>
                </div>
                <div className={styles.GrantsSecond}>
                    <div className={styles.GrantsSecondContainer} >
                        <div className={styles.GrantsSecondText}>
                            <h2>What is it?</h2>
                            <p>Get paid to develop a Licensing shoot, build an extensive Licensing portfolio, and grow as a photographer. With 500px Commercial Grants, you have the opportunity to redefine and shift how brands advertise, while providing commercial content that represents a unique and diverse experience.</p>
                            <a href="">Check out the latest Grant</a>
                        </div>
                        <div className={styles.GrantsSecondImage}>
                            <img src={secondImage} alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.GrantsThree}>
                    <div className={styles.GrantsThreeContainer}>
                        <div className={styles.GrantsThreeContainerTop}>
                            <h2>How it Works</h2>
                        </div>
                        <div className={styles.GrantsThreeContainerMiddle}>
                            <div className={styles.GrantsThreeContainerLeft}>
                                <h2>Phase 1: Pitch your shoot</h2>
                                <h3> <CiUser />1. Log in or create a 500px Profile</h3>
                                <h3><BsFiletypeTxt />2. See what’s open, review the brief, check the inspo</h3>
                                <h3><CiImageOn />3. Submit photo(s) to the Quest for consideration</h3>
                                <h3><CiMail />4. Selected photographers will be emailed</h3>

                            </div>
                            <div className={styles.GrantsThreeContainerRight}>
                                <h2>Phase 2: Develop your shoot</h2>
                                <h3><AiOutlineHeart />1. Collaborate with the 500px Content Team</h3>
                                <h3><GiFireFlower />2. See concept through to reality</h3>
                                <h3><CiImageOn />3. Submit your shoot to 500px for <a href="/licensing">Licensing</a></h3>
                                <h3><GiWantedReward />4. Receive your Grant</h3>
                            </div>
                        </div>
                        <div className={styles.GrantsThreeContainerBottom}>
                            <a href="">See what's open</a>
                        </div>
                    </div>
                </div>
                <div className={styles.GrantsFour}>
                    <div className={styles.GrantsFourContainer}>
                        <h2>What we've done</h2>
                        <ul className={styles.styky}>
                            <li><a href="#Breaking" style={{ borderRight: "2px solid #2C3D63" }}>Breaking the Mold</a></li>
                            <li><a href="#ShowUs" style={{ borderRight: "2px solid #2C3D63" }}>Project #ShowUs</a></li>
                            <li><a href="#Reimagining " style={{ borderRight: "2px solid #2C3D63" }}>Reimagining Mental Health</a></li>
                            <li><a href="" style={{ borderRight: "2px solid #2C3D63" }}>Intersectional Diversity</a></li>
                            <li><a href="">Life Online</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.GrantsFive} id='Breaking'>
                    <div className={styles.GrantsFiveContainer}>
                        <div className={styles.GrantsFiveContainerTop}>
                            <h2>Breaking the Mold</h2>
                        </div>
                        <div className={styles.GrantsFiveContainerMiddle}>
                            <div className={styles.GrantsFiveContainerMiddleLeft}>
                                <div className={styles.GrantsFiveContainerMiddleLeftTop}>
                                    <h3>Representation in commercial photography is a necessary component to not only drive impactful change but to lend an inspiring voice for those seeking to identify with something more. Here, we celebrate diversity and encompass a broad spectrum of individual expression.</h3>
                                    <div className={styles.grantsFiveBtn}>
                                        <a style={{ color: "#FFE8DC" }} href="">Learn more</a>
                                        <a style={{ backgroundColor: "transparent" }} href="">See the full Collection</a>
                                    </div>
                                </div>
                                <div className={styles.GrantsFiveContainerMiddleLeftBottom}>
                                    <img src={five1} alt="" />
                                </div>
                            </div>
                            <div className={styles.GrantsFiveContainerMiddleRight}>
                                <img src={five2} alt="" />
                            </div>
                        </div>
                        <div className={styles.GrantsFiveContainerBottom}>
                            <div className={styles.GrantsFiveContainerBottomLeft}>
                                <img src={five3} alt="" />
                            </div>
                            <div className={styles.GrantsFiveContainerBottomRight}>
                                <img src={five4} alt="" />
                                <img src={five5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.GrantsSeven} id='ShowUs'>
                    <div className={styles.GrantsSevenContainer}>
                        <div className={styles.GrantsSevenContainerTop}>
                            <h2>Project #ShowUs</h2>
                        </div>
                        <div className={styles.GrantsSevenContainerMiddle}>
                            <div className={styles.GrantsSevenContainerMiddleLeft}>
                                <div className={styles.GrantsSevenContainerMiddleLeftTop}>
                                    <h3>The second year of the Getty Images 'Project #ShowUs' collection saw 500px Contributors build on themes that confront and challenge traditional depictions of women and non-binary individuals in advertising, contributing over 2,000 photos of authentic people from around the world.</h3>
                                    <div className={styles.grantsSevenBtn}>
                                        <a style={{ color: "#027A95" }} href="">Learn more</a>
                                        <a style={{ backgroundColor: "transparent" }} href="">See the full Collection</a>
                                    </div>
                                </div>
                                <div className={styles.GrantsSevenContainerMiddleLeftBottom}>
                                    <img src={seven1} alt="" />
                                    <img src={seven9} alt="" />
                                </div>
                            </div>
                            <div className={styles.GrantsSevenContainerMiddleRight}>
                                <img src={seven2} alt="" />
                                <img src={seven8} alt="" />
                            </div>
                        </div>
                        <div className={styles.GrantsSevenContainerBottom}>
                            <div className={styles.GrantsSevenContainerBottomLeft}>
                                <img src={seven3} alt="" />
                            </div>
                            <div className={styles.GrantsSevenContainerBottomRight}>
                                <img src={seven4} alt="" />
                                <img src={seven5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.GrantsEight} id='Reimagining '>
                    <div className={styles.GrantsEightContainer}>
                        <div className={styles.GrantsEightContainerTop}>
                            <h6>Reimagining Mental Health</h6>
                        </div>
                        <div className={styles.GrantsEightContainerMiddle}>
                            <div className={styles.GrantsEightContainerMiddleLeft}>
                                <div className={styles.GrantsEightContainerMiddleLeftTop}>
                                    <h3>Representation in commercial photography is a necessary component to not only drive impactful change but to lend an inspiring voice for those seeking to identify with something more. Here, we celebrate diversity and encompass a broad spectrum of individual expression.</h3>
                                    <div className={styles.grantsEightBtn}>
                                        <a style={{ color: "#FFE8DC" }} href="">Learn more</a>
                                        <a style={{ backgroundColor: "transparent" }} href="">See the full Collection</a>
                                    </div>
                                </div>
                                <div className={styles.GrantsEightContainerMiddleLeftBottom}>
                                    <img src={eight5} alt="" />
                                    <img src={eight8} alt="" />
                                </div>
                            </div>
                            <div className={styles.GrantsEightContainerMiddleRight}>
                                <img src={eight2} alt="" />
                                <img src={eight1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.GrantsNine} id='Reimagining '>
                    <div className={styles.GrantsNineContainer}>
                        <div className={styles.GrantsNineContainerTop}>
                            <h2>Intersectional Diversity</h2>
                        </div>
                        <div className={styles.GrantsNineContainerMiddle}>
                            <div className={styles.GrantsNineContainerMiddleLeft}>
                                <div className={styles.GrantsNineContainerMiddleLeftTop}>
                                    <h3>Accurate and inclusive representation in advertising campaigns helps brands truly connect with their consumers. Here we focus on stories that promote diversity and inclusivity across a variety of themes and concepts ranging from age, disability, people of color, sexual identity, and body type.</h3>
                                    <div className={styles.grantsNineBtn}>
                                        <a style={{ color: "#DDFFF2" }} href="">Learn more</a>
                                        <a style={{ backgroundColor: "transparent" }} href="">See the full Collection</a>
                                    </div>
                                </div>
                                <div className={styles.GrantsNineContainerMiddleLeftBottom}>
                                    <img src={nine6} alt="" />
                                </div>
                            </div>
                            <div className={styles.GrantsNineContainerMiddleRight}>
                                <img src={nine5} alt="" />
                            </div>

                        </div>
                        <div className={styles.GrantsNineContainerBottom}>
                            <div className={styles.GrantsNineContainerBottomLeft}>
                                <img src={nine3} alt="" />
                            </div>
                            <div className={styles.GrantsNineContainerBottomRight}>
                                <img src={nine1} alt="" />
                                <img src={nine2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.GrantsTen} id='Reimagining '>
                    <div className={styles.GrantsTenContainer}>
                        <div className={styles.GrantsTenContainerTop}>
                            <h2>Life Online</h2>
                        </div>
                        <div className={styles.GrantsTenContainerMiddle}>
                            <div className={styles.GrantsTenContainerMiddleLeft}>
                                <div className={styles.GrantsTenContainerMiddleLeftTop}>
                                    <h3>A look at the way technology connects people around the world. These stories illustrate what it means to incorporate technology into our daily lives, routines, well being, and relationships.</h3>
                                    <div className={styles.grantsTenBtn}>
                                        <a style={{ color: "#FFDD66" }} href="">Learn more</a>
                                        <a style={{ backgroundColor: "transparent" }} href="">See the full Collection</a>
                                    </div>
                                </div>
                                <div className={styles.GrantsTenContainerMiddleLeftBottom}>
                                    <img src={teen6} alt="" />
                                    <img src={ten8} alt="" />
                                </div>
                            </div>
                            <div className={styles.GrantsTenContainerMiddleRight}>
                                <img src={ten5} alt="" />
                                <img src={teen2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.AboutEnd}>
                    <div className={styles.AboutEndContainer}>
                        <LuCrown style={{fontSize:"40px"}}/>
                        <h2>About 500px Licensing</h2>
                        <p>Sell your photos, keep your copyright, and get your photography the attention it deserves. Submit your photography to 500px Licensing in just a few clicks. Once your photos are approved for our collection, you can earn up to 60% royalties on your photos that are licensed exclusively through 500px.</p>
                        <a href="/licensing" target='blank'>Learn more</a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Grants
