import React from 'react'
import styles from './QuestCategories.module.scss'

const QuestCategories = () => {
    return (
        <div>
            <div className={styles.QuestCategories}>
                <div className={styles.QuestCategoriesContainerTop}>
                </div>
                <div className={styles.QuestCategoriesContainerBottom}>
                    <h1>For brands</h1>
                    <p>Reach a global audience of world-class photographers and photo enthusiasts when you sponsor a Quest.  <a href="mailto:sales@500px.com" target="blank" ><span>Contact us</span></a> for more information!</p>
                </div>
            </div>
        </div>
    )
}

export default QuestCategories
