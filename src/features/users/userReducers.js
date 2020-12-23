export const addUser = (state, action) => {
  state.push(action.payload);
};

export const deleteUser = (state, action) => {
  console.log('deleting user');
  console.log(state);
  console.log(action);
};
