import { takeEvery, put, call } from 'redux-saga/effects';
import { REQUEST, SUCCESS, FAILURE, CREATE_SWAP_REQUEST, GET_SWAP_REQUESTS, CANCEL_SR, DECLINE_SR, ACCEPT_SR } from '../constants';
import { createSwapRequest, getSwapRequests, cancelSwapRequest, declineSwapRequest, acceptSwapRequest } from '../apiCalls/swapRequestsApi';
import * as actions from '../actions/actions.js'



export default function* registerWatcher() {
  yield takeEvery(CREATE_SWAP_REQUEST + REQUEST, createSwapRequestFlow);
  yield takeEvery(GET_SWAP_REQUESTS + REQUEST, getSwapRequestsFlow);
  yield takeEvery(CANCEL_SR + REQUEST, cancelSwapRequestFlow);
  yield takeEvery(DECLINE_SR + REQUEST, declineSwapRequestFlow);
  yield takeEvery(ACCEPT_SR + REQUEST, acceptSwapRequestFlow);
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

function* cancelSwapRequestFlow(action) {
  try {
    yield call(cancelSwapRequest, action.payload);
    yield put({ type: CANCEL_SR + SUCCESS, payload: action.payload });
    yield put(actions.getSwapRequests(action.payload.flightId));
  } catch (error) {
    yield put({ type: CANCEL_SR + FAILURE, error });
  }
}

function* declineSwapRequestFlow(action) {
  try {
    yield call(declineSwapRequest, action.payload);
    yield put({ type: DECLINE_SR + SUCCESS, payload: action.payload });
    yield put(actions.getSwapRequests(action.payload.flightId));
  } catch (error) {
    yield put({ type: DECLINE_SR + FAILURE, error });
  }
}

function* acceptSwapRequestFlow(action) {
  try {
    yield call(acceptSwapRequest, action.payload);
    yield put({ type: ACCEPT_SR + SUCCESS, payload: action.payload });
    yield put(actions.getSwapRequests(action.payload.flightId));
  } catch (error) {
    yield put({ type: ACCEPT_SR + FAILURE, error });
  }
}