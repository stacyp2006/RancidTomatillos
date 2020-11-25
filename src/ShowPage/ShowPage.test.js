import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import ShowPage from './ShowPage';
import { singleMovieFetch, deleteUserRating } from '../apiCalls.js'
jest.mock('../apiCalls.js');


describe('ShowPage', () => {
  const movieToRender = {
    id: 694919,
    poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
    title: "Money Plane",
    average_rating: 9,
    release_date: "2020-09-29"
  }
  const fakeUser1 = {
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
    singleMovieFetch.mockResolvedValue({})
    render(<ShowPage userInfo={fakeUser1} {...movieToRender}/>);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByText('Delete Rating')).toBeInTheDocument();
  });

  it('should display the information of a fetched movie on render', async() => {
    const fakeUser2 = {
      loggedIn: true,
      email: "rick@turing.io",
      password: 'asdf123',
      id: 83,
      name: 'Rick',
      userRatings: []
    };
    singleMovieFetch.mockResolvedValue(
      {
        movie: {
        id: 694919,
        title: "Money Plane",
        poster_path: "poster.jpg",
        backdrop_path: "backdrop.jpg",
        release_date: "2020-09-29",
        overview: "It's a movie.",
        genres: ["Action"],
        budget: 4,
        revenue: 500,
        runtime: 82,
        tagline: "It sucks.",
        average_rating: 5
        }
      }
    );

    render(<ShowPage userInfo={fakeUser2} {...movieToRender}/>);

    expect(await waitFor( () => screen.getByText('Money Plane'))).toBeInTheDocument();
    expect(await waitFor( () => screen.getByText("Release Date: 2020-09-29"))).toBeInTheDocument();
    expect(await waitFor( () => screen.getByText("It's a movie."))).toBeInTheDocument();
    expect(await waitFor( () => screen.getByText("Action"))).toBeInTheDocument();
    expect(await waitFor( () => screen.getByText("Budget: $4"))).toBeInTheDocument();
    expect(await waitFor( () => screen.getByText("Revenue: $500"))).toBeInTheDocument();
    expect(await waitFor( () => screen.getByText("Runtime: 82 minutes"))).toBeInTheDocument();
    expect(await waitFor( () => screen.getByText("It sucks."))).toBeInTheDocument();
    expect(await waitFor( () => screen.getByText("User Rating:"))).toBeInTheDocument();
    expect(await waitFor( () => screen.getByText("Average Rating: 5"))).toBeInTheDocument();
  });

  it('should display a user rating if a user is logged in and has rated that movie', async() => {
    singleMovieFetch.mockResolvedValue(
      {
        movie: {
        id: 694919,
        title: "Money Plane",
        poster_path: "poster.jpg",
        backdrop_path: "backdrop.jpg",
        release_date: "2020-09-29",
        overview: "It's a movie.",
        genres: ["Action"],
        budget: 4,
        revenue: 500,
        runtime: 82,
        tagline: "It sucks.",
        average_rating: 5
        }
      }
    );

    render(<ShowPage userInfo={fakeUser1} {...movieToRender}/>);

    expect(await waitFor( () => screen.getByText("User Rating: 4"))).toBeInTheDocument();
  });

  it('should not display a user rating or delete button if a user is not logged in', async() => {
    const fakeNoUser = { loggedIn: false };
    singleMovieFetch.mockResolvedValue(
      {
        movie: {
        id: 694919,
        title: "Money Plane",
        poster_path: "poster.jpg",
        backdrop_path: "backdrop.jpg",
        release_date: "2020-09-29",
        overview: "It's a movie.",
        genres: ["Action"],
        budget: 4,
        revenue: 500,
        runtime: 82,
        tagline: "It sucks.",
        average_rating: 5
        }
      }
    );

    render(<ShowPage userInfo={fakeNoUser} {...movieToRender}/>);

    expect(await waitFor( () => screen.queryByText("User Rating:"))).not.toBeInTheDocument();
    expect(await waitFor( () => screen.queryByText("Delete Rating"))).not.toBeInTheDocument();
  });

  // it('should delete a user rating when the delete button is clicked', async() => {
  //   const fakeDelete = deleteUserRating.mockResolvedValueOnce([])
  //   singleMovieFetch.mockResolvedValue(
  //     {
  //       movie: {
  //       id: 694919,
  //       title: "Money Plane",
  //       poster_path: "poster.jpg",
  //       backdrop_path: "backdrop.jpg",
  //       release_date: "2020-09-29",
  //       overview: "It's a movie.",
  //       genres: ["Action"],
  //       budget: 4,
  //       revenue: 500,
  //       runtime: 82,
  //       tagline: "It sucks.",
  //       average_rating: 5
  //       }
  //     }
  //   );
  //
  //   render(<ShowPage userInfo={fakeUser1} {...movieToRender}/>);
  //
  //   userEvent.click(screen.getByText("Delete Rating"));
  //
  //   const mockDelete = await waitFor(() => fakeDelete);
  //   expect(mockDelete).toHaveBeenCalled();
  // });
})
