import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter';
import usersReducer from './slices/users';

export default configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});
