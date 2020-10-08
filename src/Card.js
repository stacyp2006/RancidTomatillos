import React from 'react';
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
