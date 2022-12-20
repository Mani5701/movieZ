import React from "react";
import {motion} from 'framer-motion'

function Movieitem({movie}) {
  return (
    <motion.div layout animate={{opacity:1}} initial = {{opacity:0}} exit={{opacity:0}} className="col-md-2 my-2">
        <h6 style={{fontSize : '10px', height:"20px"}} className="textCapitlize">{movie.title}</h6>
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} style={{backgroundSize:'cover',backgroundPosition:'center'}} className="card-img-top" alt="..." />
        {/* <p className="mb-2 mx-2" style={{fontSize : '13px'}}>Release Date : {movie.release_date}</p> */}
      </div>
    </motion.div>
  );
}

export default Movieitem;
