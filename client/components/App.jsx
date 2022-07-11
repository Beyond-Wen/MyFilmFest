import React, { useState, useEffect } from 'react'
import Header from './Header'
import MovieCard from './MovieCard'
import AddNewFilm from './AddNewFilm'
import { getAllMovies } from '../apis'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getAllMovies()
      .then((moviesData) => {
        setMovies(moviesData)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <>
      <Header />
      {/* <br />
      <section className="main">
        <MovieCard />
      </section> */}
    </>
  )
}

export default App
