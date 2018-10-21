import { all } from 'redux-saga/effects';
import authUserSaga from './authUserSaga';
import registerUserSaga from './registerUserSaga';
import resetUserSaga from './resetUserSaga';
import userSaga from './userSaga';
import routesSaga from './routesSaga';
import findFlightsSaga from './findFlightsSaga';
import addFlightToUserSaga from './addFlightToUserSaga';

export default function* root() {
  yield all([authUserSaga(), registerUserSaga(), resetUserSaga(), userSaga(), routesSaga(), findFlightsSaga(), addFlightToUserSaga()]);
}
