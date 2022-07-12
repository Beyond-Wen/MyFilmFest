import { RECEIVE_MOVIES, SET_LOADING, SET_ERROR } from '../actions'

const initialState = false

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return true
    case RECEIVE_MOVIES:
      return false
    case SET_ERROR:
      return false

    default:
      return state
  }
}

export default loadingReducer
