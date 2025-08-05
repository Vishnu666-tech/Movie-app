import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../App';
import { imageUrl } from '../url/Url';
import { Rating } from '@mui/material';
import './DetailPage.css'
const DetailOF_movie = () => {
  const { moviedetail, sethideNav } = useContext(MovieContext);
  const { id } = useParams();

  const selectedMovie = moviedetail.filter((movie) => movie.id === parseInt(id));

  useEffect(() => {
    sethideNav(false);
    return () => sethideNav(true);
  }, [sethideNav]);

  if (selectedMovie.length === 0) {
    return <p style={{ color: 'white' }}>Movie not found or loading...</p>;
  }

  const movie = selectedMovie[0];

  return (
    <div className='container' 
    >
      <section className="detail d-flex" 
      >
        <div className="about" style={{margin:'20px'}}>
          <img
            style={{       width: '100%',
              // height:'50%',
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgb(156, 124, 124)', }}
            src={imageUrl + selectedMovie[0].poster_path}
            alt={selectedMovie[0].name}
          />
        </div>
        <div className=" p-5">
          <h2>{selectedMovie[0].name || selectedMovie[0].title}</h2>
          <span>{selectedMovie[0].Year}</span>
          <p className="rating">
            Rating: {selectedMovie[0].vote_average}
            <Rating
              name="customized-10"
              value={selectedMovie[0].vote_average}
              max={10}
              readOnly
            />
          </p>
          <p>{selectedMovie[0].overview}</p>
          <h3>Release Date: {selectedMovie[0].first_air_date || selectedMovie[0].release_date}</h3>
        </div>
      </section>
    </div> 
  );
};

export default DetailOF_movie;


