import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { comedyMovies, imageUrl } from '../url/Url'

import './HomePage.css'

const Home_page = ({ comedyArray, url, img }) => {



  const [randomMovie, setrandomMovie] = useState({})






  useEffect(() => {
    if (comedyArray.length > 0) {      //array.legth 20 ahnn.ith venemenkil ezhuthiya mathi
      let randomIndex = Math.floor(Math.random() * comedyArray.length);
      setrandomMovie(comedyArray[randomIndex]);

    };
  }, [comedyArray])


  return (
    <div className="homepage">
      <div
        className="hero"
        style={{
          backgroundImage: randomMovie.poster_path
            ? `url(${imageUrl + randomMovie.poster_path})`
            : "none",
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="movie-title">
              {randomMovie.title || randomMovie.name || "Loading..."}
            </h1>
            <p className="movie-overview">
              {randomMovie.overview || "No description available."}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home_page