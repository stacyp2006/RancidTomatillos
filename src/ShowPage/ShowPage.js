import React, { Component } from 'react';
import RatingForm from '../RatingForm/RatingForm';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ShowPage.css';
import { singleMovieFetch } from '../apiCalls.js';

class ShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      userRating: ''
    }
  }

  componentDidMount() {
    singleMovieFetch(this.props.id)
      .then(data => this.setState({movie: data.movie}))
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
          <h2>User Rating: </h2>
          <ul>
            <li>{film.genres}</li>
          </ul>
        </section>
          <section>
            <RatingForm />
          </section>
      </main>
    )
  }
}

export default ShowPage;
//refactor film genres organization
