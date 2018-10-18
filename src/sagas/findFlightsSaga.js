import { takeEvery, put, call} from 'redux-saga/effects';
import { FIND_FLIGHTS, REQUEST, SUCCESS, FAILURE } from '../constants';
import { findFlights} from '../apiCalls/findFlightsApi';

export default function* registerWatcher() {
  yield takeEvery(FIND_FLIGHTS + REQUEST, findFlightsFlow);
}

function* findFlightsFlow(action) {
  try {
    const flights = yield call(findFlights, action.payload);
    yield put({ type: FIND_FLIGHTS + SUCCESS, flights });
  } catch (error) {
    console.log(error)
    yield put({type: FIND_FLIGHTS + FAILURE, error})
  }
}
