const request = require('superagent')
const url = '/api/v1/filmfest/'

export function getAllMovies() {
  return request
    .get(url)
    .then((response) => {
      const movies = response.body
      return movies
    })
    .catch((err) => {
      console.err(err.message)
    })
}

export function saveMovie(movie) {
  return request
    .post(url)
    .send(movie)
    .then((response) => {
      console.log('you added' + JSON.stringify(response.body))
    })
    .catch((err) => {
      console.err(err.message)
    })
}
