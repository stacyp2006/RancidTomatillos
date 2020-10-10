import React, { Component } from 'react';
import Card from '../Card/Card';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ShowPage.css';

class ShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      videos: []
    }
  }

  fetchMovieObj() {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props}`)
      .then(response => response.json())
      .then(data => this.setState({movie: data.movie}))
      .catch(error => console.log('movie fetch error'))
  }

  fetchVideos() {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props}/videos`)
      .then(response => response.json())
      .then(data => this.setState({videos: data.videos}))
      .catch(error => console.log('video fetch error'))
  }

  componentDidMount() {
    this.fetchMovieObj();
    this.fetchVideos();
  }

  getGenres() {
    return this.state.movie.genres.map(genre => {
      return <li>{genre}</li>;
    })
  }

  render() {
    const film = this.state.movie;
    console.log('hello', film);
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
            {this.getGenres()}
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
