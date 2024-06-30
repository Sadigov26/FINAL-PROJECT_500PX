import React from 'react'
import QuestsSlide from '../../components/QuestsSlide/QuestsSlide'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import QuestCategories from '../../components/QuestCategories/QuestCategories'
import QuestProductsArchive from '../../components/QuestProducts/QuestProductsArchive'

const QuestsLicensing = () => {
  return (
    <div>
     <Header/>
      <QuestsSlide/>
      <QuestProductsArchive/>
      <QuestCategories/>
      <Footer/> 
    </div>
  )
}

export default QuestsLicensing
