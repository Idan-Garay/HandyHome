import React from "react";
import LoginPageButton from "./LoginPageButton";
import LoginPageForgotPassword from "./LoginPageForgotPassword";
import LoginPageInput from "./LoginPageInput";
import LoginPageInputPassword from "./LoginPageInputPassword";
import LoginPageFooter from "./LoginPageFooter";

function LoginPageForm() {
  return (
    <div class="w-full max-w-xl">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <LoginPageInput/>
        <LoginPageInputPassword/>
        <div class="flex items-center justify-between">
          <LoginPageButton/>
          <LoginPageForgotPassword/>
        </div>
      </form>
      <LoginPageFooter/>
    </div>
  );
}

export default LoginPageForm;
