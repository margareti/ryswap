import { takeEvery, put, call} from 'redux-saga/effects';
import { LOAD_ROUTES, REQUEST, SUCCESS, FAILURE } from '../constants';
import { getAllRoutes} from '../apiCalls/routesApi';

export default function* registerWatcher() {
  yield takeEvery(LOAD_ROUTES + REQUEST, loadAllRoutesFlow);
}

function* loadAllRoutesFlow() {
  try {
    const routes = yield call(getAllRoutes);
    yield put({ type: LOAD_ROUTES + SUCCESS, routes });
  } catch (error) {
    console.log(error)
    yield put({type: LOAD_ROUTES + FAILURE, error})
  }
}
