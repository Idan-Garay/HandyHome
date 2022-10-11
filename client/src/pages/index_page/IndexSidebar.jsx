import React from "react";


function IndexSidebar() {
  const section = [
    "All",
    "Plumbing",
    "Housekeeping",
    "Carpentry",
    "Gardening",
    "BabySitting",
    "Masonry",
  ]
  return (
    <aside className=" border px-4 pt-16 min-w-[300px] sm:flex-initial sm:w-1/4 sm:max-w-sm">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2 ">
        <div className="space-y-6 text-secondaryColor text-left ml-3">
          {section.map((option, optionIdx) => (
            <div key={optionIdx} className="flex items-center">
              <input
                id={`filter-mobile-${section.id}-${optionIdx}`}
                name={`${section.id}[]`}
                defaultValue={option.value}
                type="checkbox"
                defaultChecked={option.checked}
                className="h-4 w-4 rounded text-indigo-600 accent-primaryColor focus:ring-indigo-500"
              />
              <label
                className="ml-3 min-w-0 flex-1 "
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default IndexSidebar;
