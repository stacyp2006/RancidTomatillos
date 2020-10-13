export const moviesFetch = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => response.json())
};

export const loginFetch = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(userInfo)
  })
  .then(response => response.json())
};
