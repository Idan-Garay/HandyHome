import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./Profile";
import Register from "./Register";
import Login from "./Login";
import Discovery from "./Discovery";
import RequestByEmployer from "../components/Order/RequestByEmployer";
import RegisterPrompt from "../components/Prompts/RegisterPrompt";
import ProtectedRoute from "../components/ProtectedRoute";

const Index = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Discovery />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route path="/register/success" element={<RegisterPrompt />} />
      <Route
        exact
        path="/profile/:id"
        element={<ProtectedRoute children={<Profile />} />}
      />
      <Route
        path="/profile/:id/request"
        element={<ProtectedRoute children={<RequestByEmployer />} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Index;
