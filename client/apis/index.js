const request = require('superagent')
const url = '/api/v1/filmfest/'

export function getAllMovies() {
  return request
    .get(url)
    .then((res) => {
      console.log('api', res.body)
      return res.body
    })
    .catch((err) => {
      console.err(err.message)
    })
}

export function addNewMovie(newMovie) {
  return request
    .post(url)
    .send({ newMovie })
    .set('Accept', 'application/json')
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      console.err(err.message)
    })
}
