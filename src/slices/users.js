import { createSlice } from '@reduxjs/toolkit';

const reducers = {
  addUser: (state, action) => {
    state.push(action.payload);
  },
};

const initialState = [];

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers,
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
