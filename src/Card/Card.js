import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {
  return (
    <div id={props.id} className='poster-card'>
      <button>
        <img className='poster' src={props.posterPath} alt= 'movie poster'/>
        <article>
          <h2>{props.averageRating}</h2>
        </article>
      </button>
    </div>
  )
}

export default Card;

Card.propTypes = {
  posterPath: PropTypes.string.isRequired,
  averageRating: PropTypes.number.isRequired
}
