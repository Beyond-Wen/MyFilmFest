import React from 'react'

export function MovieCard(props) {
  return (
    <>
      <div className="moviecard">
        <ul>
          <li>{props.movie.name}</li>
          <li>{props.movie.director}</li>
          <li>{props.movie.length}</li>
          <li>{props.movie.language}</li>
        </ul>
        <div>
          <img
            className="movieimage"
            src={props.movie.image}
            alt="movie still shot"
          />
        </div>
      </div>
    </>
  )
}
