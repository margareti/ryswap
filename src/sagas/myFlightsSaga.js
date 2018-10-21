import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_USER_FLIGHTS, REQUEST, SUCCESS, FAILURE } from '../constants';
import { getMyFlights } from '../apiCalls/flightsApi';

export default function* registerWatcher() {
  yield takeEvery(GET_USER_FLIGHTS + REQUEST, myFlightsFlow);
}

function* myFlightsFlow(action) {
  try {
    const flights = yield call(getMyFlights);
    yield put({ type: GET_USER_FLIGHTS + SUCCESS, flights });
  } catch (error) {
    yield put({ type: GET_USER_FLIGHTS + FAILURE, error });
  }
}
