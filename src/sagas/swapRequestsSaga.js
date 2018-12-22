import { takeEvery, put, call } from 'redux-saga/effects';
import { REQUEST, SUCCESS, FAILURE, CREATE_SWAP_REQUEST } from '../constants';
import { createSwapRequest } from '../apiCalls/flightsApi';


export default function* registerWatcher() {
  yield takeEvery(CREATE_SWAP_REQUEST + REQUEST, createSwapRequestFlow);
}

function* createSwapRequestFlow(action) {
  try {
    yield call(createSwapRequest, action.payload);
    yield put({ type: CREATE_SWAP_REQUEST + SUCCESS });
  } catch (error) {
    yield put({ type: CREATE_SWAP_REQUEST + FAILURE, error });
  }
}