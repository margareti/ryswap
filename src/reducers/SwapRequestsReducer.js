import { CREATE_SWAP_REQUEST, SUCCESS, FAILURE, REQUEST, RESET, GET_SWAP_REQUESTS} from '../constants';
import { combineReducers } from 'redux';
import SwapRequests from '../components/swapRequests/SwapRequests';


const initialState = {
  success: false,
  error: false,
  loading: false
};

const add =  ( state = initialState, action) => {
   switch (action.type) {
    case CREATE_SWAP_REQUEST + REQUEST:
      return { ...initialState, loading: true };
    case CREATE_SWAP_REQUEST + SUCCESS:
      return { ...initialState, success: true };
    case CREATE_SWAP_REQUEST + FAILURE:
      return { ...initialState, error: true };

    case CREATE_SWAP_REQUEST + RESET: 
      return {...initialState}
    default:
      return state;
  }
};


const initialStateList = {
  swapRequests : {},
  loading: false,
  error: false
}
const list = (state = initialStateList, action) => {
  switch(action.type) {
    case GET_SWAP_REQUESTS + REQUEST :
      return {...initialStateList, loading: true}
    case GET_SWAP_REQUESTS + SUCCESS: 
      return {
        ...state, 
        swapRequests: {
          ...state.swapRequests,
          [action.payload.flightId]: action.payload.swapRequests
        }
      }
    case GET_SWAP_REQUESTS + FAILURE:
      return {...initialStateList, error : true}
    default: 
      return state
  }
}

const swapRequestsReducer = combineReducers({
  add,
  list
});

export default swapRequestsReducer;