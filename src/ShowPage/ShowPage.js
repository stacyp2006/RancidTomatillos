import React, { Component } from 'react';
import RatingForm from '../RatingForm/RatingForm';
import PropTypes from 'prop-types';
import './ShowPage.css';
import { singleMovieFetch, getAllRatings, deleteUserRating } from '../apiCalls.js';

class ShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    }
  }

  addRating = (formState) => {
    this.setState({ userMovieRating: formState })
  }

  findUserRating = () => {
    let ratingObj = this.props.userInfo.userRatings.find(rating => {
      return rating.movie_id === this.state.movie.id;
    })
    if(!ratingObj) {
      this.setState({userMovieRating: 'Rate this movie!'});
    } else {
      this.setState({userMovieRating: ratingObj});
    }
    // if(!props.userInfo.id) {
    //   return "log in please";
    // } else if(!ratingObj.rating) {
    //   return 'Rate this movie';
    //
    //   })
    //   return ratingObj.rating;
    // }
  }

  // iterate through props.userInfo.userRatings


  deleteFromApi = (event) => {
    event.preventDefault();
    let userID = this.props.userInfo.id;
    let ratingID = this.state.userMovieRating.id;
    deleteUserRating(userID, ratingID)
    .then(data => this.setState({userMovieRating: 'Rate this movie!'}))
    .catch(error => this.setState({error: error.message}))
  }

  componentDidMount() {
    singleMovieFetch(this.props.id)
      .then(data => this.setState({movie: data.movie}))
      .then(data => this.displayGenres())
      .then(data => this.findUserRating())
      .catch(error => console.log({error: error.message}))
  }

  displayGenres = () => {
    let allGenres
    if(this.state.movie) {
      allGenres = this.state.movie.genres.map(genre => {
        return <li>{genre}</li>
      })
    }
    this.setState({genreElements: allGenres});
  }

  render() {
    const film = this.state.movie;
    const ratingObj = this.state.userMovieRating;
    return (
      <main role="show-page" className="show-page" style={{ backgroundImage: `url(${film.backdrop_path})` }}>
        <div className="movie-info">
          <section className='title-section'>
            <h1>{film.title}</h1>
            <h2>{film.tagline}</h2>
            <h2>{film.overview}</h2>
          </section>
          <div className="column-section">
            <section className='info-section'>
              <h2>Release Date: {film.release_date}</h2>
              <h2>Budget: {`$${film.budget}`}</h2>
              <h2>Revenue: {`$${film.revenue}`}</h2>
              <h2>Runtime: {`${film.runtime} minutes`}</h2>
              <h2>Genres:</h2>
              <ul className="genre-list">
                {this.state.genreElements}
              </ul>
            </section>
            <section className="rating-form-section">
              {this.props.userInfo.id &&
              this.state.userMovieRating === 'Rate this movie!' &&
              <RatingForm
              updateAppState={this.updateAppState}
              addRating={this.addRating}
              movieInfo={this.state.movie}
              userInfo={this.props.userInfo}
              />}
            </section>
          </div>
          <section className="rating-section">
            <h2>Average Rating: {parseInt(film.average_rating).toFixed(0)}</h2>
            <section>
              {this.props.userInfo.id &&
              this.state.userMovieRating &&
              <h2>User Rating: {ratingObj.rating}</h2>}
            </section>
          </section>
          <section>
            {this.props.userInfo.id &&
            <button className="delete-button" onClick={this.deleteFromApi}>Delete Rating</button>}
          </section>
        </div>
      </main>
    )
  }
}

export default ShowPage;
