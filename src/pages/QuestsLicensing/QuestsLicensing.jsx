import React from 'react'
import QuestProductsLicensing from '../../components/QuestProducts/QuestProductsLicensing'
import QuestsSlide from '../../components/QuestsSlide/QuestsSlide'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import QuestCategories from '../../components/QuestCategories/QuestCategories'

const QuestsLicensing = () => {
  return (
    <div>
     <Header/>
      <QuestsSlide/>
      <QuestProductsLicensing/>
      <QuestCategories/>
      <Footer/> 
    </div>
  )
}

export default QuestsLicensing
