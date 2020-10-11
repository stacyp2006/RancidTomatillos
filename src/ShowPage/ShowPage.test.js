import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ShowPage from './ShowPage';

describe.only('ShowPage', () => {
  const movieToRender = {
    id: 694919,
    poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
    title: "Money Plane",
    average_rating: 9,
    release_date: "2020-09-29"
  }
  it('should render a showpage', () => {
    render(<ShowPage {...movieToRender}/>);
    expect(screen.getByText('Money Plane')).toBeInTheDocument();
  })
})
// we need to learn asynchronous testing first
