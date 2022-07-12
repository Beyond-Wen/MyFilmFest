const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

function getAllMovies() {
  return db('movies').select()
}

//instead of returning numbers of entires deleted, the .then calls all movies again
function deleteMovie(id) {
  return db('movies')
    .del()
    .where('id', id)
    .then(() => getAllMovies())
}

//instead of the ids of entries added, the .then calls all movies again
function saveMovie(movie) {
  return db('movies')
    .insert(movie)
    .then(() => getAllMovies())
}

module.exports = {
  db,
  getAllMovies,
  deleteMovie,
  saveMovie,
}
