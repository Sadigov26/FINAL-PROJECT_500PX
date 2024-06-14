import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import QuestsSlide from '../../components/QuestsSlide/QuestsSlide'
import QuestCategories from '../../components/QuestCategories/QuestCategories'

const Quests = () => {
  return (
    <div>
      <Header/>
      <QuestsSlide/>
      <QuestCategories/>
      <Footer/>
    </div>
  )
}

export default Quests
