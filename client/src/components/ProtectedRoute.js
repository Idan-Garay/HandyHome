import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AccountContext } from "../App";

const ProtectedRoute = ({ children }) => {
  const { accountState } = useContext(AccountContext);

  if (!accountState.isAuthorized) return <Navigate to="/" replace />;
  return children;
};

export default ProtectedRoute;
