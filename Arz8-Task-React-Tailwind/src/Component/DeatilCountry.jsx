// import React from "react";
import React from "react";
import { useParams } from "react-router-dom";

export default function DeatilCountry({ country }) {
  const { countryName } = useParams();

  const countryInfo = country.find(
    (c) => c.name?.common.toLowerCase() === countryName.toLowerCase()
  );

  if (!country) return <p>Country not found</p>;

  const nativeNameObject = countryInfo.name?.nativeName;
  const firstLanguageCode = nativeNameObject
    ? Object.keys(nativeNameObject)[0]
    : null;
  const nativeName = firstLanguageCode
    ? nativeNameObject[firstLanguageCode].common
    : "N/A";

  const tld = countryInfo.tld ? countryInfo.tld.join(", ") : "N/A";

  return (
    <>
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
          <div className="mb-4 w-full max-w-md mx-auto">
            <img
              src={countryInfo.flags?.svg || "https://via.placeholder.com/150"}
              alt={`Flag of ${countryInfo.name?.common || "Unknown"}`}
              className="w-full h-auto"
            />
          </div>

          <div className="sm:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 ">
              <div className="px-4">
                <h3 className="font-bold text-xl">
                  {countryInfo.name?.common || "Unknown"}
                </h3>
                <ul className="space-y-2 mt-4 font-medium text-sm">
                  <li>
                    Native Name:
                    <span className="font-normal text-gray-700">
                      {nativeName}
                    </span>
                  </li>
                  <li>
                    Population:
                    <span className="font-normal text-gray-700">
                      {countryInfo.population?.toLocaleString() || "N/A"}
                    </span>
                  </li>
                  <li>
                    Region:{" "}
                    <span className="font-normal text-gray-700">
                      {countryInfo.region || "N/A"}
                    </span>
                  </li>
                  <li>
                    Sub Region:
                    {countryInfo.subregion || "N/A"}
                  </li>
                  <li>
                    Capital:{" "}
                    <span className="font-normal text-gray-700">
                      {countryInfo.capital?.[0] || "N/A"}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="px-4 mt-8 text-sm">
                <ul className="space-y-2 mt-4 font-medium">
                  <li>
                    Top level Domain:
                    <span className="font-normal text-gray-700">{tld}</span>
                  </li>
                  <li>
                    Currencies:
                    <span className="font-normal text-gray-700">
                      {countryInfo?.currencies
                        ? Object.keys(countryInfo.currencies).join(", ")
                        : "N/A"}
                    </span>
                  </li>
                  <li>
                    Language:{" "}
                    <span className="font-normal text-gray-700">
                      {countryInfo?.languages
                        ? Object.values(countryInfo.languages).join(", ")
                        : "N/A"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Border Section*/}
            <div className=" mt-5 px-4 sm:flex  sm:items-center">
              <h3 className="font-semibold">Border Countries: </h3>
              <ul className="flex items-center my-3 mb-8 sm:mb-2 text-sm sm:ml-4">
                <li className="bg-white drop-shadow-lg rounded py-2 px-4 mr-4"></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
