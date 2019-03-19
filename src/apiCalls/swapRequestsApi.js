import axios from 'axios';
import { API } from '../constants';

export function createSwapRequest(payload) {
  const { flightId, fromSeatId, toSeatId} = payload;
  return axios.post(`${API}/flight/${flightId}/swap-request`, {fromSeatId, toSeatId}).then(response => response.data);
}

export function getSwapRequests(payload) {
  const { flightId} = payload;
  return axios.get(`${API}/flight/${flightId}/swap-requests?status=PENDING`).then(response => response.data);
}

export function cancelSwapRequest(payload) {
  const { swapRequestId} = payload;
  return axios.post(`${API}/swap-request/${swapRequestId}/cancel`).then(response => response.data);
}

export function declineSwapRequest(payload) {
  const { swapRequestId} = payload;
  return axios.post(`${API}/swap-request/${swapRequestId}/decline`).then(response => response.data);
}

export function acceptSwapRequest(payload) {
  const { swapRequestId} = payload;
  return axios.post(`${API}/swap-request/${swapRequestId}/accept`).then(response => response.data);
}

