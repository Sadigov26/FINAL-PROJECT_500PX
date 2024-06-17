import React from 'react'
import styles from './Hero.module.scss'

const Hero = () => {
    return (
        <div>
            <div className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroContainerText}>
                        <span className={styles.bigTitle}>Discover and share the world`s best photos</span>
                        <span className={styles.desc}>Get inspired with incredible photos from diverse styles and genres around the
                            world. We're not guided by fads—just great photography.</span>
                        <a href="/register">Sign up</a>
                    </div>
                </div>
                <svg className={styles.svgwavestop} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 128'>
                    <path class='header-wave' fill='#FFF'
                        d='M0,471 L1440,471 L1440,386.338583 C1331.33333,357.446194 1239,343 1163,343 C821.995497,343 821.995497,463.944882 426,463.944882 C262.447846,463.944882 120.447846,438.076115 0,386.338583 L0,471 Z'
                        transform='translate(0 -343)' />
                </svg>
            </div>
        </div>
    )
}

export default Hero
