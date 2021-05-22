import React, { useState } from "react";
import Feedback from "./Feedback";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState(null);
  let [feedback, setFeedback] = useState(null);

  function getResponse(response) {
    setFeedback(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios.get(apiUrl).then(getResponse);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="searching">
      <section>
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
          className="btn btn-outline-light searchButton"
          aria-label="submit search"
        >
          Search
        </button>
      </form></section>
      <Feedback results={feedback} />
    </div>
  );
}
