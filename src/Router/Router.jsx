import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdminPanel from '../pages/AdminPanel/AdminPanel';
import Home from '../pages/Home/Home';
import AwardWinners from '../pages/AwardWinners/AwardWinners';
import Upgrade from '../pages/Upgrade/Upgrade';
import LicensingDrop from '../pages/LicensingDrop/LicensingDrop';
import Quests from '../pages/Quests/Quests';
import Lisans from '../pages/Lisans/Lisans';
import StockPhotoLicensing from '../pages/StockPhotoLicensing/StockPhotoLicensing';
import BecomeAContributor from '../pages/BecomeAContributor/BecomeAContributor';
import SubmissionRequirements from '../pages/SubmissionRequirements/SubmissionRequirements';
import Releases from '../pages/Releases/Releases';
import ChoosingKeywords from '../pages/ChoosingKeywords/ChoosingKeywords';
import ContentTypes from '../pages/ContentTypes/ContentTypes';
import CommercialGrants from '../pages/CommercialGrants/CommercialGrants';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Recover from '../pages/Recover/Recover';
import Signup from '../pages/Signup/Signup';
import Search from '../pages/Search/Search';
import Discover from '../pages/Discover/Discover';
import QuestsLicensing from '../pages/QuestsLicensing/QuestsLicensing';
import QuestProductsArchive from '../pages/QuestProductsArchive/QuestProductsArchive';
import CategoryPhotos from '../pages/CategoryPhotos/CategoryPhotos';
import Blog from '../pages/Blog/Blog';
import DiscoverFeed from '../pages/Discover/DiscoverFeed';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import LikePhotos from '../pages/LikePhotos/LikePhotos';

const AppRouter = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const isAdmin = userInfo && userInfo.email === 'admin500px@gmail.com';

  return (
    <Router>
      <Routes>
        <Route path="/" element={userInfo ? <Navigate to="/discover" /> : <Home />} />
        {isAdmin ? (
          <Route path="/profile" element={<AdminPanel />} />
        ) : (
          <Route path="/profile" element={<ProfilePage />} />
        )}
        <Route path="/awards_winners_2023" element={<AwardWinners />} />
        <Route path="/upgrade" element={<Upgrade />} />
        <Route path="/licensing" element={<LicensingDrop />} />
        <Route path="/quests" element={<Quests />} />
        <Route path="/quests/licensing" element={<QuestsLicensing />} />
        <Route path="/quests/archive" element={<QuestProductsArchive />} />
        <Route path="/licensing/licensing" element={<StockPhotoLicensing />} />
        <Route path="/licensing/contribute" element={<BecomeAContributor />} />
        <Route path="/licensing/requirements" element={<SubmissionRequirements />} />
        <Route path="/licensing/releases" element={<Releases />} />
        <Route path="/licensing/keywording" element={<ChoosingKeywords />} />
        <Route path="/licensing/content" element={<ContentTypes />} />
        <Route path="/licensing/distribution" element={<Lisans />} />
        <Route path="/grants" element={<CommercialGrants />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover" element={<Recover />} />
        <Route path="/search" element={<Search />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/discover/feed" element={<DiscoverFeed />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/like" element={!userInfo ? <Navigate to="/signup" /> : <LikePhotos />} />
        <Route path="/category/:categoryName" element={<CategoryPhotos />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
