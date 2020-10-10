import React, { Component } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ShowPage.css';

class ShowPage extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      video: []
    }
  }

  componentDidMount() {
    
  }

  render () {
    return (
      <section>
        <h1>{}</h1>
        <h2>{}</h2>
        <h2>{}</h2>
        <video>
          <source src={} type={} />
        </video>
      </section>
    )
  }
}

export default ShowPage;
