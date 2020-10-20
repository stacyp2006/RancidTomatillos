import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RatingForm.css';
import { userRatingPost } from '../apiCalls.js';

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
    if (!rating.rating) {
      alert('Please use the dropdown menu to choose a rating.');
    } else {
      userRatingPost(userID, rating)
      .then(data => this.setState({postedRating: data.rating}))
      .then(data => this.updateShowPageState())
      .then(data => this.props.updateAppState)
      .catch(error => this.setState({error: error.message}))
    }
  }

  render() {
    return(
      <form className="rating-form">
        <label className="rating-label">Rate This Movie</label>
        <input
        className='rating-num'
        type='number'
        min='1' max='10'
        name='rating'
        onChange={this.updateValue}
        />
        <button
        className='rating-submit-btn'
        onClick={this.addUserRating}>
        Submit
        </button>
      </form>
    )
  }
}

export default RatingForm;

RatingForm.propTypes = {
  movieInfo: PropTypes.object.isRequired,
}
