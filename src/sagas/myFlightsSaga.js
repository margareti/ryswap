import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_USER_FLIGHTS, GET_FLIGHT_SEATS, ADD_MY_SEATS, REQUEST, SUCCESS, FAILURE } from '../constants';
import { getMyFlights, getFlightSeats, addMySeats } from '../apiCalls/flightsApi';

export default function* registerWatcher() {
  yield takeEvery(GET_USER_FLIGHTS + REQUEST, myFlightsFlow);
  yield takeEvery(GET_FLIGHT_SEATS + REQUEST, flightSeatsFlow);
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

function* flightSeatsFlow(action) {
  try {
    const seats = yield call(getFlightSeats, action.payload);
    yield put({ type: GET_FLIGHT_SEATS + SUCCESS, seats });
  } catch (error) {
    yield put({ type: GET_FLIGHT_SEATS + FAILURE, error });
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
