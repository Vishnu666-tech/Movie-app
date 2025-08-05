
import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { imageUrl } from '../url/Url';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MovieContext } from '../App';
import { Rating } from '@mui/material';

const Card_movie = ({ url }) => {
  const { setmoviedetail, search } = useContext(MovieContext);
  const [movies, setmovie] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setmovie(res.data.results);
      setmoviedetail(res.data.results);
    });
  }, [url, setmoviedetail]);

  const filterSearch = movies.filter((movie) => {
    const title = `${movie.name || ''} ${movie.title || ''} ${movie.original_language || ''}`;
    return title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className='d-flex flex-wrap justify-content-center'>
      {filterSearch.map((e) => (
        <Card key={e.id} className='m-3 shadow' style={{ width: '18rem' }}>
          <Card.Img
            variant='top'
            src={imageUrl + e.poster_path }
            alt={e.name || e.title}
          />
          <Card.Body>
            <Card.Title>{e.name || e.title}</Card.Title>
            <Card.Text>
              Rating: {e.vote_average}
              <Rating name='customized-10' defaultValue={e.vote_average} max={10} />
            </Card.Text>
            <Link to={`/details/${e.id}`}>
              <Button variant='primary'>Movie Details</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Card_movie;
