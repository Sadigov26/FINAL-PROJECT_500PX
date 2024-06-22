import React from 'react'
import styles from './CommunityHome.module.scss'

const CommunityHome = () => {
    return (
        <div>
            <div className={styles.CommunityHome}>
                <div className={styles.CommunityHomeContainer}>
                    <h2>Join our community today</h2>
                    <p>Do you love photography? Want to constantly stay inspired and be surrounded by millions of like-minded creators? Then sign-up today and get rewarded for your love of photography.</p>
                    <button>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default CommunityHome
