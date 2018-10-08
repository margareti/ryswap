import reducer from './reducers/Reducers';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas/sagas';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(sagas);
//DEV Only, no need in prod
window.store = store;

export default store;
