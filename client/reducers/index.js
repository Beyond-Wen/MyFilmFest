import { combineReducers } from 'redux'

import errReducer from './errMessage'
import loadingReducer from './loading'
import moviesReducer from './movies'

export default combineReducers({
  movies: moviesReducer,
  errMessage: errReducer,
  loading: loadingReducer,
})
