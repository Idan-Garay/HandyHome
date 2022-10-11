import React from "react";

function IndexSearchInput() {
  return (
    <div class="flex items-center justify-center h-full  px-16 py-4 ">
      <div class="flex bg-white w-full h-full rounded-3xl">
        <input type="search" class="text-secondaryColor bg-white px-4 py-2 w-full rounded-3xl" placeholder="Search..." />

        <button class="flex items-center justify-center px-4 border-l bg-white  rounded-3xl">
          <svg
            class="w-6 h-6 text-primaryColor"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default IndexSearchInput;
