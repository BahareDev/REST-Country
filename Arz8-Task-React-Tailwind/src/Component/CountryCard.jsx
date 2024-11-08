import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <>
      <div className="bg-white shadow-md rounded overflow-hidden m-8 ">
        {/* image Container  */}
        <div className="w-full h-60 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={country.flags?.svg}
            alt={`Flag of ${country.name?.common}`}
          />
        </div>

        <div className="bg-white px-5 py-8">
          <h5 className="font-bold text-lg mb-4">
            <Link
              to={`/country/${country.name.common}`}
              className="hover:underline"
            >
              {country.name?.common || "No Name Available"}
            </Link>
          </h5>

          <ul>
            <li>
              <strong>populaion: </strong>
              {country.population ? country.population.toLocaleString() : ""}
            </li>

            <li className="py-2">
              <strong>Region: </strong>
              {country.region}
            </li>

            <li>
              <strong>Capital: </strong>
              {country.capital ? country.capital[0] : ""}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CountryCard;
