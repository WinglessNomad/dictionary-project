import React, { useState } from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }
  function updateKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="searching">
      <form className="searchForm" onSubmit={search}>
        <input
          type="search"
          className="searchBar"
          placeholder="Enter keyword"
          aria-label="Search"
          onChange={updateKeyword}
        ></input>
        <button
          type="submit"
          className="btn btn-outline-dark searchButton"
          aria-label="submit search"
        >
          Search
        </button>
      </form>
    </div>
  );
}
