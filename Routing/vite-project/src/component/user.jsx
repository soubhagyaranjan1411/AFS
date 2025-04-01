import React from 'react';

const User = (props) => {
  return (
    <div>
      <span>Username: {props.username}</span>
      <span>Email: {props.email}</span>
    </div>
  );
};

export default User;