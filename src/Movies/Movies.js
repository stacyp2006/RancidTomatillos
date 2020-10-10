import React from 'react';
import Card from '../Card/Card';

const Movies = (props) => {
  console.log(props)
  let movieCards;
  if (props.moviesList.length !== 0) {
    movieCards = props.moviesList.map(movie => {
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
  }

  return (
    <div className='card-container'>
      {movieCards}
    </div>
  )
}

export default Movies;
