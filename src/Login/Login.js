import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import './Login.css';


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
    } else {
      this.resetInputs();
      alert('Invalid login information. Please try again.')
    }
  }
//move fetch to apiCalls?
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
//Need functionality for reloading app page with conditionals for login info accuracy.
export default withRouter(Login);
