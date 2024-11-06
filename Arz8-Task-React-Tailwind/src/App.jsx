import React, { useState, useEffect } from "react";
import Header from "./Component/Header";
import SearchBarFilter from "./Component/SearchBarFilter";
import CountryList from "./Component/CountryList";
import axios from "axios";
import DeatilCountry from "./Component/DeatilCountry";

//!FONTS
const CountryURL = `https://restcountries.com/v3.1/all`;

export default function App() {
  const [country, setCountry] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); //SEARCH state
  const [filter, setfilter] = useState(""); //Filter state

  const [loading, setLoading] = useState(true);
  const [erorr, setErorr] = useState(null);

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

  //SEARCH & Filter
  const filteredCountries = country.filter((item) => {
    const matchsearch = item.name?.common //Search condtion
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchFilter = filter ? item.region === filter : true; //Filtered condtion
    return matchsearch && matchFilter;
  });

  if (loading) return <p>loading countries data...</p>;
  if (erorr) return <p>{erorr}</p>;

  return (
    <>
      <Header></Header>

      <main>
        <SearchBarFilter
          onSearch={setSearchQuery}
          onFilter={setfilter}
        ></SearchBarFilter>
        <CountryList country={filteredCountries}></CountryList>
      </main>
    </>
  );
}
