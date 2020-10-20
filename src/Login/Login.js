import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.css';
import { loginFetch, getAllRatings } from '../apiCalls.js';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      id: '',
      name: '',
      userRatings: []
    }
  }

  submitLogin = (e) => {
    e.preventDefault();
    const userInfo = { email: this.state.email, password: this.state.password };
    if (this.state.email === 'rick@turing.io' && this.state.password === 'asdf123') {
      loginFetch(userInfo)
      .then(data => this.setState({
        email: data.user.email,
        id: data.user.id,
        name: data.user.name
      }))
      .then(data => this.getUserRatings())
      .catch(error => this.setState({error: error.message}))
    } else {
      this.resetInputs();
      alert('Invalid login information. Please try again.');
    }
  }
//refactor error handling for 'User not found'
  resetInputs = () => {
    this.setState({email: '', password: ''})
  }

  getUserRatings = () => {
    const userID = this.state.id;
    getAllRatings(userID)
    .then(data => this.setState({userRatings: data.ratings}))
    .then(data => this.createUser())
    .then(data => this.goToHome())
    .catch(error => this.setState({error: error.message}))
  }

  createUser = () => {
    const { addUser } = this.props;
    let userState = this.state;
    addUser(userState);
  }

  goToHome = () => {
    this.props.history.push('/')
  }

  updateValue = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div className="login">
        <form role="form" className="login-form">
          <h1 className="login-title">Login Here</h1>
          <input
          className="email-input"
          type='text'
          placeholder='Enter your email'
          name='email'
          value={this.state.email}
          onChange={this.updateValue}
          />
          <input
          className="password-input"
          type='password'
          placeholder='Enter your password'
          name='password'
          value={this.state.password}
          onChange={this.updateValue}
          />
          <Link to="/">
            <button className="login-button" onClick={this.submitLogin}>
              login
            </button>
          </Link>
        </form>
      </div>
    )
  }
}

export default withRouter(Login);
