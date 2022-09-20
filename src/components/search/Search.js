import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { useForecastContext } from "../../components/Provider";

import "./Search.scss";

const Search = () => {
  const { loadOptions, handleOnChange, search, handleClick } =
    useForecastContext();

  return (
    <>
      <div className="search-wrapper">
        <div className="search">
          <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
          />
        </div>
        <button className="btn" onClick={handleClick}>
          <svg
            className="details-icon"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 0H13V2H4V0Z" fill="#1B1919" />
            <path d="M1 12H10V14H1V12Z" fill="#1B1919" />
            <path d="M0 6H14V8H0V6Z" fill="#1B1919" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Search;
