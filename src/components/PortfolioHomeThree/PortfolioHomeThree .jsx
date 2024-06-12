import React from 'react'
import styles from './PortfolioHomeThree.module.scss'
import imgPortfolioThree from '../../about/licensing_desktop@2x.e4012c17.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';

const PortfolioHomeThree = () => {
    return (
        <div>
            <div className={styles.PortfolioHomeThree}>
                <FontAwesomeIcon icon={faCrown} className={styles.portofiloIconThree} />
                <h3>Licensing</h3>
            </div>
            <div className={styles.photographersHomeThree}>
                <div className={styles.photographersHomeContainerThree}>
                    <div className={styles.ImagePhThree}>
                        <img src={imgPortfolioThree} alt="" />
                    </div>
                    <div className={styles.photographersHomeContainerThreeDesk}>
                        <FontAwesomeIcon icon={faPiggyBank} style={{ fontSize: "60px" }} />
                        <h3>Get paid for your photos</h3>
                        <p>Don’t let your photos sit there gathering dust, like on other platforms. Gain exposure and get paid for your work with 500px Licensing. Paid members earn up to 100% royalties and free members earn up to 60% when you license your photos exclusively with 500px.</p>
                        <button>Tell me more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioHomeThree 
