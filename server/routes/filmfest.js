const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllMovies()
    .then((movies) => {
      res.json(movies)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Server error')
    })
})

router.post('/', (req, res) => {
  const newMovie = req.body
  db.saveMovie(newMovie)
    .then((ids) => {
      console.log(ids)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteMovie(id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})
module.exports = router
