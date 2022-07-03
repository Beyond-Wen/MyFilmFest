const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

//GET
function getAllMovies() {
  return db('movies')
    .join('dates', 'first_showdate_id', 'second_showdate_id', 'dates.id')
    .select()
}

module.exports = {
  getAllMovies,
}
