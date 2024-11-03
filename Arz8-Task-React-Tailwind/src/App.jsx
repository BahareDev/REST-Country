import React, { useState, useEffect } from "react";
import Header from "./Component/Header";
import SearchBarFilter from "./Component/SearchBarFilter";
import CountryList from "./Component/CountryList";
import axios from "axios";

//!FONTS

export default function App() {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erorr, setErorr] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const CountryURL = `https://restcountries.com/v3.1/all`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${CountryURL}`);
        setCountry(res.data);
      } catch (error) {
        setErorr("Could not fetch countries data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredCountries = country.filter((item) =>
    item.name?.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>loading countries data...</p>;
  if (erorr) return <p>{erorr}</p>;

  return (
    <>
      <Header></Header>

      <main>
        <SearchBarFilter onSearch={setSearchQuery}></SearchBarFilter>
        <CountryList country={filteredCountries}></CountryList>
      </main>
    </>
  );
}
