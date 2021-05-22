import React, { useState } from "react";
import Feedback from "./Feedback";
import Photos from "./Photos";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState(null);
  let [feedback, setFeedback] = useState(null);
  let [photos, setPhotos] = useState(null);

  function getResponse(response) {
    setFeedback(response.data[0]);
  }

  function getPexels(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios.get(apiUrl).then(getResponse);

    let pexelsKey = "563492ad6f917000010000012d1b75641cd64c7da216ff36595a747a";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let header = { Authorization: `Bearer ${pexelsKey}`};

    axios.get(pexelsUrl, {headers: header}).then(getPexels);
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
      <Photos photos={photos}/>
    </div>
  );
}
