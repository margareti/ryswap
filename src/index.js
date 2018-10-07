import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
// import AppRoute from './AppRoute';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import axios from 'axios'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
)

axios.interceptors.request.use((requestConfig) => {
  const token = localStorage.token;
  requestConfig.headers['Authorization'] = `Bearer ${token}`;
  return requestConfig;
});


registerServiceWorker();
