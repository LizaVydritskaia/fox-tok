import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../services/constants/initialState';

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState.auth,
  reducers: {
    changeStatus: (state, action) => ({ ...state, status: action.payload }),
  },
});

export const { changeStatus } = authSlice.actions;
export const authReducer = authSlice.reducer;
