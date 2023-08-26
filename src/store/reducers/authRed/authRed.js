import {LOG_IN} from '../../actions/types';

const initialState = {isUserLoggedIn: false};

export default function authRed(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {...action.payload, isUserLoggedIn: true};
    case 'clearAuth':
      return {};
    default:
      return state;
  }
}
