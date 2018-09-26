import { all } from 'redux-saga/effects';
import authUserSaga from './authUserSaga';

export default function* root() {
  yield all([
    authUserSaga
  ]);
}
