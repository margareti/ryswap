import { combineReducers } from 'redux';
import auth from './AuthReducer';
import register from './RegisterReducer';
import routes from './RoutesReducer';
import foundFlights from './FindFlightsReducer';
import myFlights from './FlightsReducer';


export default combineReducers({
  auth,
  register,
  routes,
  foundFlights,
  myFlights
});
