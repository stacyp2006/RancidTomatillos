import React, { Component } from 'react';
import Card from '../Card/Card';
import RatingForm from '../RatingForm/RatingForm';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ShowPage.css';

class ShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      videos: [],
      userRating: ''
    }
  }

  fetchMovieObj() {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
      .then(response => response.json())
      .then(data => this.setState({movie: data.movie}))
      .catch(error => console.log('movie fetch error'))
  }

  fetchVideos() {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}/videos`)
      .then(response => response.json())
      .then(data => this.setState({videos: data.videos}))
      .catch(error => console.log('video fetch error'))
  }

  componentDidMount() {
    this.fetchMovieObj();
    this.fetchVideos();
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
// <Videos allVideos={this.state.videos} />
//
