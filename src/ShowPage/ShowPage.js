import React, { Component } from 'react';
import RatingForm from '../RatingForm/RatingForm';
import PropTypes from 'prop-types';
import './ShowPage.css';
import { singleMovieFetch, getAllRatings } from '../apiCalls.js';

class ShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      userRating: {}
    }
  }

  getUserRating = (ratingList) => {
    const userID = this.props.userInfo.id;
    getAllRatings(userID)
    .then(data => ratingList = data.ratings)
    .then(data => this.setState({userRating: this.findMovieRating(ratingList)}))
    .catch(error => this.setState({error: error.message}))
  }

  findMovieRating = (ratingList) => {
    const rating = ratingList.find(rating => {
      return this.state.movie.id === rating.movie_id
    });
    return rating;
  }

  componentDidMount() {
    singleMovieFetch(this.props.id)
      .then(data => this.setState({movie: data.movie}))
      .then(data => this.getUserRating())
      .catch(error => console.log({error: error.message}))
  }

  // getGenres() {
  //   console.log(this.state.movie.genres);
  //   let genreElement
  //   if(!this.state.movie) {
  //     genreElement = this.state.movie.genres.map(genre => {
  //       return genre;
  //     })
  //   }
  //   return genreElement
  // }

  render() {
    const film = this.state.movie;
    return (
      <main>
        <section className='title-section'>
          <h1>{film.title}</h1>
          <h2>{film.tagline}</h2>
          <h2>{film.overview}</h2>
        </section>
        <section className='info-section'>
          <h2>{film.release_date}</h2>
          <h2>{film.budget}</h2>
          <h2>{film.revenue}</h2>
          <h2>{film.runtime}</h2>
          <h2>{film.average_rating}</h2>
          <ul>
            <li>{film.genres}</li>
          </ul>
        </section>
        <section> {this.props.userInfo.id && <h2>User Rating: {this.state.userRating.rating}</h2>}</section>
        <section> {this.props.userInfo.id && <button onClick={this.deleteRating}>Delete Rating</button>}
        </section>
        <section>
        {this.props.userInfo.id &&
          <RatingForm movieInfo={this.state.movie} userInfo={this.props.userInfo} />
        }
        </section>
      </main>
    )
  }
}

export default ShowPage;
//refactor film genres organization
