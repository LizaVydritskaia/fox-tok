import { AUTH } from '../../services/constants/actionTypes';

export const changeAuthStatus = (status) => ({
  type: AUTH.changeStatus,
  payload: status,
});
