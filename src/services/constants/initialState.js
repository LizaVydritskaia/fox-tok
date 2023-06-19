import { authStatuses } from './authStatuses';

export const initialState = {
  auth: {
    status: authStatuses.loggedOut,
  },
  user: {
    id: null,
    name: null,
    email: null,
  }
}