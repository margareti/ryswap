import { AUTH_USER } from '../constants'

export default (user = {}, action) => {
 
  switch (action.type) {
    
    case AUTH_USER :
    console.log('caught auth user action');
    
    return user;
    case 'AUTH_USER_SUCCESS': 
      console.log(action)
      return user;
    default:
      return user;
  }
}
