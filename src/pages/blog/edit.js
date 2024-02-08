import { useRouter } from 'next/router';
import Link from 'next/link';
import useSWR from 'swr';

import { TbArrowBackUp } from 'react-icons/tb';
import styled from 'styled-components';
import BlogForm from '@/components/blogForm';

export default function EditPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data: blog, isLoading, error, mutate } = useSWR(`/api/blogs/${id}`);

  async function editBlog(blog) {
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blog),
      });

      if (response.ok) {
        mutate();
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  return (
    <>
      <h2 id="edit-blog">Edit Blog</h2>
      <Link href={`/blogs/${id}`} passHref legacyBehavior>
        <Link>
          <TbArrowBackUp />
        </Link>
      </Link>
      <BlogForm
        onSubmit={editBlog}
        blogFormName={'edit-blog'}
        defaultData={blog}
      />
    </>
  );
}
