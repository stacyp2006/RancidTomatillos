import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import RatingForm from './RatingForm';
// import { BrowserRouter } from 'react-router-dom';

describe('RatingForm', () => {
  it('should render a rating form', () => {
    const fakeAddRating = jest.fn();
    const fakeMovieInfo = {
        id: 694919,
        poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        title: "Money Plane",
        average_rating: 9,
        release_date: "2020-09-29"
    };
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
    }
    render (<RatingForm
      addRating={fakeAddRating}
      movieInfo={fakeMovieInfo}
      userInfo={fakeUser}
    />);
    expect(screen.getByText('Rate This Movie')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  })

  it('should display an alert if the user does not enter a rating value', () => {
    global.alert = jest.fn();
    const fakeAddRating = jest.fn();
    const fakeMovieInfo = {
        id: 694919,
        poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        title: "Money Plane",
        average_rating: 9,
        release_date: "2020-09-29"
    };
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
          rating: NaN,
          created_at: "2020-10-18T02:11:00.653Z",
          updated_at: "2020-10-18T02:11:00.653Z"
        }
      ]
    }
    const rating = fakeUser.userRatings;
    render (<RatingForm
      addRating={fakeAddRating}
      movieInfo={fakeMovieInfo}
      userInfo={fakeUser}
    />);
    userEvent.click(screen.getByText('Submit'));
    expect(rating[0].rating).toBeNaN();
    expect(global.alert).toHaveBeenCalledTimes(1);
  })
})
