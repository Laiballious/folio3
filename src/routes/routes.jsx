import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from '../pages/websites/login/login';
import Signup from '../pages/websites/signup/signup';
import Home from '../pages/websites/home';
import AdminDashboard from '../pages/admin/adminDashboard';
import '../styles/App.css';
import '../styles/responsive.css'
import Donation from '../pages/donor/donation';
import Success from '../pages/donor/success';
import CampaignPage from "../pages/donor/CampaignPage"
import DonorList from '../pages/admin/donorList';
import ClientList from "../pages/admin/clientList"
import DonorLandingPage from '../pages/donor/DonorLandingPage';
import ViewAll from '../pages/websites/ViewAll';
import ReceiverProfile from '../pages/receiver/ReceiverProfile';
import ReciverDashboard from '../pages/receiver/receiverDashboard';
import UploadCampaign from '../pages/receiver/UploadCampaign';
import ForgetPass from '../pages/websites/login/ForgetScreens/ForgetPass';
import OTP from '../pages/websites/login/ForgetScreens/OTP';
import NewPass from '../pages/websites/login/ForgetScreens/NewPass';
import Updated from '../pages/websites/login/ForgetScreens/Updated';
import Page404 from '../pages/page404/Page404';
import MyCampaigns from '../pages/receiver/myCampaigns';
import DonorProfile from '../pages/donor/DonorProfile';
import AdminProfile from '../pages/admin/AdminProfile';
import MyDonations from '../pages/donor/myDonations';
import Profit from '../pages/admin/Profit';
import { PublicRoute, PrivateRoute } from './authRoutes';
const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route element={<PublicRoute />}> */}
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="forget-pass" element={<ForgetPass />} />
      <Route path="OTP" element={<OTP />} />
      <Route path="resetPassword" element={<NewPass />} />
      <Route path="updated" element={<Updated />} />
      <Route path="page404" element={<Page404 />} />

      {/* </Route> */}
      {/* <Route element={<PrivateRoute />}> */}
      <Route path="admin" element={<AdminDashboard />} />
      <Route path="admin/donor-list" element={<DonorList />} />
      <Route path="admin/client-list" element={<ClientList />} />
      <Route path="admin/profit" element={<Profit />} />
      <Route path="admin/profile" element={<AdminProfile />} />

      <Route path="upload-campaign" element={<UploadCampaign />} />
      <Route path="campaign-details/:campaignId" element={<CampaignPage />} />
      <Route path="all-campaigns" element={<ViewAll />} />
      <Route path="d-landing" element={<DonorLandingPage />} />
      <Route path="d-profile" element={<DonorProfile />} />
      <Route path="d-my-donation" element={<MyDonations />} />
      <Route path="donation/:campaignId" element={<Donation />} />
      <Route path="success/:campaignId" element={<Success />} />

      <Route path="receiver" element={<ReciverDashboard />} />
      <Route path="receiver/myCampaigns" element={<MyCampaigns />} />
      <Route path="receiver/profile" element={<ReceiverProfile />} />

      {/* </Route> */}
    </Routes>
  )
}
export default AppRoutes;