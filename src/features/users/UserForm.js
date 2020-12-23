import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './usersSlice';

const userInitialState = { name: '' };
const UserForm = () => {
  const [user, updateUser] = useState(userInitialState);
  const dispatch = useDispatch();

  const onChange = event =>
    updateUser({ [event.target.name]: event.target.value });

  const onSubmit = event => {
    event.preventDefault();
    dispatch(addUser(user));
    updateUser(userInitialState);
  };

  return (
    <form className="UserTable-form" onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input name="name" value={user.name} onChange={onChange} />
      <button>Add User</button>
    </form>
  );
};

export default UserForm;
