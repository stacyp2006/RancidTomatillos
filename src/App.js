import React, { Component } from 'react';
import Movies from './Movies';
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
      .then(data => this.setState({movies: data}))
      .catch(error => console.log('error')) // error.message? REVISIT
  }

  render() {
    return(
      <section>
        
      </section>
    )
  }
}

export default App;
