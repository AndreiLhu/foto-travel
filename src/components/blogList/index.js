import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import blogImage from '../../../public/blogImage.jpg';
import styled from 'styled-components';

const TitleBlog = styled(Link)`
  display: flex;
  font-size: 30px;
`;

const BlogUl = styled.ul``;

const BlogImage = styled(Image)`
  width: 200px;
  height: auto;
`;

const BlogListLi = styled.li`
  max-width: 700px;
  list-style-type: none;
  margin-bottom: 30px;
`;

const fetcher = (url) => fetch(url).then((response) => response.json());
export default function BlogList() {
  const { data, isLoading } = useSWR('/api/blogs', fetcher, {
    fallbackData: [],
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <BlogUl>
      {data.map((blog) => (
        <BlogListLi key={blog._id}>
          <TitleBlog href={`/${blog._id}`}>{blog.title}</TitleBlog>
          <BlogImage src={blogImage} alt={`Blog image`} />
          <h3>{blog.content}</h3>
        </BlogListLi>
      ))}
    </BlogUl>
  );
}
