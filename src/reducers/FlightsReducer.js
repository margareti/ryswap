import { GET_USER_FLIGHTS, SUCCESS, FAILURE, RESET } from '../constants';

const initialState = {
  flights: []
};

export  default (flightsState = initialState, action) => {
  const { flights } = action;
  switch (action.type) {
    case GET_USER_FLIGHTS + SUCCESS:
      return { ...flightsState, flights };
    default:
      return { ...flightsState };
  }
};
