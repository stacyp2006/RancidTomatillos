import React, { Component } from 'react';
import { Route, Switch, Link, withRouter, NavLink } from 'react-router-dom';
import './Login.css';
import Homepage from '../Homepage/Homepage.js';


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
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userInfo)
    })
    .then(response => response.json())
    .then(data => this.setState({
      email: data.user.email,
      id: data.user.id,
      name: data.user.name
    }))
    .then(data => this.createUser())
    .then(data => this.goToHome())
    .catch(error => console.log('login error'))
  }
//move fetch to apiCalls?

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
//Need functionality for reloading app page with conditionals for login info accuracy.
export default withRouter(Login);
