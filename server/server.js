const express = require('express')
const path = require('path')

const server = express()

const moviesRoutes = require('./routes/movies')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/movies', moviesRoutes)

module.exports = server
