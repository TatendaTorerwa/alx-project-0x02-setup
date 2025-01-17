import React from 'react';
import Button from '../components/common/Button';

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Button size="small" shape="rounded-sm">Small Button</Button>
      <Button size="medium" shape="rounded-md">Medium Button</Button>
      <Button size="large" shape="rounded-full">Large Button</Button>
    </div>
  );
};

export default AboutPage;
