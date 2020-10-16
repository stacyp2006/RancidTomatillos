import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import Homepage from '../Homepage/Homepage.js'
import Login from '../Login/Login.js';
import ShowPage from '../ShowPage/ShowPage';
import './App.css';
import { moviesFetch } from '../apiCalls.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loggedIn: false
    }
  }

  updateUser = (ratingState) => {
    this.setState({userRatings: [...ratingState]});
  }


  addUser = (userState, ratingState) => {
    this.setState({
      loggedIn: true,
      email: userState.email,
      password: userState.password,
      id: userState.id,
      name: userState.name,
      userRatings: userState.userRatings
    });
  }

  logout = (e) => {
    this.setState({
      loggedIn: false,
      email: '',
      password: '',
      id: '',
      name: '',
      userRatings: []
    });
  }

  componentDidMount() {
    moviesFetch()
      .then(data => this.setState({movies: data.movies}))
      .catch(error => console.log('app error'))
  }

  render() {
    return (
      <main>
        <nav>
          <Link to="/">Home</Link> {' '}
          {!this.state.loggedIn && <Link to="/login">Login</Link>} {' '}
          {this.state.loggedIn &&
            <Link onClick={this.logout} to="/">
             Logout
            </Link>}
        </nav>
        <Route path="/login" render={() => <Login addUser={this.addUser} />} />
        <Route exact path="/" render={() => <Homepage home={this.state}/>} />
        <Route path='/movies/:id'
          render={({ match }) =>{
            const { id } = match.params;
            const movieToRender = this.state.movies.find(movie => movie.id === parseInt(id));
            return <ShowPage updateUser={this.updateUser} userInfo={this.state} {...movieToRender} />
          }}
        />
      </main>
    )
  }
}

export default withRouter(App);
