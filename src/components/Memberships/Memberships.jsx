import React from 'react';
import styles from './Memberships.module.scss'; // veya stil dosyanızın yolu

const Memberships = () => {
    const scrollToPlans = () => {
        const plansSection = document.getElementById('compare-plans');
        if (plansSection) {
            plansSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className={styles.Memberships}>
                <div className={styles.MembershipsContainer}>
                    <div className={styles.MembershipsContainerDesk}>
                        <h1>Unlock <span>20% Off</span> & Transform Your Photography</h1>
                        <p>Get unlimited uploads, uncompressed storage, and insights that matter. Elevate your photography and connect with a global audience.</p>
                        <button className={styles.buttonau} onClick={scrollToPlans}>Upgrade now</button>
                    </div>
                </div>
                <svg className={styles.svgwavestop} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 128'>
                    <path className='header-wave' fill='#FFF'
                        d='M0,471 L1440,471 L1440,386.338583 C1331.33333,357.446194 1239,343 1163,343 C821.995497,343 821.995497,463.944882 426,463.944882 C262.447846,463.944882 120.447846,438.076115 0,386.338583 L0,471 Z'
                        transform='translate(0 -343)' />
                </svg>
            </div>
        </div>
    );
}

export default Memberships;
