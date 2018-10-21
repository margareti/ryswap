import axios from 'axios';
import { API } from '../constants';

export function findFlights(flight) {
  return axios.get(`${API}/flights`, { params: flight }).then(response => response.data);
}

export function addFlightToUser(flightId) {
  return axios.post(`${API}/user/flights/${flightId}`).then(response => response.data);
}

export function getMyFlights() {
  return axios.get(`${API}/user/flights`).then(response => response.data);
}