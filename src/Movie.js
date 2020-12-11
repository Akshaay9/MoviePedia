import React, { useState } from "react";
import "./styles.css";
function Movie({movies}){
  return(
    <>
{movies.length>1 &&(
movies.map((data)=>(
  <div className="movie">
<h3><span className="title">Movie Title : </span>{data.movie}</h3>
<h4><span className="title">Release Date :   </span>{data.year}</h4>
<span><span className="title">Rating : </span>{data.rating}/10</span>
</div>
))
)}
    </>
  )
}
export default Movie