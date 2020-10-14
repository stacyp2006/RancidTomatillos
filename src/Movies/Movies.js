import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const Movies = (props) => {
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

Movies.propTypes = {
  moviesList: PropTypes.array.isRequired,
  id: PropTypes.number,
  key: PropTypes.number,
  posterPath: PropTypes.string,
  backdropPath: PropTypes.string,
  title: PropTypes.string,
  averageRating: PropTypes.number,
  releaseDate: PropTypes.string
}
