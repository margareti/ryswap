import { FIND_FLIGHTS, ADD_FLIGHT_TO_USER, SUCCESS, FAILURE, RESET } from '../constants';

const initialFindFlightsState = {
  flights: []
};

export default (findFlightsState = initialFindFlightsState, action) => {
  
  switch (action.type) {
    case FIND_FLIGHTS + SUCCESS:
      const { flights } = action;
      return { ...findFlightsState, flights };

    case ADD_FLIGHT_TO_USER + SUCCESS:
      return { ...initialFindFlightsState };
    default:
      return { ...findFlightsState };
  }
};
