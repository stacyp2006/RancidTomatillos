import React from 'react';
// import ReactDOM from 'react-dom';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import Login from '../Login/Login.js';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { moviesFetch } from '../apiCalls.js'
jest.mock('../apiCalls.js');
import '@testing-library/jest-dom';
// import Homepage from '../Homepage/Homepage.js';
// import Movies from '../Movies/Movies.js';

describe('App', () => {
  it('should render with a home link and a login link', () => {
    moviesFetch.mockResolvedValueOnce([]);
    render(
      <BrowserRouter><App /></BrowserRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  })

//test that the fetch is getting movies:
 // setup: mocking the Fetch
  //copy pasta from the api to mock resolved values.
//execution/assertion: expect avg rating to be in the document
  it('should render displaying movies', async () => {
    moviesFetch.mockResolvedValue([
    {
    id: 694919,
    poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
    title: "Money Plane",
    average_rating: '5',
    release_date: "2020-09-29"
    }
    // {
    // id: 337401,
    // poster_path: "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
    // backdrop_path: "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
    // title: "Mulan",
    // average_rating: '6',
    // release_date: "2020-09-04"
    // }
  ]);

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const avgRating1 = await waitFor(() => screen.getByAltText('movie poster'));
  expect(avgRating1).toBeInTheDocument();
  })

})

//when you click home it takes you home
it('should return to home view when Home is clicked', () => {
  moviesFetch.mockResolvedValueOnce([]);
  render(
    <BrowserRouter><App /></BrowserRouter>
  );

  userEvent.click(screen.getByText('Home'));
  expect(screen.getByText('Welcome, Movie Buff!'))
})

it('should render the login page when the login link is clicked', () => {
  moviesFetch.mockResolvedValueOnce([]);
  render(
    <BrowserRouter><App /><Login /></BrowserRouter>
  );

  userEvent.click(screen.getByText('Home'));
  expect(screen.getByText('Login Here'));
})
