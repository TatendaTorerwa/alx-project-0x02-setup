import React from 'react';
import { PostProps } from '../../interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border p-4 mb-4 rounded-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{content}</p>
      <p className="text-gray-500">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
