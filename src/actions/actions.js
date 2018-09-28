import * as Constants from '../constants';

export function loginUser(user) {
  return {
    type: Constants.AUTH_USER,
    payload:  user 
  }
}

export function registerUser(user) {
  return {
    type: Constants.REGISTER_USER,
    payload: user
  }
}