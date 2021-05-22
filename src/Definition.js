import React from "react";
import Synonyms from "./Synonyms";
import "./Definition.css";

export default function Definition(props) {
  return (
    <section className="definition">
      <h4 className="part">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>
            <p className="define">{definition.definition}</p>
            <p className="example">Use context: <br /><em>{definition.example}</em></p>
            </div>
            <section>
            <Synonyms synonyms={definition.synonyms} /></section>
          </div>
        );
      })}
    </section>
  );
}
