import { AUTH_USER } from '../constants';

export function loginUser(user) {
  return {
    type: AUTH_USER,
    payload: { user }
  }
}