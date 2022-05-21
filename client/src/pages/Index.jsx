import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./profile/Profile";
import Register from "./Register";
import Login from "./Login";
import Discovery from "./Discovery";
import RequestByEmployer from "../components/Order/RequestByEmployer";
import RegisterPrompt from "../components/Prompts/RegisterPrompt";
import ProtectedRoute from "../components/ProtectedRoute";
import ProfileEdit from "../components/Profile/ProfileEdit";
import ProfileValidation from "../components/Profile/ProfileValidation";
import Admin from "./admin/Admin";
import History from "./History";
import EditProfile from "./profile/EditProfile";
import AddMember from "../components/Profile/ProfileContents/AddMember";
import OtherProfile from "./profile/OtherProfile";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Admin />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/profiles/:id" element={<Profile />} />
    </Routes>
  );
};

const CustomerRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Discovery />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route path="/register/success" element={<RegisterPrompt />} />

      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/profiles/:id" element={<OtherProfile />} />
      <Route exact path="/otherProfile" element={<OtherProfile />} />
      <Route exact path="/profiles/:id/history" element={<History />} />
      <Route
        path="/profiles/:id/request"
        element={<ProtectedRoute children={<RequestByEmployer />} />}
      />
      <Route
        path="/profiles/:id/add"
        element={<ProtectedRoute children={<AddMember />} />}
      />
      <Route path="/profilevalidation" element={<ProfileValidation />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const Index = ({ accountType }) => {
  return (
    <>
      {accountType && accountType === 2 ? <AdminRoutes /> : <CustomerRoutes />}
    </>
  );
};

export default Index;