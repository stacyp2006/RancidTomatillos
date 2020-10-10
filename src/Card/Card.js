import React from 'react';
import PropTypes from 'prop-types';
import ShowPage from '../ShowPage/ShowPage';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
  return (
    <div id={props.id} className='poster-card'>
      <button>
        <img className='poster' src={props.posterPath} alt= 'movie poster'/>
        <article>
          <h2>{props.averageRating}</h2>
        </article>
        <Route path={'/movies/' + props.id} render={() => <ShowPage movieID={props.id}/>} />
      </button>
    </div>
  )
}

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired,
  averageRating: PropTypes.number.isRequired
}
