import BlogForm from '@/components/blogForm';
import BlogList from '@/components/blogList';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { TbArrowBackUp } from 'react-icons/tb';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const BlogsContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  padding-top: 50px;
  max-width: 1500px;
`;

const Blogs = () => {
  const { mutate } = useSWR('/api/blogs');

  const addBlog = useCallback(
    async (blog) => {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blog),
      });

      if (response.ok) {
        mutate();
      }
      if (!response.ok) {
        const error = await response.json();
        console.log('Error:', error, response.status);
      }
    },
    [mutate]
  );

  return (
    <BlogsContainer>
      <BlogList />
      <BlogForm onSubmit={addBlog} />
    </BlogsContainer>
  );
};

export default Blogs;
