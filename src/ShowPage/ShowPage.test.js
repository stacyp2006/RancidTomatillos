import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ShowPage from './ShowPage';


describe('ShowPage', () => {
  const movieToRender = {
    id: 694919,
    poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
    title: "Money Plane",
    average_rating: 9,
    release_date: "2020-09-29"
  }
  const fakeUser = {
    loggedIn: true,
    email: "rick@turing.io",
    password: 'asdf123',
    id: 83,
    name: 'Rick',
    userRatings: [
      {
        id: 3072,
        user_id: 83,
        movie_id: 694919,
        rating: 4,
        created_at: "2020-10-18T02:11:00.653Z",
        updated_at: "2020-10-18T02:11:00.653Z"
      }
    ]
  };

  it('should render a showpage', () => {
    render(<ShowPage userInfo={fakeUser} {...movieToRender}/>);
    expect(screen.getByRole('show-page')).toBeInTheDocument();
    expect(screen.getByText('Delete Rating')).toBeInTheDocument();
  })
})

// fetches the information of a movie: all the movie info is in the document.

//if a user is logged in it would show their rating or rate this message.

//delete button deletes a ratings

//
