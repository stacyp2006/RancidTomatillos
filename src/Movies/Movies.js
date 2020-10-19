import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './Movies.css';

const Movies = (props) => {
  let movieCards;
  if (props.moviesList.length !== 0) {
    movieCards = props.moviesList.map(movie => {
      let movieRating = 'Rate this movie';
      let movieObj;
      if(props.loggedIn) {
        movieObj = props.userInfo.userRatings.find(rating => {
          return movie.id === rating.movie_id;
        });
      }
      return (
        <Card
          id={movie.id}
          loggedIn={props.loggedIn}
          key={movie.id}
          posterPath={movie.poster_path}
          backdropPath={movie.backdrop_path}
          title={movie.title}
          averageRating={movie.average_rating}
          releaseDate={movie.release_date}
          userRating={movieObj ? movieObj.rating : movieRating}
        />
      )
    })
  }

  return (
    <div role='card-container' className='card-container'>
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
