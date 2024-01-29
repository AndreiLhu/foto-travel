import useSWR from 'swr';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { RiDeleteBin6Line } from 'react-icons/ri';
import blogImage from '../../public/blogImage.jpg';
import styled from 'styled-components';
import Image from 'next/image';
import { TbArrowBackUp } from 'react-icons/tb';
import { syncIndexes } from 'mongoose';

const BlogDetailsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  gap: 100px;
  height: 100vh;
`;

const BlogImageDetails = styled(Image)`
  max-width: 1000px;
  height: auto;
  position: relative;
`;

const BlogContent = styled.h4`
  max-width: 700px;
  font-size: 25px;
  font-weight: 300;
`;
const BlogDetailsTitle = styled.h1`
  margin-bottom: 20px;
`;

const BlogContentContainer = styled.div`
  font-size: 20px;
`;

const BlogDetailsIcons = styled.div`
  position: absolute;
  top: 110px;
  left: 30px;
`;

const IconsDetailsSpan = styled.span`
  font-size: 20px;
`;

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
    <BlogDetailsContainer>
      <div>
        <BlogImageDetails src={blogImage} alt={`Blog image`} />
        <BlogDetailsIcons>
          <button onClick={handleDelete}>
            <IconsDetailsSpan>
              <RiDeleteBin6Line />
            </IconsDetailsSpan>
          </button>
          <button>
            <Link href="/blog">
              <IconsDetailsSpan>
                <TbArrowBackUp />
              </IconsDetailsSpan>
            </Link>
          </button>
        </BlogDetailsIcons>
      </div>
      <BlogContentContainer>
        <BlogDetailsTitle>{data.title} </BlogDetailsTitle>
        <BlogContent>{data.content} </BlogContent>
      </BlogContentContainer>
    </BlogDetailsContainer>
  );
}
