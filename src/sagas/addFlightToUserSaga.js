import { takeEvery, call, put } from 'redux-saga/effects';
import { addFlightToUser } from '../apiCalls/flightsApi';
import { ADD_FLIGHT_TO_USER,REQUEST, SUCCESS, FAILURE } from '../constants';

export default function* addFlight() {
  yield takeEvery(ADD_FLIGHT_TO_USER + REQUEST, addFlightToUserFlow);
}

function* addFlightToUserFlow(action) {
  try {
    const result = yield call(addFlightToUser, action.payload);
    yield put({ type: ADD_FLIGHT_TO_USER + SUCCESS, payload: result });
  } catch (e) {
    yield put({ type: ADD_FLIGHT_TO_USER + FAILURE, e });
  }
}
