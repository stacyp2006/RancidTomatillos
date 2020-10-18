import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { moviesFetch } from '../apiCalls.js'
// jest.mock('../apiCalls.js');

describe('App', () => {
  it('should render with a home link and a login link', () => {
    render(
      <BrowserRouter><App /></BrowserRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  })
})



// it('should fire logout method when logout link is clicked', () => {
//   const fakeLogout = jest.fn();
//   render(
//     <BrowserRouter><App loggedIn={true} /></BrowserRouter>
//   );
//   userEvent.click(screen.getByText('Logout'));
//   expect(fakeLogout).toHaveBeenCalledTimes(1);
// })
//figure out how to mock state

// it('should fetch all movies when page is rendered', async () => {
//   moviesFetch.mockResolvedValueOnce([{
//       id: 694919,
//       poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
//       backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
//       title: "Money Plane",
//       average_rating: 5.5,
//       release_date: "2020-09-29"
//   }]);
//   render(
//     <BrowserRouter><App /></BrowserRouter>
//   );
//   const container = screen.getByRole('card-container');
//   const movie1 = await waitFor(() => screen.getByNumber(5.5));
//   expect(container).toBeInTheDocument();
//   expect(movie1).toBeInTheDocument();
// })


//when you click home it takes you home
//when login button is clicked, the login page is rendered
//should fetch all movies
