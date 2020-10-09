import React, { Component } from 'react';
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

  submitLogin() {
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
  }

  updateValue(event) {
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
        <button
        onClick={this.submitLogin}>
        login
        </button>
      </form>
    )
  }
}
//Need functionality for reloading app page with conditionals for login info accuracy. 
export default Login;
