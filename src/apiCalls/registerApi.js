import axios from 'axios';
import { API } from '../constants';

export function registerApi(user) {
  const req = { ...user };
  req.username = req.email;

  return axios.post(`${API}/registerUser`, req).then(response => response.data);
}
