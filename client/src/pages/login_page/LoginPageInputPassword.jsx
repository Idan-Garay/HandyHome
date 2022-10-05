import React from "react";

const LoginPageInputPassword = () => {
  return (
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input
        class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="******************"
      />
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
  );
};

export default LoginPageInputPassword;
