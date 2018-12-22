import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_USER_FLIGHTS, ADD_MY_SEATS, REQUEST, SUCCESS, FAILURE, CREATE_SWAP_REQUEST } from '../constants';
import { getMyFlights, addMySeats } from '../apiCalls/flightsApi';

export default function* registerWatcher() {
  yield takeEvery(GET_USER_FLIGHTS + REQUEST, myFlightsFlow);
  yield takeEvery(ADD_MY_SEATS + REQUEST, addMySeatsFlow);
}

function* myFlightsFlow() {
  try {
    const flights = yield call(getMyFlights);
    yield put({ type: GET_USER_FLIGHTS + SUCCESS, flights });
  } catch (error) {
    yield put({ type: GET_USER_FLIGHTS + FAILURE, error });
  }
}

function* addMySeatsFlow(action) {
  try {
    yield call(addMySeats, action.payload);
    yield put({ type: GET_USER_FLIGHTS + REQUEST });
  } catch (error) {
    yield put({ type: ADD_MY_SEATS + FAILURE, error });
  }
}

