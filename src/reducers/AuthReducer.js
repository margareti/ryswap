import { AUTH_USER } from '../constants'

const initialAuthStore = {};

export default (state = initialAuthStore, action) => {
 
  switch (action.type) {
    
    case AUTH_USER :
    console.log('caught auth user action');
    
    return {...state};
    case 'AUTH_USER_SUCCESS': 
      console.log(action)
      
      return { ...state}
    default:
      return { ...state}
  }
}
