import axios from 'axios';
import { API } from "../constants";


export function callAuthApi(user) {
  console.log('logging user')
  return  axios.post(`${API}/login`, user).then(response => response.data);
}  