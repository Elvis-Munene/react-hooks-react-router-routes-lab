import React from "react";
import { movies } from "../data";



function Movies() {
console.log(movies);
const allMovies = movies.map((movie, index)=> {
  return <div key={index}>
    <h3>Name:{movie.title}</h3>
    <p>Time:{movie.time}</p>
    <p>Genres</p>
    <ul>{movie.genres.map((genre, i)=> <li key={i}>{genre}</li>)}</ul>
  </div>;
});
return <div>
  <h1>Movies Page</h1>
  {allMovies}
</div>
}

export default Movies;
