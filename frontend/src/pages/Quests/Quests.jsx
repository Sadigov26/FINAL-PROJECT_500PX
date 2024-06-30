import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import QuestsSlide from '../../components/QuestsSlide/QuestsSlide'
import QuestCategories from '../../components/QuestCategories/QuestCategories'
import QuestProducts from '../../components/QuestProducts/QuestProducts'

const Quests = () => {
  return (
    <div>
      <Header/>
      <QuestsSlide/>
      <QuestProducts/>
      <QuestCategories/>
      <Footer/>
    </div>
  )
}

export default Quests
