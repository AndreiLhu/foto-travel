import useSWR from 'swr';
import { useRouter } from 'next/router';
import Link from 'next/link';
const fetcher = (url) => fetch(url).then((response) => response.json());
export default function BlogDetails() {
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
      <h1>{data.title} </h1>
      <h3>{data.content} </h3>

      <Link href="/blog">Back to all</Link>
    </>
  );
}
