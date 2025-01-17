// components/common/UserCard.tsx
import React from 'react';
import { UserProps } from '../../interfaces'; // Import the UserProps interface

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', margin: '16px', borderRadius: '8px' }}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Address: {address.street}, {address.city}, {address.zipCode}</p>
    </div>
  );
};

export default UserCard;
