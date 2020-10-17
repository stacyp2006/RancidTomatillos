import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
  return (
    <div id={props.id} className='poster-card'>
      <nav>
        <Link to={'/movies/' + props.id} className="movielink">
          <img className='poster' src={props.posterPath} alt= 'movie poster'/>
          <h2 className="card-rating">Average Rating: {props.averageRating.toFixed(0)}</h2>
          {props.loggedIn && <h2 className="card-rating">User Rating: {props.userRating}</h2>}
        </Link>
      </nav>
    </div>
  )
}

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired,
  averageRating: PropTypes.number.isRequired
}
