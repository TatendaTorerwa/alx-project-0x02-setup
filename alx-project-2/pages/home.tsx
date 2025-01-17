import React, { useState } from 'react';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([
    { title: 'Existing Card 1', content: 'This is content for an existing card.' },
    { title: 'Existing Card 2', content: 'Another example of card content.' },
    { title: 'Existing Card 3', content: 'Another example of card content.' },
  ]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleOpenModal}>Add New Post</button>
      <PostModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleAddPost} />
      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default HomePage;
