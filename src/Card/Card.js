import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
        {props.loggedIn && <h2>{props.userRating}</h2>}
      </article>
    </div>
  )
}

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired,
  averageRating: PropTypes.number.isRequired
}
