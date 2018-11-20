import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_CURRENT_USER, GET_USER_FLIGHTS, REQUEST, SUCCESS, FAILURE } from '../constants';
import { getCurrentUser } from '../apiCalls/userApi';

export default function* userWatcher() {
  yield takeEvery(GET_CURRENT_USER, getCurrentUserFlow);
}

function* getCurrentUserFlow() {
  try {
    const user = yield call(getCurrentUser);
    yield put({ type: GET_CURRENT_USER + SUCCESS, user });
    yield put({ type: GET_USER_FLIGHTS + REQUEST });
  } catch (e) {
    yield put({ type: GET_CURRENT_USER + FAILURE, e });
  }
}
