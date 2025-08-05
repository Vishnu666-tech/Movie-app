import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Props_Nav from './navBar/NavBar';
import Card_movie from './card/Card';
import { comedyMovies, imageUrl, latestMovies, popularMovies } from './url/Url';
import DetailOF_movie from './detailPage/DetailPage';
import Home_page from './homePage/HomePage';
import axios from 'axios'; 

const MovieContext = createContext();

const AppMovie = () => {
  const [moviedetail, setmoviedetail] = useState([]);
  const [id, setid] = useState();
  const [search, setsearch] = useState("");
  const [comedyArray, setcomedyArray] = useState([]);
  const [searchResult, setsearchResult] = useState([]);
  const [hideNav, sethideNav] = useState(true);

  useEffect(() => {
    axios.get(comedyMovies).then((i) => setcomedyArray(i.data.results));
  }, []);

  return (
    <MovieContext.Provider value={{ moviedetail, setmoviedetail, id, setid, sethideNav, search, setsearch, setsearchResult, searchResult }}>
      <BrowserRouter>
        {hideNav && <Props_Nav />}
        <Routes>
          <Route path='/' element={<Home_page comedyArray={comedyArray} img={imageUrl} />} />
          <Route path='/comedy' element={<Card_movie url={comedyMovies} />} />
          <Route path='/popular' element={<Card_movie url={popularMovies} />} />
          <Route path='/latest' element={<Card_movie url={latestMovies} />} />
          <Route path='/details/:id' element={<DetailOF_movie />} />
        </Routes>
      </BrowserRouter>
    </MovieContext.Provider>
  );
};

export default AppMovie;
export { MovieContext };