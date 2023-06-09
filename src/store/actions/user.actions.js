import { USER } from '../../services/constants/actionTypes';

export const setUser = (payload) => ({
  type: USER.set,
  payload,
});
