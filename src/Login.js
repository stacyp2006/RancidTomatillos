import React, { Component } from 'react';
import './Login.css';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      id: '',
      name: ''
    }
  }

  componentDidMount() {
    const userInfo = { email: 'rick@turing.io',password: 'asdf123' };
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

  render() {
    return (
      <form>
        <input
        type='text'
        placeholder='email'
        name='email'

        />
        <input
        type='text'
        placeholder='password'
        name='password'

        />
        <button>
        login
        </button>
      </form>
    )
  }
}

export default Login;
