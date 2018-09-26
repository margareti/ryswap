import { takeEvery, call, put} from 'redux-saga/effects';
import { AUTH_USER } from '../constants';

export default function* userAuthWatcher() {
  yield takeEvery(AUTH_USER, authUserFlow)
}

function* authUserFlow() {
 try{
   console.log('auth user flow')
  const result =  yield call(callAuthApi);
  yield put({type : 'AUTH_USER_SUCCESS', result})
 }catch(e){
  yield put({type : 'AUTH_USER_ERROR', e})
 }
}

function callAuthApi() {
  return fetch('https://pokeapi.co/api/v1/').then(response => response);
}