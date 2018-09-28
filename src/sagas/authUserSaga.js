import { takeEvery, call, put} from 'redux-saga/effects';
import {callAuthApi} from '../apiCalls/loginApi';
import { AUTH_USER, SUCCESS } from '../constants';

export default function* userAuthWatcher() {
  yield takeEvery(AUTH_USER, authUserFlow)
}

function* authUserFlow(action) {
 try{
   console.log('auth user flow ', action )
  const result =  yield call(callAuthApi, action.payload);
  yield put({type : AUTH_USER + SUCCESS, result})
 }catch(e){
  yield put({type : 'AUTH_USER_ERROR', e})
 }
}
