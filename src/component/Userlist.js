import React from 'react';
import Usercard from './Usercard';

function Userlist({ users }) {
  return (
    <div className="container">
      {users.map((el) => (
        <Usercard  el={el} />
      ))}
    </div>
  );
}

export default Userlist;