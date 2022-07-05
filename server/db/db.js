const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

//GET
function getAllMovies() {
  return db('movies').select()
}

// function getAllDates() {
//   return db('dates').select()
// }

// function getMoviesbyDates(dateDigit) {
//   return db('events')
//     .join(
//       'movies',
//       'dates',
//       'events.movies_id',
//       'events.dates_id',
//       'dates.id',
//       'movies.id'
//     )
//     .select('dateDigit', 'dateMonth', 'name')
//     .where('dateDigit', dateDigit)
// }

function saveMovie(movie) {
  return db('movies').insert(movie)
}

module.exports = {
  db,
  getAllMovies,
  getAllDates,
  getMoviesbyDates,
  saveMovie,
}
