export const moviesFetch = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => response.json())
};

export const loginFetch = (userInfo) => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(userInfo)
  })
  .then(response => response.json())
};

export const singleMovieFetch = (filmID) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${filmID}`)
    .then(response => response.json())
};

export const userRatingPost = (userID, rating) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userID}/ratings`, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(rating)
  })
  .then(response => response.json())
}
