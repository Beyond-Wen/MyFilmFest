import { RECEIVE_MOVIES, SET_LOADING, SET_ERROR } from '../actions'

const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return true

    case RECEIVE_MOVIES:
    case SET_ERROR:
      return false

    default:
      return state
  }
}

export default reducer
