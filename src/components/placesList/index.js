import useSWR from 'swr';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../card';
const fetcher = (url) => fetch(url).then((r) => r.json());

export default function PlacesList() {
  const router = useRouter();
  // const { data, error, isLoading } = useSWR('/api/places', fetcher);
  const { data, error, isLoading } = useSWR('/api/places', fetcher, {
    fallbackData: [],
  });

  if (error) return <div>failed to load</div>;
  if (isLoading) return <h3>Loading...</h3>;

  console.log(data);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Link href="/create" passHref legacyBehavior>
        + place
      </Link>
      <div role="list">
        {data.map((place) => {
          return (
            <li key={place._id}>
              <Card
                name={place.name}
                image={place.image}
                location={place.location}
                description={place.description}
                id={`${place._id.$oid ?? place._id}`}
              />
            </li>
          );
        })}
      </div>
    </>
  );
}
