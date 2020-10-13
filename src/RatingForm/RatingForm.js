import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import './RatingForm.css';
import { userRatingPost } from '../apiCalls.js';

class RatingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRating: ''
    }
  }

  updateValue = (event) => {
    this.setState({userRating: event.target.value});
  }

  addUserRating = (event) => {
    event.preventDefault();
    const userID = this.props.userInfo.id;
    const rating = {
      movie_id: this.props.movieInfo.id,
      rating: parseInt(this.state.userRating)
    };
    userRatingPost(userID, rating)
    .then(data => console.log(data))
    .catch(error => this.setState({error: error.message}))
  }

  componentDidMount() {

  }
  render() {
    return(
      <div>
        <h2>User Rating: </h2>
        <form>
          <label>Rate This Movie</label>
          <input
          type='number'
          min='1' max='10'
          name='rating'
          onChange={this.updateValue}
          />
          <input
          type='submit'
          onClick={this.addUserRating}
          />
        </form>
        <button>Delete Rating</button>
      </div>
    )
  }
}

export default RatingForm;
