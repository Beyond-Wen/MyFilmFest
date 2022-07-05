const express = require('express')
const path = require('path')

const server = express()

const filmfestRoutes = require('./routes/filmfest')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/filmfest', filmfestRoutes)

module.exports = server
