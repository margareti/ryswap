import { takeEvery, put} from 'redux-saga/effects';
import { RESET_USER, SUCCESS } from '../constants';
import { logout } from '../apiCalls/authApi';

export default function* registerWatcher() {
  yield takeEvery(RESET_USER, resetUserFlow)
}

function* resetUserFlow() {
  try {
    yield logout();
  } catch (error) {
    // ignore logout error 
  }

  try {
    yield localStorage.removeItem('token');
  } catch(e){
  }

  yield put({type : RESET_USER + SUCCESS})

}
