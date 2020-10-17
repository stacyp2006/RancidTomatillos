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

//recreate lifting state from login
// method that calls the get all ratings function
// updateAppState = () => {
//   const { updateUser } = this.props;
//   let ratingState = this.state.userMovieRating;
//   updateUser(ratingState);
// }

// this will be run passing in props instead of running it on the promise.
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
      <main>
        <section className='title-section'>
          <h1>{film.title}</h1>
          <h2>{film.tagline}</h2>
          <h2>{film.overview}</h2>
        </section>
        <section className='info-section'>
          <h2>Release Date: {film.release_date}</h2>
          <h2>Budget: {`$${film.budget}`}</h2>
          <h2>Revenue: {`$${film.revenue}`}</h2>
          <h2>Runtime: {`${film.runtime} minutes`}</h2>
          <h2>Average Rating: {film.average_rating}</h2>
          <h2>Genres:</h2>
          <ul>
            {this.state.genreElements}
          </ul>
        </section>
        <section>
          {this.props.userInfo.id &&
          this.state.userMovieRating &&
          <h2>User Rating: {ratingObj.rating}</h2>}
        </section>
        <section>
          {this.props.userInfo.id &&
          <button onClick={this.deleteFromApi}>Delete Rating</button>}
        </section>
        <section>
          {this.props.userInfo.id &&
          this.state.userMovieRating === 'Rate this movie!' &&
          <RatingForm
          updateAppState={this.updateAppState}
          addRating={this.addRating}
          movieInfo={this.state.movie}
          userInfo={this.props.userInfo}
          />
          }
        </section>
      </main>
    )
  }
}

export default ShowPage;
//refactor film genres organization
