import { LOAD_ROUTES, SUCCESS, FAILURE, RESET } from '../constants';

const initialRoutesState = {
  routes: []
};

export default (routesState = initialRoutesState, action) => {
  switch (action.type) {
    case LOAD_ROUTES + SUCCESS:
      console.log(action.routes)
      return { ...routesState, routes: action.routes };
    default:
      return { ...routesState };
  }
};
