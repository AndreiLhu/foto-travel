import BlogForm from '@/components/blogForm';
import BlogList from '@/components/blogList';
import React from 'react';
import styled from 'styled-components';
const BlogsContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  padding-top: 50px;
  // background-color: lightblue;
  max-width: 1500px;
`;

const Blogs = () => {
  return (
    <BlogsContainer>
      <BlogList />
      <BlogForm />
    </BlogsContainer>
  );
};

export default Blogs;
