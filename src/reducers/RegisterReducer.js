import { REGISTER_USER, SUCCESS } from '../constants'

export default (user = {}, action) => {
  console.log(action.type);
  
  switch (action.type) {
    case REGISTER_USER + SUCCESS: 
      console.log(action)
      return user;
    default:
      return user;
  }
}
