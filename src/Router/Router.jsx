import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import AwardWinners from '../pages/AwardWinners/AwardWinners'
import Upgrade from '../pages/Upgrade/Upgrade'
import LicensingDrop from '../pages/LicensingDrop/LicensingDrop'
import Quests from '../pages/Quests/Quests'
import Lisans from '../pages/Lisans/Lisans'
import StockPhotoLicensing from '../pages/StockPhotoLicensing/StockPhotoLicensing'
import BecomeAContributor from '../pages/BecomeAContributor/BecomeAContributor'
import SubmissionRequirements from '../pages/SubmissionRequirements/SubmissionRequirements'
import Releases from '../pages/Releases/Releases'
import ChoosingKeywords from '../pages/ChoosingKeywords/ChoosingKeywords'
import ContentTypes from '../pages/ContentTypes/ContentTypes'
import CommercialGrants from '../pages/CommercialGrants/CommercialGrants'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/awards_winners_2023' element={<AwardWinners />} />
          <Route path='/upgrade' element={<Upgrade />} />
          <Route path='/licensing' element={<LicensingDrop />} />
          <Route path='/quests' element={<Quests />} />
          <Route path='/licensing/licensing' element={<StockPhotoLicensing />} />
          <Route path='/licensing/contribute' element={<BecomeAContributor />} />
          <Route path='/licensing/requirements' element={<SubmissionRequirements />} />
          <Route path='/licensing/requirements' element={<SubmissionRequirements />} />
          <Route path='/licensing/releases' element={<Releases />} />
          <Route path='/licensing/keywording' element={<ChoosingKeywords />} />
          <Route path='/licensing/content' element={<ContentTypes />} />
          <Route path='/licensing/distribution' element={<Lisans />} />
          <Route path='/grants' element={<CommercialGrants />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router