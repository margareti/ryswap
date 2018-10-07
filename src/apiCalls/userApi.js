import axios from 'axios';
import { API } from "../constants";


export function getCurrentUser(token) {
  return axios.get(`${API}/user`).then(response => response.data);
}