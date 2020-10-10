import React, { Component } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import Homepage from '../Homepage/Homepage.js'
// import Movies from '../Movies/Movies.js';
import Login from '../Login/Login.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({movies: data.movies}))
      .catch(error => console.log('error'))
  }

  render() {
    return (
      <main>
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/login">Login</Link>
        </nav>
        <Route path="/login" render={() => <Login />} />
        <Route exact path="/" render={() => <Homepage home={this.state}/>} />
      </main>
    )
  }
}

export default App;
