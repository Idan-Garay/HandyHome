import React from "react";
import RequestByEmployer from "../components/Order/RequestByEmployer";
import IncomingRequest from "../components/Order/IncomingRequest";

const Request = ({ userType = 1 }) => {
  return userType === 1 ? <IncomingRequest /> : <RequestByEmployer />;
};

export default Request;
