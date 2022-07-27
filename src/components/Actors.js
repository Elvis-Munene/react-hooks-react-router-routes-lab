import React from "react";
import { actors } from "../data";

function Actors() {
const allactors = actors.map((actor, index) => {
  
return <div key={index}>
<h3>Name:{actor.name}</h3>
<p>Movies:</p>
<ul>{actor.movies.map((movies,i)=> <li key={i}>{movies}</li>)}</ul>
</div>;
  
})

  return <div>
    <h1>Actors Page</h1>
    {allactors}
  </div>;
}

export default Actors;
