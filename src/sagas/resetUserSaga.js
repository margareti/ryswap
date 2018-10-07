import { takeEvery, call, put} from 'redux-saga/effects';
import {registerApi} from '../apiCalls/registerApi';
import { RESET_USER, SUCCESS } from '../constants';

export default function* registerWatcher() {
  yield takeEvery(RESET_USER, resetUserFlow)
}

function* resetUserFlow() {
  console.log('reset saga')
  try {

  localStorage.removeItem('token');
  console.log('removed itm')
  //const result =  yield call(registerApi, action.payload);
  //yield put({type : RESET_USER + SUCCESS, result})
  } catch(e){
 }
}
