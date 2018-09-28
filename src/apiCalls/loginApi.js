import axios from 'axios';
import { API } from "../constants";


export function callAuthApi(user) {
  return  axios.post(`${API}/auth/login`, user).then(response => response.data);
}