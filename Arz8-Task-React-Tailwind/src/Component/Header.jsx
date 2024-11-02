import React from "react";

export default function Header() {
  return (
    <>
      <header class="bg-white flex justify-between items-center h-20 p-4 shadow-md md:p-10 md:h-14">
        <h1 class="font-extrabold">Where in the world?</h1>
        {/* <!-- DARK mode section --> */}
        <div className="flex items-center ">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </span>

          <span className="text-sm pl-2">Dark Mode</span>
        </div>
      </header>
    </>
  );
}
