import React from 'react'
import styles from './MembershipsPlans.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import dataImage from '../../about/insights.6f0d4093.png';
import dataImage2 from '../../about/upload.7000961e.png';
import { GrUpgrade } from "react-icons/gr";
import dataImage3 from '../../about/create_portfolio.4c021d93.png';
import dataImage4 from '../../about/customize_profile.61e81e3c.png';
import dataImage5 from '../../about/resume.3b114563.jpg';
import dataImage6 from '../../about/skills.c63dbfbc.png';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const MembershipsPlans = () => {
    return (
        <div>
            <div className={styles.MembershipsPlans}>
                <div className={styles.MembershipsPlansContainer}>
                    <div className={styles.MembershipsPlansContainerTitle}>
                        <h1>What you get</h1>
                    </div>
                    <div className={styles.MembershipsPlansContainerData}>
                        <div className={styles.MembershipsPlansDesk}>
                            <FontAwesomeIcon style={{ fontSize: "45px", marginBottom: "13px" }} icon={faChartColumn} />
                            <h2>Get data insights to inform your work</h2>
                            <p>Learn where your photo views are coming from, which of your photos get the most likes and comments, how people are finding your work, and more.</p>
                            <h3>Included with</h3>
                            <div className={styles.MemberBtns}>
                                <button className={styles.firstoftype}> <FontAwesomeIcon icon={faGamepad} />Awesome</button>
                                <button><FontAwesomeIcon icon={faGem} />Pro</button>
                            </div>
                        </div>
                        <div className={styles.MembershipsPlansImage}>
                            <img src={dataImage} alt="" />
                        </div>
                    </div>
                    <div className={styles.MembershipsPlansContainerData}>
                        <div className={styles.MembershipsPlansImage}>
                            <img src={dataImage2} alt="" />
                        </div>
                        <div className={styles.MembershipsPlansDesk}>
                            <GrUpgrade style={{ fontSize: "45px", marginBottom: "13px" }} />
                            <h2>Upload as many photos as you want</h2>
                            <p>Want to share a large series or test multiple versions of your photos? With unlimited uploads, you can add many images as you’d like—the only limit is your creativity.</p>
                            <h3>Included with</h3>
                            <div className={styles.MemberBtns}>
                                <button className={styles.firstoftype}> <FontAwesomeIcon icon={faGamepad} />Awesome</button>
                                <button><FontAwesomeIcon icon={faGem} />Pro</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.MembershipsPlansContainerData}>
                        <div className={styles.MembershipsPlansDesk}>
                            <FontAwesomeIcon style={{ fontSize: "45px", marginBottom: "13px" }} icon={faBriefcase} />
                            <h2>Build your brand with Portfolios</h2>
                            <p>Create your own high-quality website in minutes. Choose from photography focused designs that are optimized for mobile out of the box and dark mode compatible, easily connect to Google Analytics to track your success, plus customize your domain to increase your online presence.</p>
                            <h3>Included with</h3>
                            <div className={styles.MemberBtns}>
                                <button><FontAwesomeIcon icon={faGem} />Pro</button>
                            </div>
                        </div>
                        <div className={styles.MembershipsPlansImage}>
                            <img src={dataImage3} alt="" />
                        </div>
                    </div>
                    <div className={styles.MembershipsPlansContainerData}>
                        <div className={styles.MembershipsPlansImage}>
                            <img src={dataImage4} alt="" />
                        </div>
                        <div className={styles.MembershipsPlansDesk}>
                            <FontAwesomeIcon style={{ fontSize: "45px", marginBottom: "13px" }} icon={faFilePen} />
                            <h2>Customize your Profile</h2>
                            <p>Rearrange, hide, and add tabs to make your Profile page unique to you. Feature your best series, work samples, or favorite photos by highlighting a Gallery on a separate tab.</p>
                            <h3>Included with</h3>
                            <div className={styles.MemberBtns}>
                                <button><FontAwesomeIcon icon={faGem} />Pro</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.MembershipsPlansContainerData}>
                        <div className={styles.MembershipsPlansDesk}>
                            <FontAwesomeIcon style={{ fontSize: "45px", marginBottom: "13px" }} icon={faFilePen} />
                            <h2>Share your Resume with potential clients</h2>
                            <p>Let everyone know why they should hire you. List your services, skills and specialties. Add your Resume on your Profile and on the Directory for potential clients to see.</p>
                            <h3>Included with</h3>
                            <div className={styles.MemberBtns}>
                                <button><FontAwesomeIcon icon={faGem} />Pro</button>
                            </div>
                        </div>
                        <div className={styles.MembershipsPlansImage}>
                            <img src={dataImage5} alt="" />
                        </div>
                    </div>
                    <div className={styles.MembershipsPlansContainerData}>
                        <div className={styles.MembershipsPlansImage}>
                            <img src={dataImage6} alt="" />
                        </div>
                        <div className={styles.MembershipsPlansDesk}>
                            <FontAwesomeIcon style={{ fontSize: "45px", marginBottom: "13px" }} icon={faMagnifyingGlass} />
                            <h2>Get discovered and hired</h2>
                            <p>List yourself as available for hire and show in search results when you create a Resume. Get discovered by clients looking to hire for photography projects in your area and kickstart your career.</p>
                            <h3>Included with</h3>
                            <div className={styles.MemberBtns}>
                                <button><FontAwesomeIcon icon={faGem} />Pro</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MembershipsPlans