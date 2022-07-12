const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

//GET
function getAllMovies() {
  return db('movies').select()
}

function deleteMovie(id) {
  return db('movies')
    .del()
    .where('id', id)
    .then(() => getAllMovies())
}

// function saveMovie(movie) {
//   return db('movies').insert(movie)
// }

module.exports = {
  db,
  getAllMovies,
  deleteMovie,
  // saveMovie,
}
