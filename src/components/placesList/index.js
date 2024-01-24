import Card from '@/components/card';
import Link from 'next/link';
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((r) => r.json());
import React from 'react';

const PlacesList = () => {
  const { data } = useSWR('/api/places', fetcher, { fallbackData: [] });
  console.log(data);
  return (
    <div>
      {' '}
      <Link href="/create" passHref legacyBehavior>
        + place
      </Link>
      <ul role="list">
        {data.map((place) => {
          return (
            <li key={place._id}>
              <Card
                name={place.name}
                image={place.image}
                location={place.location}
                id={`${place._id.$oid ?? place._id}`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PlacesList;
