import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export function MovieCard(props) {
  const movies = useSelector((state) => state.movies)
  const dispatch = useDispatch

  return (
    <>
      <div className="moviecard">
        <ul>
          <li>{props.movies.name}</li>
          <li>{props.movies.director}</li>
          <li>{props.movies.length}</li>
          <li>{props.movies.language}</li>
        </ul>
        <div>
          <img
            className="movieimage"
            src={props.movies.image}
            alt="movie still shot"
          />
        </div>
      </div>
    </>
  )
}
