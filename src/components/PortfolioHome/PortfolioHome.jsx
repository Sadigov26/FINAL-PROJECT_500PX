import React from 'react'
import styles from './PortfolioHome.module.scss'
import imgPortfolio from '../../about/desktop_portfolio.fdf6ee3e.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const PortfolioHome = () => {
    return (
        <div>
            <div className={styles.PortfolioHome}>
                <FontAwesomeIcon icon={faBriefcase} className={styles.portofiloIcon} />
                <h3>Portfolio</h3>
            </div>
            <div className={styles.photographersHome}>
                <div className={styles.photographersHomeContainer}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "15px", alignItems: "center" }}>
                        <h3>Designed and built for photographers</h3>
                        <p>Create your own high-quality website in minutes. Portfolios allows you to share your work externally so you can build your own brand and market yourself as a professional photographer.</p>
                        <button>Get Started</button>
                    </div>
                    <img src={imgPortfolio} alt="" />
                </div>
            </div>
        </div>
    )
}

export default PortfolioHome
