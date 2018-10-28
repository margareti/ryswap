import { GET_USER_FLIGHTS, GET_FLIGHT_SEATS, SUCCESS, FAILURE, RESET, ADD_FLIGHT_TO_USER } from '../constants';

const initialState = {
  flights: [],
  seats: []
};

export  default (flightsState = initialState, action) => {
  const { flights , payload, seats} = action;
  switch (action.type) {
    case GET_USER_FLIGHTS + SUCCESS:
      return { ...flightsState, flights };
    case ADD_FLIGHT_TO_USER + SUCCESS:
      const newState ={ ...flightsState};
      newState.flights = flightsState.flights.slice();
      newState.flights.push(payload);
      return newState;
    case GET_FLIGHT_SEATS + SUCCESS: 
      return  {...flightsState, seats}
    default:
      return { ...flightsState };
  }
};
