import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Login";
const Admin = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Admin;
