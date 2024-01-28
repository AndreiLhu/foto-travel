import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import blogImage from '../../../public/blogImage.jpg';
import styled from 'styled-components';

const BlogImage = styled(Image)`
  width: 400px;
  height: auto;
`;

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
          <BlogImage src={blogImage} alt={`Blog image`} />
          <h3>{blog.content}</h3>
        </li>
      ))}
    </ul>
  );
}
