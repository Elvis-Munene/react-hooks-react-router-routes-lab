import React from "react";
import { directors } from "../data";

function Directors() {
  const allDirectors = directors.map((director,index)=> {
    return <div key={index}>
      <h3>Name:{director.name}</h3>
      <p>Movies:</p>
      <ul>{director.movies.map(((movies,i)=> <li key={i}>{movies}</li>))}</ul>
      </div>;
  })
  return <div>
    <h1>Directors Page</h1>
    {allDirectors}
  </div>;
}

export default Directors;
