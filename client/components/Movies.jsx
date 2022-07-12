import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchMovies } from '../actions'

import MovieCard from './MovieCard'

export default function Movies() {
  const movies = useSelector((state) => state.movies)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovies())
  }, [])

  return (
    <div className="cardContainer">
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movieInfo={movie} />
      })}
    </div>
  )
}
