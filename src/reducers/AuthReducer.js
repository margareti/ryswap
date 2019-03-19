import { GET_CURRENT_USER, AUTH_USER, SUCCESS, FAILURE, RESET_USER } from '../constants';

const initialAuthStore = {
  user: null,
  loggedIn: null
};

export default (state = initialAuthStore, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state };

    case AUTH_USER + SUCCESS:
      return { ...state, loggedIn: true };

    case RESET_USER + SUCCESS:
      return { ...initialAuthStore, loggedIn: false };

    case GET_CURRENT_USER + SUCCESS:
      return { ...state, user: action.user };

    case GET_CURRENT_USER + FAILURE:
      return { ...initialAuthStore, loggedIn: false };

    default:
      return { ...state };
  }
};
