import Link from 'next/link';
import { useRouter } from 'next/router.js';
import useSWR from 'swr';
import Image from 'next/image.js';

import styled from 'styled-components';

const fetcher = (url) => fetch(url).then((r) => r.json());
export default function Blog() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const {
    data: image,
    isLoading,
    error,
    mutate,
  } = useSWR(`/api/uploads/${id}`, fetcher);
  console.log('upload', image);

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  async function deleteBlog() {
    await fetch(`/api/uploads/${id}`, { method: 'DELETE' });
    router.push('/');
  }
  return (
    <>
      <Link href={'/'} passHref legacyBehavior>
        <Link justifySelf="start">back</Link>
      </Link>
      <div>
        <Image src={image.imagePath} fill alt=" images" />
      </div>

      <p>{image.description}</p>
      <button>
        <Link href={`/blog/${id}/edit`} passHref legacyBehavior>
          {/* ///////////////////////////////////////// */}
          <Link>Edit</Link>
        </Link>
        <button onClick={deleteBlog} type="button" variant="delete">
          Delete
        </button>
      </button>
    </>
  );
}
