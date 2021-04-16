import React from 'react';

function UserList({ favoriteUsers }) {
  return <ul>
    {favoriteUsers.map((user) => (
    	<li key={user}>{user}</li>
    ))}
    </ul>
}

export default UserList