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

export function saveMovie(newMovie) {
  return request
    .post(url)
    .send(newMovie)
    .set('Accept', 'application/json')
    .then((response) => {
      console.log('you added' + JSON.stringify(response.body))
    })
    .catch((err) => {
      console.err(err.message)
    })
}
