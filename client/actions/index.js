export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const SET_ERROR = 'SET_ERROR'
export const SET_LOADING = 'SET_LOADING'

import { getAllMovies, addNewMovie } from '../apis'

export const fetchMovies = () => {
  return (dispatch) => {
    dispatch(setLoading())
    return getAllMovies()
      .then((movies) => {
        dispatch(receiveMovies(movies))
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}

export const receiveMovies = (movies) => {
  return {
    type: RECEIVE_MOVIES,
    movies,
  }
}

export const setError = (errMessage) => {
  return {
    type: SET_ERROR,
    errMessage,
  }
}
