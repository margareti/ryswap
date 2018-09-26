import reducer from './reducers/Reducers'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import sagas from './sagas/sagas';
// console.log('sagas in store', sagas)
import authUserSaga from './sagas/authUserSaga';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(authUserSaga)
//DEV Only, no need in prod
window.store = store

export default store
