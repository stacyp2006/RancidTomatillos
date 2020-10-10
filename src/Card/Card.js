import React from 'react';
import PropTypes from 'prop-types';
import Login from '../Login/Login.js';
import ShowPage from '../ShowPage/ShowPage';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
  return (
    <div id={props.id} className='poster-card'>
      <nav>
      <Link to={'/movies/' + props.id}>
        <img className='poster' src={props.posterPath} alt= 'movie poster'/>
      </Link>
      </nav>
      <article>
        <h2>{props.averageRating}</h2>
      </article>
      <Route path={'/movies/' + props.id} render={() => <ShowPage movieID={props.id} />} />
    </div>
  )
}

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired,
  averageRating: PropTypes.number.isRequired
}
// '/movies/' + props.id
