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
      email: "rick@turing.io",
      password: 'asdf123',
      id: 83,
      name: 'Rick'
    };
    render(<BrowserRouter><Movies moviesList={fakeMovieList} loggedIn={false} userInfo={fakeUser}/></BrowserRouter>);
    expect(screen.getByRole('region')).toBeInTheDocument();
  })
})
