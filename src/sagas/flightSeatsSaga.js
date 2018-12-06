import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_FLIGHT_SEATS, REQUEST, SUCCESS, FAILURE } from '../constants';
import { getFlightSeats } from '../apiCalls/flightsApi';

export default function* registerWatcher() {
  yield takeEvery(GET_FLIGHT_SEATS + REQUEST, flightSeatsFlow);
}


function* flightSeatsFlow(action) {
  try {
    const seats = yield call(getFlightSeats, action.payload);
    const flight = {
      flightId: action.payload,
      seats
    }
    yield put({ type: GET_FLIGHT_SEATS + SUCCESS, flight });
  } catch (error) {
    yield put({ type: GET_FLIGHT_SEATS + FAILURE, error });
  }
}

