import React from 'react';
import Movies from '../Movies/Movies.js';
import PropTypes from 'prop-types';
import './Homepage.css';

const Homepage = (props) => {
  return (
    <section>
      <h1>Movies and such</h1>
      <h2>Welcome, Filmbuff</h2>
      <Movies moviesList={props.home.movies}/>
    </section>
  )
}
export default Homepage;
