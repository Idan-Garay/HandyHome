import React from "react";

const LoginPageInput = () => {
  return (
    <div className="">
      <div className="mb-4">
        <label
          className="block text-md text-gray-700 font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        {/* <input
        className="shadow appearance-none bg-secondaryColor border h-12 rounded-3xl w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        /> */}
        <input
          id="username"
          type="text"
          placeholder="Username"
          className="input input-bordered input-info w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default LoginPageInput;
