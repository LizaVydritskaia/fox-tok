import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../services/constants/initialState';

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState.user,
  reducers: {
    set: (state, action) => action.payload,
  },
});

export const { set } = userSlice.actions;
export const userReducer = userSlice.reducer;
