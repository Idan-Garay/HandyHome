import React from "react";

function RegisterPageInputEmail({ labelName }) {
  return (
    <div>
      <label
        className="block text-md text-gray-700 font-bold mb-2"
        htmlFor={labelName}
      >
        {labelName}
      </label>
      <input
        type="email"
        id={labelName}
        placeholder="Type here"
        className="input input-bordered input-primary w-full max-w-xs"
      />
    </div>
  );
}

export default RegisterPageInputEmail;
