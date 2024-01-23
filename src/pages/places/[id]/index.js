import Link from 'next/link';
import { useRouter } from 'next/router.js';
import useSWR from 'swr';
import Image from 'next/image.js';
import Comments from '@/components/comments';
const fetcher = (url) => fetch(url).then((r) => r.json());
export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const {
    data: place,
    isLoading,
    error,
    mutate,
  } = useSWR(`/api/places/${id}`, fetcher);
  console.log('place', place);

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  async function deletePlace() {
    await fetch(`/api/places/${id}`, { method: 'DELETE' });
    router.push('/');
  }
  return (
    <>
      <Link href={'/'} passHref legacyBehavior>
        <Link justifySelf="start">back</Link>
      </Link>
      <div>
        {/* <Image
          src={place.image}
          priority
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt=""
        /> */}
      </div>
      <h2>
        {place.name}, {place.location}
      </h2>
      <Link href={place.mapURL} passHref legacyBehavior>
        <Link>Location on Google Maps</Link>
      </Link>
      <p>{place.description}</p>
      <button>
        <Link href={`/places/${id}/edit`} passHref legacyBehavior>
          <Link>Edit</Link>
        </Link>
        <button onClick={deletePlace} type="button" variant="delete">
          Delete
        </button>
      </button>
      <Comments
        locationName={place.name}
        comments={place.comments}
        id={id}
        mutate={mutate}
      />
    </>
  );
}
