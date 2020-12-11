import React, { useState } from "react";
import "./styles.css";
import Movie from "./Movie.js"
import {topRatedMovies,topRatedHorrorMovies,topRatedActionMovies,topRatedCrimeMovies} from "./Data"

export default function App() {
  const [movies, setMovies] = useState([]);


  const movieHandler=()=>{
    setMovies(topRatedMovies)
  }
  const horrorHandler=()=>{
    setMovies(topRatedHorrorMovies)
  }
  const actionHandler=()=>{
    setMovies(topRatedActionMovies)
  }
  const mystoryHandler=()=>{
    setMovies(topRatedCrimeMovies)
  }


  return (
    <>
      <div className="App">
        <h1>Welcome to MoviePedia</h1>
      <button className="btn-grad" onClick={()=>horrorHandler()}>See Top Rated Horror Movies Of All TIme</button>
      <button className="btn-grad" onClick={()=>actionHandler()}>See Top Rated Action Of All TIme</button>
      <button className="btn-grad" onClick={()=>mystoryHandler()}>See Top Rated Crime Mystery Of All TIme</button>
      <button  className="btn-grad" onClick={()=>movieHandler()} >See Top Rated Movies Of All TIme</button>
      </div>
<div className="movies">
     <Movie movies={movies}/>
</div>
    </>
  );
}
