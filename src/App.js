import React, { Component } from 'react';
import Movies from './Movies';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [
        {
          "id": 524047,
          "poster_path": "https://image.tmdb.org/t/p/original//sA154deR0X51EcR2lm2FfDczryg.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//juzEhsX92if2lJ2CSqKAI4RQswt.jpg",
          "title": "Greenland",
          "average_rating": 7.833333333333333,
          "release_date": "2020-07-29"
        },
        {
          "id": 606234,
          "poster_path": "https://image.tmdb.org/t/p/original//eDnHgozW8vfOaLHzfpHluf1GZCW.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//u9YEh2xVAPVTKoaMNlB5tH6pXkm.jpg",
          "title": "Archive",
          "average_rating": 6.4,
          "release_date": "2020-08-13"
        }
      ]
    }
  }

  render() {
    return(
      <section>
        <Movies />
      </section>
    )
  }
}

export default App;
