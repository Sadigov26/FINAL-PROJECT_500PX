import React from 'react'
import styles from './Banner.module.scss'
import img1 from '../../about/editors1@3x.e0b9b07f.png'
import img2 from '../../about/editors2@3x.fc1a8fcc.png'
import img3 from '../../about/editors3@3x.0e716ea7.png'
import img4 from '../../about/editors4@3x.0a146aef.png'
import img5 from '../../about/editors5@3x.55520542.png'
import img6 from '../../about/editors6@3x.152133df.png'
import img7 from '../../about/editors7@3x.7a76c89b.png'
import img8 from '../../about/editors8@3x.1d22d3c1.png'

const Banner = () => {
    return (
        <div>
            <div className={styles.Banner}>
                <div className={styles.BannerContainer}>
                    <div className={styles.BannerContainerTop}>
                        <h2>The best of the best.</h2>
                        <p>Our editors are always on the lookout for jaw dropping content for you to discover and stay inspired. Check back weekly to see what’s new.</p>
                        <button>View Editors' Choice</button>
                    </div>
                    <div className={styles.BannerContainerBottom}>
                        <div className={styles.BannerContainerBottomImg}>
                            <div className={styles.imageBanner}>
                                <img src={img1} alt="" />
                                <p className={styles.BannerImageDrop}>Photo by Hayden Scott</p>
                            </div>
                            <div className={styles.imageBannerTwo}>
                                <img src={img2} alt="" />
                                <p className={styles.BannerImageDrop}>Photo by Hayden Scott</p>
                            </div>
                            <div className={styles.imageBanner}>
                                <img src={img3} alt="" />
                                <p className={styles.BannerImageDrop}>Photo by Hayden Scott</p>
                            </div>
                            <div className={styles.imageBannerTwo}>
                                <img src={img4} alt="" />
                                <p className={styles.BannerImageDrop}>Photo by Hayden Scott</p>
                            </div>

                            <div className={styles.imageBannerTwo}>
                                <img src={img5} alt="" />
                                <p className={styles.BannerImageDrop}>Photo by Hayden Scott</p>
                            </div>
                            <div className={styles.imageBannerTwo}>
                                <img src={img6} alt="" />
                                <p className={styles.BannerImageDrop}>Photo by Hayden Scott</p>
                            </div>
                            <div className={styles.imageBanner}>
                                <img src={img7} alt="" />
                                <p className={styles.BannerImageDrop}>Photo by Hayden Scott</p>
                            </div>
                            <div className={styles.imageBanner}>
                                <img src={img8} alt="" />
                                <p className={styles.BannerImageDrop}>Photo by Hayden Scott</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
