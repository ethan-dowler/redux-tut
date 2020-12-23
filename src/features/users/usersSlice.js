import { createSlice } from '@reduxjs/toolkit';

import * as reducers from './userReducers';

const initialState = [];

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers,
});

export const { addUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
