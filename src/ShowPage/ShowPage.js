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

  componentDidMount() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props}`)
      .then(response => response.json())
      .then(data => this.setState({movie: data.movie}))
      .catch(error => console.log('error'))
  }

  render () {
    return (
      <section>
        <h1>title</h1>
        <h2>release date</h2>
        <h2>avg rating</h2>
      </section>
    )
  }
}

export default ShowPage;
