import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if(props.photos) {
    return (
    <section className="photos">
      <div className="row">
      {props.photos.map(function(photo, index) {
        return (
          <div className="col-4">
          <a href={photo.src.original} target="_blank" rel="noopener noreferrer">
            <img src={photo.src.landscape} className="img-fluid" alt=""/>
          </a>
          </div>
        );
      })}
    </div>
    </section>
  )
  } else {
    return null;
  }
  
}