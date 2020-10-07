import React, { Component } from 'react';
import Movies from './Movies.js';
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
      .then(data => this.setState({movies: data.movies})) //bug fix
      .catch(error => console.log('error'))
  }

  render() {
    return(
      <main>
        <h1>Movies and such</h1>
        <Movies moviesList={this.state.movies}/>
      </main>
    )
  }
}

export default App;
