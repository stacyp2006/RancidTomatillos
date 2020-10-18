import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';

describe('Login', () => {
  it('should render a login form', () => {
    const fakeAddUser = jest.fn();
    render (<BrowserRouter><Login addUser={fakeAddUser}/></BrowserRouter>);
    expect(screen.getByText('Login Here')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument();
    expect(screen.getByText('login')).toBeInTheDocument();
  })

  it('should display an alert if the user enters incorrect login info', () => {
    global.alert = jest.fn();
    const fakeAddUser = jest.fn();
    render (<BrowserRouter><Login addUser={fakeAddUser}/></BrowserRouter>);
    userEvent.click(screen.getByText('login'));
    expect(screen.getByRole('login-form')).not.toHaveFormValues({
      email: 'rick@turing.io',
      password: 'asdf123'
    });
    expect(global.alert).toHaveBeenCalledTimes(1);
  })
})

//it should send you back to the homepage if you login correctly
//it should fire an alert if you do not enter the correct login information

// it('should render with a logout link if a user is logged in', () => {
//   render(
//     <BrowserRouter>
//     <App
//       loggedIn={true}
//     /></BrowserRouter>
//   );
//   expect(screen.getByText('Logout')).toBeInTheDocument();
// })
