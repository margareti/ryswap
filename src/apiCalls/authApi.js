import axios from 'axios';
import { API } from '../constants';

export function login(user) {
  return axios.post(`${API}/login`, user).then(response => response.data);
}

export function logout() {
  console.log('calling logout user');
  return axios.post(`${API}/logout`).then(response => response.data);
}
