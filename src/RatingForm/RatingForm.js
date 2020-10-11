import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import './RatingForm.css';

class RatingForm extends Component {
  constructor() {
    super();
    this.state = {
      userRating: ''
    }
  }

  updateValue(event) {
    this.setState({userRating: event.target.value});
  }

  render() {
    return(
      <div>
        <form>
          <label>Rate This Movie</label>
          <input
          type='number'
          min='1' max='10'
          name='rating'
          value=''
          />
          <input
          type='submit'
          onClick={this.updateValue}
          />
        </form>
        <button>Delete Rating</button>
      </div>
    )
  }
}

export default RatingForm;
