import {SET_MOVIES} from '../actions/'

const initialState = []

const moviesReducer(state = initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case SET_MOVIES:
      return{
        ...state,
        data:payload
      }
  }

  return state
}

export default moviesReducer
