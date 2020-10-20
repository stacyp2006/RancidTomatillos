import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';
import { loginFetch, getAllRatings } from '../apiCalls.js'
jest.mock('../apiCalls.js');

describe('Login', () => {
  it('should render a login form', () => {
    const fakeAddUser = jest.fn();
    render (<BrowserRouter><Login addUser={fakeAddUser}/></BrowserRouter>);
    expect(screen.getByText('Login Here')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument();
    expect(screen.getByText('login')).toBeInTheDocument();
  });

  it('should display an alert if the user enters incorrect login info', () => {
    global.alert = jest.fn();
    const fakeAddUser = jest.fn();
    render (<BrowserRouter><Login addUser={fakeAddUser}/></BrowserRouter>);
    userEvent.click(screen.getByText('login'));
    expect(screen.getByTestId('login-fieldset')).not.toHaveFormValues({
      email: 'rick@turing.io',
      password: 'asdf123'
    });
    expect(global.alert).toHaveBeenCalledTimes(1);
  });

  it('should update email input value on change', () => {
    render (<BrowserRouter><Login /></BrowserRouter>);
    fireEvent.change(screen.queryByPlaceholderText('Enter your email'), {target: {value: 'rick@turing.io'}});
    expect(screen.queryByPlaceholderText('Enter your email').value).toBe('rick@turing.io');
  });

  it('should update password input value on change', () => {
    render (<BrowserRouter><Login /></BrowserRouter>);
    fireEvent.change(screen.queryByPlaceholderText('Enter your password'), {target: {value: 'asdf123'}});
    expect(screen.queryByPlaceholderText('Enter your password').value).toBe('asdf123');
  });

  it('should log a user in if their credentials are correct', async() => {
    const fakeAddUser = jest.fn();
    loginFetch.mockResolvedValueOnce(
      {user: {id: 83, name: "Rick", email: 'rick@turing.io'}}
    );
    getAllRatings.mockResolvedValue(['hi'])

    render (<BrowserRouter><Login addUser={fakeAddUser}/></BrowserRouter>);

    const emailInput = screen.getByPlaceholderText('Enter your email');
    const passwordInput = screen.getByPlaceholderText('Enter your password');

    userEvent.type(emailInput, "rick@turing.io");
    userEvent.type(passwordInput, "asdf123");
    userEvent.click(screen.getByRole('link', { name: 'login' }));

    const mockCall = await waitFor(() => fakeAddUser)
    expect(mockCall).toHaveBeenCalled();
  });


})

//test when user logs in that these things show in document:
  //logout?, user ratings
  //test for displaying logout link in homepage instead???
  // either shows avg. rating or rate this message
