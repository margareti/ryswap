import { takeEvery, put, call } from 'redux-saga/effects';
import { REQUEST, SUCCESS, FAILURE, CREATE_SWAP_REQUEST, GET_SWAP_REQUESTS } from '../constants';
import { createSwapRequest, getSwapRequests } from '../apiCalls/swapRequestsApi';


export default function* registerWatcher() {
  yield takeEvery(CREATE_SWAP_REQUEST + REQUEST, createSwapRequestFlow);
  yield takeEvery(GET_SWAP_REQUESTS + REQUEST, getSwapRequestsFlow);
}

function* createSwapRequestFlow(action) {
  try {
    yield call(createSwapRequest, action.payload);
    yield put({ type: CREATE_SWAP_REQUEST + SUCCESS });
  } catch (error) {
    yield put({ type: CREATE_SWAP_REQUEST + FAILURE, error });
  }
}

function* getSwapRequestsFlow(action) {
  try {
    const swapRequests = yield call(getSwapRequests, action.payload);
    yield put({ type: GET_SWAP_REQUESTS + SUCCESS, payload: {swapRequests, flightId: action.payload.flightId} });
  } catch (error) {
    yield put({ type: GET_SWAP_REQUESTS + FAILURE, error });
  }
}