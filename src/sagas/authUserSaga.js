import { takeEvery, call, put} from 'redux-saga/effects';
import { login} from '../apiCalls/authApi';
import { AUTH_USER, SUCCESS, FAILURE } from '../constants';

export default function* userAuthWatcher() {
  yield takeEvery(AUTH_USER, authUserFlow)
}

function* authUserFlow(action) {
 try{
   const result =  yield call(login, action.payload);
   localStorage.setItem('token', result.accessToken)
   yield put({type : AUTH_USER + SUCCESS})
 }catch(e){
  yield put({type : AUTH_USER + FAILURE, e})
 }
}
