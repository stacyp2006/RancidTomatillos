import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div id={props.id} className='poster-card'>
      <img className='poster' src={props.posterPath} alt='{props.title} poster'/>
    </div>
  )
}

export default Card;
