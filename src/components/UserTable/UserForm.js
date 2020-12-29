import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../slices/users';

const userFormInitialState = { name: '' };
const UserForm = () => {
  const [userForm, updateUserForm] = useState(userFormInitialState);
  const dispatch = useDispatch();

  const onChange = event =>
    updateUserForm({ [event.target.name]: event.target.value });

  const onSubmit = event => {
    event.preventDefault();
    dispatch(addUser(userForm));
    updateUserForm(userFormInitialState);
  };

  return (
    <form className="UserTable-form" onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input name="name" value={userForm.name} onChange={onChange} />
      <button>Add User</button>
    </form>
  );
};

export default UserForm;
