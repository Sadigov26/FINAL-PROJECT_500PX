import React from 'react'
import styles from './PortfolioHomeTwo.module.scss'
import imgPortfolioTwo from '../../about/loh_quests@2x.c67b91f0.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

const PortfolioHomeTwo = () => {
    return (
        <div>
            <div className={styles.PortfolioHomeTwo}>
                <FontAwesomeIcon icon={faRocket} className={styles.portofiloIconTwo} />
                <h3>Quests</h3>
            </div>
            <div className={styles.photographersHomeTwo}>
                <div className={styles.photographersHomeContainerTwo}>
                    <div className={styles.photographersHomeContainerTwoDesk}>
                        <FontAwesomeIcon icon={faTrophy} style={{fontSize:"60px"}} />
                        <h3>Take photos. Win prizes.</h3>
                        <p>Quests are creative photo challenges that encourage you to test your skills and submit your best work for a chance to win exciting prizes. We launch new Quests with unique themes every week so there is always something for everyone!</p>
                        <button>View Quests</button>
                    </div>
                    <div className={styles.ImagePhTwo}>
                        <img src={imgPortfolioTwo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioHomeTwo
