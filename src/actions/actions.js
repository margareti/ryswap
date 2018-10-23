import * as Constants from '../constants';

export function loginUser(user) {
  return {
    type: Constants.AUTH_USER,
    payload: user
  };
}

export function registerUser(user) {
  return {
    type: Constants.REGISTER_USER,
    payload: user
  };
}

export function resetUser() {
  return {
    type: Constants.RESET_USER
  };
}

export function getCurrentUser() {
  return {
    type: Constants.GET_CURRENT_USER
  };
}

export function resetRegisterPage() {
  return {
    type: Constants.REGISTER_USER + Constants.RESET
  };
}

export function loadRoutes() {
  return {
    type: Constants.LOAD_ROUTES + Constants.REQUEST
  };
}

export function findFlights(flightsRequest) {
  return {
    type: Constants.FIND_FLIGHTS + Constants.REQUEST,
    payload: flightsRequest
  };
}

export function addFlightToUser(flightId) {
  return {
    type: Constants.ADD_FLIGHT_TO_USER + Constants.REQUEST,
    payload: flightId
  };
}

export function getFlightSeats(flightId) {
  return {
    type: Constants.GET_FLIGHT_SEATS + Constants.REQUEST,
    payload: flightId
  };
}