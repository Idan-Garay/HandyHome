import React from "react";

const LoginPageInputPassword = () => {
  return (
    <div className="">
      <label className="block text-gray-700 text-md font-bold mb-2" for="password">
        Password
      </label>
      <input
      className="shadow appearance-none bg-secondaryColor border h-12  rounded-3xl w-full py-2 px-3 text-white mb-1 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="**********"
      />
      {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
  );
};

export default LoginPageInputPassword;
