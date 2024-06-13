import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import AwardWinners from '../pages/AwardWinners/AwardWinners'
import Upgrade from '../pages/Upgrade/Upgrade'
import LicensingDrop from '../pages/LicensingDrop/LicensingDrop'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/awards_winners_2023' element={<AwardWinners />} />
          <Route path='/upgrade' element={<Upgrade />} />
          <Route path='/licensing' element={<LicensingDrop/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router