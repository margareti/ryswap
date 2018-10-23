import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_USER_FLIGHTS,GET_FLIGHT_SEATS,  REQUEST, SUCCESS, FAILURE } from '../constants';
import { getMyFlights, getFlightSeats } from '../apiCalls/flightsApi';

export default function* registerWatcher() {
  yield takeEvery(GET_USER_FLIGHTS + REQUEST, myFlightsFlow);
  yield takeEvery(GET_FLIGHT_SEATS + REQUEST, flightSeatsFlow);
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
