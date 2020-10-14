import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.css';
import { loginFetch } from '../apiCalls.js';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      id: '',
      name: ''
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
      .then(data => this.createUser())
      .then(data => this.goToHome())
      .catch(error => console.log('login error'))
    } else {
      this.resetInputs();
      alert('Invalid login information. Please try again.');
    }
  }
//refactor error handling for 'User not found'
  resetInputs = () => {
    this.setState({email: '', password: ''})
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
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <form>
        <input
        type='text'
        placeholder='email'
        name='email'
        value={this.state.email}
        onChange={this.updateValue}
        />
        <input
        type='text'
        placeholder='password'
        name='password'
        value={this.state.password}
        onChange={this.updateValue}
        />
        <Link to="/">
          <button onClick={this.submitLogin}>
            login
          </button>
        </Link>
      </form>
    )
  }
}

export default withRouter(Login);
