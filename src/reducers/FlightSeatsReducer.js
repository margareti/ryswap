import {
  GET_FLIGHT_SEATS,
  SUCCESS
} from '../constants';

const initialState = {
  seats: [],
  flightId: 0,
  loading: null
};

export default (flightSeatsState = initialState, action) => {
  const { flight } = action;
  console
  switch (action.type) {
    
    case GET_FLIGHT_SEATS + SUCCESS:
      return { 
        ...flightSeatsState, 
        seats: flight.seats.slice(),
        flightId: flight.flightId
      };
    default:
      return { ...flightSeatsState };
  }
};
