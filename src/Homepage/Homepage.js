import React from 'react';
import Movies from '../Movies/Movies.js';
import Login from '../Login/Login.js';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Homepage.css';

const Homepage = (props) => {
  console.log('hello', props.home.movies);
  return (
    <section>
      <h1>Movies and such</h1>
      <h2>Welcome, Filmbuff</h2>
      <Route path="/login" component={Login} />
      <Movies moviesList={props.home.movies}/>
    </section>
  )
}
export default Homepage;
