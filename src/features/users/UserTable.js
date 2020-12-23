import React from 'react';
import { useSelector } from 'react-redux';

import UserForm from './UserForm';

export default function Counter() {
  // const count = useSelector(selectCount);
  const users = useSelector(state => state.users);

  return (
    <div className="UserTable">
      <h2 className="UserTable-title">Users Table</h2>

      <UserForm />

      {users.length ? <UserList users={users} /> : <EmptyState />}
    </div>
  );
}

const UserList = ({ users }) => (
  <ul className="UserTable-list">
    {users.map((user, index) => (
      <User key={index} user={user} />
    ))}
  </ul>
);

const User = ({ user }) => <li className="UserTable-user">{user.name}</li>;

const EmptyState = () => (
  <div className="UserTable-emptyState">Add a User to get Started!</div>
);
