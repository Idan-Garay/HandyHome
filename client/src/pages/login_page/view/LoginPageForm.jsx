import React from "react";
import LoginPageButton from "./LoginPageButton";
import LoginPageForgotPassword from "./LoginPageForgotPassword";
import LoginPageInput from "./LoginPageInput";
import LoginPageInputPassword from "./LoginPageInputPassword";
import LoginPageFooter from "./LoginPageFooter";

function LoginPageForm() {
  return (
    <>
      <form className=" w-10/12 h-full shadow-md rounded px-16 pt-6 pb-8 mb-4">
        <LoginPageInput />
        <LoginPageInputPassword />
        <div className="text-end mr-2">
          <LoginPageForgotPassword />
        </div>
        <div className="mt-5 flex flex-col items-center justify-between">
          <LoginPageButton />
        </div>
      </form>
      <LoginPageFooter />
    </>
  );
}

export default LoginPageForm;
