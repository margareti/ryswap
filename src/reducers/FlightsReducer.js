import {
  GET_USER_FLIGHTS,
  SUCCESS,
  ADD_FLIGHT_TO_USER,
} from '../constants';

const initialState = {
  flights: []
};

export default (flightsState = initialState, action) => {
  const { flights, payload } = action;
  switch (action.type) {
    case GET_USER_FLIGHTS + SUCCESS:
      return { ...flightsState, flights };
    case ADD_FLIGHT_TO_USER + SUCCESS:
      const newState = { ...flightsState };
      newState.flights = flightsState.flights.slice();
      newState.flights.push(payload);
      return newState;
    default:
      return { ...flightsState };
  }
};
