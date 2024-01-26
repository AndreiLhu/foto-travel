import { useRouter } from 'next/router';
import Link from 'next/link';
import useSWR from 'swr';
import ImageUpload from '@/components/imageUpl';

export default function EditBlog() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data: blog, isLoading, error, mutate } = useSWR(`/api/uploads/${id}`);

  async function editBlog(data) {
    try {
      const response = await fetch(`/api/uploads/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
      <h2 id="edit-place">Edit blog</h2>
      <Link href={`/uploads/${id}`} passHref legacyBehavior>
        <Link>back</Link>
      </Link>
      <ImageUpload
        onSubmit={editBlog}
        formName={'edit-blog'}
        defaultData={blog}
      />
    </>
  );
}
