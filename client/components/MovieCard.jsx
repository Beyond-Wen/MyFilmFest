import React from 'react'

export default function MovieCard({ movieInfo }) {
  console.log(movieInfo)

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
            Length: <b>{movieInfo.length}</b>
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
      </div>
    </>
  )
}
