import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RatingForm.css';
import { userRatingPost, getAllRatings } from '../apiCalls.js';

class RatingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRating: ''
    }
  }

  updateShowPageState = () => {
    const { addRating } = this.props;
    let formState = this.state.postedRating;
    addRating(formState);
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
    .then(data => this.setState({postedRating: data.rating}))
    .then(data => this.updateShowPageState())
    .catch(error => this.setState({error: error.message}))
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
          onChange={this.updateValue}
          />
          <input
          type='submit'
          onClick={this.addUserRating}
          />
        </form>
      </div>
    )
  }
}

export default RatingForm;
