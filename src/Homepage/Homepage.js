import React from 'react';
import Movies from '../Movies/Movies.js';
import PropTypes from 'prop-types';
import './Homepage.css';

const Homepage = (props) => {
  return (
    <section>
      <h1>Movies and such</h1>
      {props.home.user.id ? <h2>Welcome, {props.home.user.name}!</h2> : <h2>Welcome, Movie Buff!</h2>}
      <Movies moviesList={props.home.movies}
      loggedIn={props.home.loggedIn} userInfo={props.home.user}/>
    </section>
  )
}
export default Homepage;
