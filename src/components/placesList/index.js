import Card from '@/components/card';
import Link from 'next/link';
import useSWR from 'swr';
import React from 'react';
import styled from 'styled-components';
import { IoIosAddCircleOutline } from 'react-icons/io';

const PlaceListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
`;
const AddSpan = styled.span`
  background-color: whitesmoke;
  font-size: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: lightgray;
`;

const fetcher = (url) => fetch(url).then((r) => r.json());

const PlacesList = () => {
  const { data } = useSWR('/api/places', fetcher, { fallbackData: [] });
  console.log(data);
  return (
    <div>
      {' '}
      <PlaceListContainer role="list">
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
        <Link href="/create" passHref legacyBehavior>
          <AddSpan>
            <IoIosAddCircleOutline />
          </AddSpan>
        </Link>
      </PlaceListContainer>
    </div>
  );
};

export default PlacesList;
