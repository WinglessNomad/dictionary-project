import React from "react";
import Definition from "./Definition";
import Phonetics from "./Phonetics";
import "./Feedback.css";

export default function Feedback(props) {
  if (props.results) {
    return (
      <div className="feedback">
        <section className="main-word">
        <h2 className="word">{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics phonetic={phonetic} />
      </div>
          );
        })}
        </section>
  
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section className="main-definition" key={index}>
              <Definition meaning={meaning} />
              </section>
          );
        })}
        
      </div>
    );
  } else {
    return null;
  }
}
