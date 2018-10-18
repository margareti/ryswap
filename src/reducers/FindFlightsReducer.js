import { FIND_FLIGHTS, SUCCESS, FAILURE, RESET } from '../constants';

const initialFindFlightsState = {
  flights: []
};

export default (findFlightsState = initialFindFlightsState, action) => {
  const { flights } = action;
  switch (action.type) {
    case FIND_FLIGHTS + SUCCESS:
      console.log(flights);
      return { ...findFlightsState, flights };
    default:
      return { ...findFlightsState };
  }
};
