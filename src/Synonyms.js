import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <section className="synonyms-list">
        <h4>Synonyms</h4>
          {props.synonyms.map(function (synonym, index) {
            return (<div key={index}><p>{synonym}</p></div>);
          })}
      </section>
    );
  } else {
    return null;
  }
}
