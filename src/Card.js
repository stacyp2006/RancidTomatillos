import React from 'react';

const Card = (props) => {
  return (
    <div className={props.id}>
      <img src={props.posterPath} />
    </div>
  )
}

export default Card;
