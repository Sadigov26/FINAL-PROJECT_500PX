import React from 'react'
import styles from './Licensing.module.scss'

const Licensing = () => {
    return (
        <div>
            <div className={styles.Licensing}>
                <div className={styles.LicensingContainer}>
                    <div className={styles.LicensingContainerText}>
                        <span className={styles.bigTitle}>Get paid for your photos with 500px Licensing</span>
                        <span className={styles.desc}>Sell your photos, keep your copyright, and get your photography the attention it deserves.</span>
                        <a href="#">Get started</a>
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

export default Licensing
