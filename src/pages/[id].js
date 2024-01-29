import useSWR from 'swr';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { RiDeleteBin6Line } from 'react-icons/ri';
const fetcher = (url) => fetch(url).then((response) => response.json());
export default function BlogDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/blogs/${id}`, fetcher);

  async function handleDelete() {
    const response = await fetch(`/api/blogs/${id}`, { method: 'DELETE' });

    if (!response.ok) {
      console.log(response.status);
      return;
    }

    router.push('/blog');
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <h1>{data.title} </h1>
      <h3>{data.content} </h3>
      <button onClick={handleDelete}>
        <span role="img" aria-label="Delete Icon">
          <RiDeleteBin6Line />
        </span>
      </button>

      <Link href="/blog">Back to all</Link>
    </>
  );
}
