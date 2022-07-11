export const SET_MOVIES = 'SET_MOVIES'

import * as api from '../apis'

export const setMovies = (movies) => {
  return {
    type: SET_MOVIES,
    payload: movies,
  }
}

export const fetchMovies = () => {
  return () => {}
}
