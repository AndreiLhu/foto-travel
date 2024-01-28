import useSWR from 'swr';
import Link from 'next/link';
const fetcher = (url) => fetch(url).then((response) => response.json());
export default function BlogList() {
  const { data, isLoading } = useSWR('/api/blogs', fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ul>
      {data.map((blog) => (
        <li key={blog._id}>
          <Link href={`/${blog._id}`}>{blog.title}</Link>
          <h3>{blog.content}</h3>
        </li>
      ))}
    </ul>
  );
}
