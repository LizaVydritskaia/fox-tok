import { initialState } from '../../services/constants/initialState';
import { USER } from '../../services/constants/actionTypes';

export const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case USER.set:
      return { ...action.payload };
    default:
      return state;
  }
};
