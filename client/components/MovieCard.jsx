import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteMovie } from '../actions'

export default function MovieCard({ movieInfo }) {
  const dispatch = useDispatch()

  function handleDelete(evt, id) {
    evt.preventDefault()
    dispatch(deleteMovie(id))
  }

  return (
    <>
      <div className="cardDiv">
        <ul>
          <li>
            Title: <b>{movieInfo.name}</b>
          </li>
          <li>
            Director: <b>{movieInfo.director}</b>
          </li>
          <li>
            Duration: <b>{movieInfo.duration}</b>
          </li>
          <li>
            Language: <b>{movieInfo.language}</b>
          </li>
        </ul>
        <div>
          <img
            className="movieImage"
            src={movieInfo.image}
            alt="movie still shot"
          />
        </div>
        <button onClick={(evt) => handleDelete(evt, movieInfo.id)}>
          Remove Movie
        </button>
      </div>
    </>
  )
}
