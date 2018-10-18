import axios from 'axios';
import { API } from '../constants';

export function findFlights(flight) {
  console.log(flight)
  return axios.get(`${API}/flights`, {params: flight}).then(response => response.data);
}
