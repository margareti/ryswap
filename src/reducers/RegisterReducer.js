import { REGISTER_USER, SUCCESS, FAILURE, RESET } from '../constants';

const initialRegisterState = {
  success: null,
  error: null,
  loading: null
};

export default (registerState = initialRegisterState, action) => {
  switch (action.type) {
    case REGISTER_USER + SUCCESS:
      return { ...initialRegisterState, success: true };
    case REGISTER_USER + RESET:
      return { ...initialRegisterState };
    case REGISTER_USER + FAILURE:
      return { ...initialRegisterState, error: true };
    default:
      return { ...registerState };
  }
};
