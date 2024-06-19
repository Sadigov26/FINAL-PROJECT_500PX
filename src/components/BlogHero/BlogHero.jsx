import React from 'react'
import styles from './BlogHero.module.scss'
import { FaFacebookF, FaPinterestP } from 'react-icons/fa6'
import { BsTwitterX } from 'react-icons/bs'

const BlogHero = () => {
    return (
        <div>
            <div className={styles.BlogHero}>
                <div className={styles.BlogHeroContainer}>
                    <div className={styles.BlogHeroText}>
                        <h3>FEATURED ARTICLE</h3>
                        <h2>Presenting the pinnacle of <br /> lighting Quest with iFootage</h2>
                        <h4>Published by <span>500px Blog</span> • 2 months ago</h4>
                        <p>Mastering the ability to control light is invaluable, and together with iFootage Gear, we’re bringing you the opportunity to showcase your skills!</p>
                        <div className={styles.BlogHeroTextSocial}>
                            <a target='blank' href="http://www.facebook.com/sharer/sharer.php?u=https://iso.500px.com/presenting-the-pinnacle-of-lighting-quest-with-ifootage/"><FaFacebookF className={styles.blogSocialF} /></a>
                            <a target='blank' href="https://x.com/?logout=1718633479376"><BsTwitterX className={styles.blogSocialX} /></a>
                            <a target='blank' href="https://www.pinterest.com/pin/create/button/?url=https://iso.500px.com/presenting-the-pinnacle-of-lighting-quest-with-ifootage/&media=https://iso.500px.com/wp-content/uploads/2024/04/ifootage-post-hero.jpg&description=Presenting+the+pinnacle+of+lighting+Quest+with+iFootage"><FaPinterestP className={styles.blogSocialP} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogHero
