import React from 'react';
import Card from './Card.js';

const Movies = (props) => {
  const movieCards = props.movies.map(movies => {
    return (
      <Card
        id={movie.id}
        key={movie.id}
        posterPath={movie.poster_path}
        backdropPath={movie.backdrop_path}
        title={movie.title}
        averageRating={movie.average_rating}
        releaseDate={movie.release_date}
      />
    )
  })

  return (
    <div className='card-container'>
      {movieCards}
    </div>
  )
}

export default Movies;
