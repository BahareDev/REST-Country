import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

// const CountryURL = `https://restcountries.com/v3.1/all?name=${query}`;

export default function CountryList({ country }) {
  const [query, setQuery] = useState("");

  const filteredCountries = country.filter((item) =>
    item.name?.common.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section>
      <div className="grid grid-cols-1 justify-center items-center m-4 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {country.length > 0 ? (
          country.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))
        ) : (
          <p>No countries found</p>
        )}
      </div>
    </section>
  );
}
