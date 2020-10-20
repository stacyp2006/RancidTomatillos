import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Card from './Card';
import { BrowserRouter } from 'react-router-dom';


describe('Card', () => {
  it('should render a card', () => {
    render(<BrowserRouter> <Card
            id={2}
            key={2}
            posterPath='movie poster'
            backdropPath='backdrop'
            title='title'
            averageRating= {8}
            releaseDate='2019-10-10'
          /></BrowserRouter>);
    expect(screen.getByAltText("movie poster")).toBeInTheDocument();
    expect(screen.getByText('Average Rating: 8')).toBeInTheDocument();
    })
})
