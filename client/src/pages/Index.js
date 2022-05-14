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

      <Route exact path="/profiles/:id" element={<Profile />} />
      <Route exact path="/profiles/:id/history" element={<History />} />
      <Route
        path="/profiles/:id/request"
        element={<ProtectedRoute children={<RequestByEmployer />} />}
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
