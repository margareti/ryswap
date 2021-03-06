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

export function addMySeats(flightId, seats) {
  return {
    type: Constants.ADD_MY_SEATS + Constants.REQUEST,
    payload: {
      flightId,
      seats
    }
  };
} 

export function getUserFlights() {
  return  { type: Constants.GET_USER_FLIGHTS + Constants.REQUEST }
}

export function getSwapRequests(flightId) {
  return  {
    type: Constants.GET_SWAP_REQUESTS + Constants.REQUEST,
    payload: {
      flightId
    }
  }
}

export function cancelSwapRequest(swapRequestId, flightId) {
  return  {
    type: Constants.CANCEL_SR + Constants.REQUEST,
    payload: {
      swapRequestId,
      flightId
    }
  }
}

export function declineSwapRequest(swapRequestId, flightId) {
  return  {
    type: Constants.DECLINE_SR + Constants.REQUEST,
    payload: {
      swapRequestId,
      flightId
    }
  }
}

export function acceptSwapRequest(swapRequestId, flightId) {
  return  {
    type: Constants.ACCEPT_SR + Constants.REQUEST,
    payload: {
      swapRequestId,
      flightId
    }
  }
}