import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMovie } from '../actions'

export default function AddNewFilm() {
  const dispatch = useDispatch()
  const [movieData, setMovieData] = useState({
    name: '',
    director: '',
    duration: '',
    language: '',
    image: '',
  })

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(addMovie(movieData))
    setMovieData({
      name: '',
      director: '',
      duration: '',
      language: '',
      image: '',
    })
  }

  const handleChange = (evt) => {
    const key = evt.target.name
    const value = evt.target.value
    let prev = { ...movieData }
    prev[key] = value
    setMovieData(prev)
  }

  // const handleChange = (evt) => {
  //   const key = evt.target.name
  //   setMovieData((prev) => ({ ...prev, [key]: evt.target.value }))
  // }

  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          id="name"
          type="text"
          name="name"
          value={movieData.name}
          onChange={(evt) => handleChange(evt)}
        />
        <input
          placeholder="Director"
          id="director"
          type="text"
          name="director"
          value={movieData.director}
          onChange={(evt) => handleChange(evt)}
        />
        <input
          placeholder="Duration"
          id="duration"
          type="text"
          name="duration"
          value={movieData.duration}
          onChange={(evt) => handleChange(evt)}
        />
        <input
          placeholder="Language"
          id="language"
          type="text"
          name="language"
          value={movieData.language}
          onChange={(evt) => handleChange(evt)}
        />
        <input
          placeholder="Poster"
          id="image"
          type="text"
          name="image"
          value={movieData.image}
          onChange={(evt) => handleChange(evt)}
        />
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  )
}
