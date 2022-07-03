const request = require('superagent')
const url = '/api/v1/movies/'

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
