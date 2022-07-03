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
