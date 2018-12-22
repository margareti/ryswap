import { CREATE_SWAP_REQUEST, SUCCESS, FAILURE, REQUEST, RESET} from '../constants';

const initialState = {
  success: false,
  error: false,
  loading: false
};

export default ( state = initialState, action) => {
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
      return { ...state };
  }
};
