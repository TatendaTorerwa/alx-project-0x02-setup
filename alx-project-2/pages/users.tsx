// pages/users.tsx
import React, { useEffect, useState } from 'react';
import UserCard from '../components/common/UserCard'; // Import the UserCard component

const UsersPage = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    // Fetch users from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1>Users Page</h1>
      {users.length === 0 ? (
        <p>Loading users...</p>
      ) : (
        users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))
      )}
    </div>
  );
};

export default UsersPage;
