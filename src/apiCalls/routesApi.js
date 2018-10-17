import axios from 'axios';
import { API } from '../constants';

export function getAllRoutes() {
  return axios.get(`${API}/routes`).then(response => response.data);
}
