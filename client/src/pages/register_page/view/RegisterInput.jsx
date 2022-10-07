import React from "react";

function RegisterInput() {
  return (
    <div className="">
      <label
        className="block text-md text-gray-700 font-bold mb-2"
        htmlFor="username"
      >
        Username
      </label>
      <input
        type="text"
        id="username"
        placeholder="Type here"
        className="input input-bordered input-primary w-full max-w-xs"
      />
    </div>
  );
}

export default RegisterInput;
