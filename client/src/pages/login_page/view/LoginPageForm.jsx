import React from "react";
import LoginPageButton from "./LoginPageButton";
import LoginPageForgotPassword from "./LoginPageForgotPassword";
import LoginPageInput from "./LoginPageInput";
import LoginPageInputPassword from "./LoginPageInputPassword";
import LoginPageFooter from "./LoginPageFooter";

function LoginPageForm() {
  return (
    <>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <LoginPageInput />
        <LoginPageInputPassword />
        <div className="flex items-center justify-between">
          <LoginPageButton />
          <LoginPageForgotPassword />
        </div>
      </form>
      <LoginPageFooter />
    </>
  );
}

export default LoginPageForm;
