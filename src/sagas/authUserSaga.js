import { takeEvery, call, put} from 'redux-saga/effects';
import {callAuthApi} from '../apiCalls/loginApi';
import { AUTH_USER, SUCCESS } from '../constants';
import { getCurrentUser } from '../apiCalls/userApi';

export default function* userAuthWatcher() {
  yield takeEvery(AUTH_USER, authUserFlow)
}

function* authUserFlow(action) {
 try{
   const result =  yield call(callAuthApi, action.payload);
   localStorage.setItem('token', result.accessToken)
   const user = yield call(getCurrentUser);
  console.log("got user from mothersip : ",user)
  yield put({type : AUTH_USER + SUCCESS, result})
 }catch(e){
  yield put({type : 'AUTH_USER_ERROR', e})
 }
}
