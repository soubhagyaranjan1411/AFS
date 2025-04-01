import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const UserList = () => {
  let [users, setUsers] = useState([
    { id: 1, username: 'soubhagya', email: 'srj@gmail.com' },
    { id: 2, username: 'sumitnanuan', email: 'nanuan123@gmail.com' },
    { id: 3, username: 'adde', email: 'adde123@gmail.com' },
  ]);

  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <Link key={user.id} to={`/userlist/${user.id}`}>
          {user.username}
        </Link>
      ))}
      <Outlet />
    </div>
  );
};

export default UserList;