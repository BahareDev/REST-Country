import React, { useState, useEffect } from "react";

function CountryCard({ country }) {
  return (
    <>
      <div className="bg-white shadow-md rounded overflow-hidden m-8 max-w-full">
        {/* image Container  */}
        <div>
          <img
            src={country.flags?.svg}
            alt={`Flag of ${country.name?.common}`}
          />
        </div>

        <div className="bg-white px-5 py-8">
          <h5 className="font-bold text-lg mb-4">{country.name?.common}</h5>
          <ul>
            <li>
              <strong>populaion</strong>
              {country.population ? country.population.toLocaleString() : ""}
            </li>

            <li className="py-2">
              <strong>Region:</strong>
              {country.region}
            </li>

            <li>
              <strong>Capital:</strong>
              {country.capital ? country.capital[0] : ""}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CountryCard;
