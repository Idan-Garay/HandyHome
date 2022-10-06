import React from "react";
import LoginPageForm from "./LoginPageForm";
import "./LoginViewStyle.css";

const LoginPage = () => {
  return (
    <div className="w-screen h-screen">
      <img className="fixed hidden lg:block inset-0" style={{"zIndex": -1}} src="/assets/wave.png" />
      <div className=" w-screen h-screen flex justify-center items-center lg:grid lg:grid-cols-2">
        <img className="hidden lg:block" src="/assets/undraw_login.svg" />
        <div className="w-full max-w-xl flex flex-col justify-center items-center">
          <LoginPageForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
