import React from 'react';
import Movies from '../Movies/Movies.js';
import PropTypes from 'prop-types';
import './Homepage.css';

const Homepage = (props) => {
  return (
    <section>
      <div className="header">
        <h1 className="popcorn">🍿</h1>
          <div className="header-text">
            <h1>Movies and such</h1>
            {props.home.id ? <h2>Welcome, {props.home.name}!</h2> : <h2>Welcome, Movie Buff!</h2>}
          </div>
        <h1 className="popcorn">🍿</h1>
      </div>
      <Movies moviesList={props.home.movies}
      loggedIn={props.home.loggedIn} userInfo={props.home}/>
    </section>
  )
}
export default Homepage;

Homepage.propTypes = {
  movies: PropTypes.array
}
