import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Movies from './Movies';
import { BrowserRouter } from 'react-router-dom';

describe('Movies', () => {
  it('should render the movie card container', () => {
    const fakeMovieList = [
      {
      id: 694919,
      poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      title: "Money Plane",
      average_rating: 5.5,
      release_date: "2020-09-29"
    },
    {
      id: 123456,
      poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      title: "Some Movie",
      average_rating: 4,
      release_date: "2020-09-29"
    }];
    const fakeUser = {
      email: "",
      password: '',
      id: '',
      name: '',
      userRatings: []
    };
    render(<BrowserRouter><Movies moviesList={fakeMovieList} loggedIn={false} userInfo={fakeUser}/></BrowserRouter>);
    expect(screen.getByRole('card-container')).toBeInTheDocument();
  });

  // it should render a collection of movie cards
  it('should render a collection of movie cards based on the amount passed down in props', () => {
    const fakeMovieList = [
      {
      id: 694919,
      poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      title: "Money Plane",
      average_rating: 5.5,
      release_date: "2020-09-29"
    },
    {
      id: 123456,
      poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      title: "Some Movie",
      average_rating: 4,
      release_date: "2020-09-29"
    }];
    const fakeUser = {
      email: "",
      password: '',
      id: '',
      name: '',
      userRatings: []
    };
    render(<BrowserRouter><Movies moviesList={fakeMovieList} loggedIn={false} userInfo={fakeUser}/></BrowserRouter>);

    const cards = screen.getAllByAltText('movie poster');
    expect(cards).toHaveLength(2);
  });

  it('should display a user\'s rating on a card if logged in and they have rated that movie', () => {
    const fakeMovieList = [
      {
      id: 694919,
      poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      title: "Money Plane",
      average_rating: 5.5,
      release_date: "2020-09-29"
    },
    {
      id: 123456,
      poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      title: "Some Movie",
      average_rating: 4,
      release_date: "2020-09-29"
    }];
    const fakeUser = {
      email: "rick@turing.io",
      password: 'asdf123',
      id: 83,
      name: 'Rick',
      userRatings: [
        {
        id: 3018,
        user_id: 83,
        movie_id: 694919,
        rating: 10,
        created_at: "2020-10-17T00:11:05.814Z",
        updated_at: "2020-10-17T00:11:05.814Z"
        }
      ]
    };
    render(<BrowserRouter><Movies moviesList={fakeMovieList} loggedIn={true} userInfo={fakeUser}/></BrowserRouter>);

    expect(screen.getByText('User Rating: 10')).toBeInTheDocument();
  })
})
