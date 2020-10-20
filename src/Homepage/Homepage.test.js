import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Homepage from './Homepage.js';
import App from '../App/App.js';
import { BrowserRouter } from 'react-router-dom';

describe('Homepage', () => {
  it('should render the homepage view', () => {
    const fakeState = {
      movies: [],
      loggedIn: false,
      id: 1,
      name: '',
      userRating: [1, 2]
    };
    render(<Homepage home={fakeState}/>);
    expect(screen.getByText("Movies and such")).toBeInTheDocument();
  });

  it('should render a general greeting if no one is logged in', () => {
    const fakeState = {
      movies: [],
      loggedIn: false,
      id: 1,
      name: '',
      userRating: [1, 2]
    };
    render(<Homepage home={fakeState}/>);
    expect(screen.getByText("Welcome, Movie Buff!")).toBeInTheDocument();
  });

  it('should render a specific greeting if a user is logged in', () => {
    const fakeState = {
      movies: [],
      loggedIn: true,
      id: 1,
      name: 'Rick',
      userRating: [1, 2]
    };
    render(<Homepage home={fakeState}/>);
    expect(screen.getByText("Welcome, Rick!")).toBeInTheDocument();
  });

  // it('should display a logout link if a user is logged in', () => {
  //   const fakeHome = {
  //     movies: [],
  //     loggedIn: true,
  //     id: 1,
  //     name: 'Rick',
  //     userRating: [1, 2]
  //   };
  //   render(<Homepage home={fakeHome}/>);
  //   expect(screen.getByText('Logout')).toBeInTheDocument();
  // })
  
})
