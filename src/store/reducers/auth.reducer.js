import { initialState } from '../../services/constants/initialState';
import { AUTH } from '../../services/constants/actionTypes';

export const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case AUTH.changeStatus:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};
