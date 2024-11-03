import React from "react";

export default function SearchBarFilter({ onSearch }) {
  function handleSearch(e) {
    onSearch(e.target.value);
  }
  return (
    <>
      {/* SEARCH & Filter section */}
      <section className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between m-8">
        {/* SEARCH BAR */}
        <div className="flex w-full max-w-xs p-2 border shadow-md rounded mb-4 sm:mb-0">
          <span className="pr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
          <input
            type="text"
            className="w-full outline-none"
            placeholder="Search for a country ..."
            onChange={handleSearch}
          />
        </div>

        {/* Filter Menue  */}
        <div className="w-[180px] p-2 border shadow-md rounded-md border-gray-300">
          <FilterMenu></FilterMenu>
        </div>
      </section>
    </>
  );
}

function FilterMenu() {
  return (
    <>
      <form className="max-w-sm mx-auto">
        <select
          id="countries"
          className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full outline-none"
        >
          <option>Filter by Region</option>
          <option value="">Africa</option>
          <option value="">America</option>
          <option value="">Asia</option>
          <option value="">Oceania</option>
        </select>
      </form>
    </>
  );
}