import { takeEvery, call, put} from 'redux-saga/effects';
import {registerApi} from '../apiCalls/registerApi';
import { REGISTER_USER, SUCCESS, FAILURE } from '../constants';

export default function* registerWatcher() {
  yield takeEvery('Margarita', registerUserFlow)

  yield takeEvery(REGISTER_USER, registerUserFlow)
}

function* registerUserFlow(action) {
  console.log('register saga', action.payload)
 try{
  const result =  yield call(registerApi, action.payload);
  yield put({type : REGISTER_USER + SUCCESS, result})
 }catch(error){
  yield put({type : REGISTER_USER + FAILURE, error})

 }
}
