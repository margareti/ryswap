import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import 'normalize.css';
import './index.css';

axios.interceptors.request.use(requestConfig => {
  const token = localStorage.token;
  requestConfig.headers['Authorization'] = `Bearer ${token}`;
  return requestConfig;
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
