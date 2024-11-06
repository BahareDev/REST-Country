import React from "react";

export default function DeatilCountry() {
  return (
    <>
      {/* Datailed section */}
      <section>
        <a
          href="#"
          className="bg-white flex w-[100px] justify-center items-center rounded px-8 py-3 m-8 shadow-md cursor-pointer"
        >
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </span>
          <span> Back </span>
        </a>

        {/* Main section*/}
        <div className="bg-white  grid grid-cols-1 m-4 items-center  overflow-hidden sm:grid-cols-3">
          {/*image*/}
          <div className="mb-4 w-full max-w-md mx-auto">
            <img
              src="https://flagcdn.com/bj.svg"
              alt=""
              className="w-full h-auto"
            />
          </div>

          <div className="sm:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 ">
              <div className="px-4">
                <h3 className="font-bold text-xl">Country name</h3>
                <ul className="space-y-2 mt-4 font-medium text-sm">
                  <li>
                    Native Name:{" "}
                    <span className="font-normal text-gray-700">
                      Country Name
                    </span>
                  </li>
                  <li>Population: </li>
                  <li>Region:</li>
                  <li>Sub Region:</li>
                  <li>Capital:</li>
                </ul>
              </div>

              <div className="px-4 mt-8 text-sm">
                <ul className="space-y-2 mt-4 font-medium">
                  <li>
                    Top level Domain:{" "}
                    <span className="font-normal text-gray-700">568000</span>
                  </li>
                  <li>Currencies:</li>
                  <li>Language:</li>
                </ul>
              </div>
            </div>

            {/* Border Section*/}
            <div className=" mt-5 px-4 sm:flex  sm:items-center">
              <h3 className="font-semibold">Border Countries: </h3>
              <ul className="flex items-center my-3 mb-8 sm:mb-2 text-sm sm:ml-4">
                <li className="bg-white drop-shadow-lg rounded py-2 px-4 mr-4">
                  <a href="#">country</a>
                </li>
                <li className="bg-white drop-shadow-lg rounded py-2 px-4 mr-4">
                  <a href="#">country</a>
                </li>
                <li className="bg-white drop-shadow-lg rounded py-2 px-4">
                  <a href="#">country</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
