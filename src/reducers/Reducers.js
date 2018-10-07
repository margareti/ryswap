import { combineReducers } from 'redux'
import auth from './AuthReducer'
import register from './RegisterReducer';

export default combineReducers({
  auth,
  register
})
