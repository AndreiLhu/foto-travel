import useSWR from 'swr';
import { useRouter } from 'next/router';
import Link from 'next/link';
const fetcher = (url) => fetch(url).then((response) => response.json());
export default function Blog() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/blogs/${id}`, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <small>ID: {id}</small>
      <h1>{data.blog} </h1>
      <Link href="/">Back to all</Link>
    </>
  );
}
