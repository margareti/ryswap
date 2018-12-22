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

export function getFlightSeats(flightId) {
  return axios.get(`${API}/flight/${flightId}/seats`).then(response => response.data);
}

export function addMySeats(payload) {
  const { seats, flightId } = payload;
  return axios.post(`${API}/flight/${flightId}/my-seats`, seats).then(response => response.data);
}

export function createSwapRequest(payload) {
  const { flightId, fromSeatId, toSeatId} = payload;
  return axios.post(`${API}/flight/${flightId}/swap-request`, {fromSeatId, toSeatId}).then(response => response.data);
}
