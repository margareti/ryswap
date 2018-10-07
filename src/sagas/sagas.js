import { all } from 'redux-saga/effects';
import authUserSaga from './authUserSaga';
import registerUserSaga from './registerUserSaga';
import resetUserSaga from './resetUserSaga';

console.info('register user saga ',  registerUserSaga)

export default function* root() {
  yield all([
    authUserSaga(), registerUserSaga(), resetUserSaga()
  ]);
}
