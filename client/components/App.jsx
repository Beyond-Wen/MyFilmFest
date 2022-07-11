import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './Header'
import MovieCard from './MovieCard'
// import AddNewFilm from './AddNewFilm'
// import { getAllMovies } from '../apis'
import { fetchMovies } from '../actions'

function App() {
  const [newMovie, setNewMovies] = useState('')
  const movies = useSelector((s) => s.movies)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovies())
  }, [])

  // useEffect(() => {
  //   getAllMovies()
  //     .then((moviesData) => {
  //       setMovies(moviesData)
  //     })
  //     .catch((err) => {
  //       console.log(err.message)
  //     })
  // }, [])

  return (
    <>
      <Header />
      <br />
      <section className="main">
        <MovieCard />
      </section>
    </>
  )
}

export default App
