import { RECEIVE_MOVIES, SET_ERROR, SET_LOADING } from '../actions/'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return action.movies

    default:
      return state
  }
}

export default reducer
