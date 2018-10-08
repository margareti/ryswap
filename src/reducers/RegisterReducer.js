import { REGISTER_USER, SUCCESS } from '../constants'

export default (user = {}, action) => {
  switch (action.type) {
    case REGISTER_USER + SUCCESS:
      return user;
    default:
      return user;
  }
}
