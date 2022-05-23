import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./profile/Profile";
import Register from "./Register";
import Login from "./Login";
import Discovery from "./Discovery";
import RequestByEmployer from "../components/Order/RequestByEmployer";
import RegisterPrompt from "../components/Prompts/RegisterPrompt";
import ProtectedRoute from "../components/ProtectedRoute";
import ProfileValidation from "../components/Profile/ProfileValidation";
import Admin from "./admin/Admin";
import History from "./History";
import AddMember from "../components/Profile/ProfileContents/Team/AddMember";
import OtherProfile from "./profile/OtherProfile";
import JobCategoryList from "./JobCategoryList";
import CategoryUserList from "./CategoryUserList";
import AdminOrders from "./admin/AdminOrders";
import AdminRequests from "./admin/AdminRequests";
import AdminProfiles from "./admin/AdminProfiles";
import AdminFeedback from "./admin/AdminFeedback";
import AdminOrdersEdit from "../components/Admin/AdminOrdersEdit";
import AdminUserEdit from "../components/Admin/AdminUserEdit";
import AdminProfilesEdit from "../components/Admin/AdminProfilesEdit";
import AdminFeedbackEdit from "../components/Admin/AdminFeedbackEdit";
import AdminPaymentsEdit from "../components/Admin/AdminPaymentsEdit";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Admin />} />
      <Route exact path="/users/edit/:id" element={<AdminUserEdit />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/requests" element={<AdminRequests />} />
      <Route exact path="/requests/payments/edit/:id" element={<AdminPaymentsEdit />} />
      <Route exact path="/profiles" element={<AdminProfiles />} />
      <Route exact path="/profiles/edit/:id" element={<AdminProfilesEdit />} />
      <Route exact path="/feedbacks" element={<AdminFeedback />} />
      <Route exact path="/feedbacks/edit/:id" element={<AdminFeedbackEdit />} />

      {/* <Route exact path="/profiles/:id" element={<Profile />} /> */}
      <Route exact path="/orders" element={<AdminOrders />} />
      <Route exact path="/orders/edit/:id" element={<AdminOrdersEdit />} />
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
        path="/profile/add"
        element={<ProtectedRoute children={<AddMember />} />}
      />
      <Route path="/profilevalidation" element={<ProfileValidation />} />
      <Route path="/list" element={<JobCategoryList />} />
      <Route path="/list/:path" element={<CategoryUserList />} />

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
