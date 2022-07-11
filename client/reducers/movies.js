import { RECEIVE_MOVIES } from '../actions/'

const initialState = []

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return action.movies

    default:
      return state
  }
}

export default moviesReducer
