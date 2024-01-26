import PlaceForm from '@/components/placeForm';
import Link from 'next/link.js';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { TbArrowBackUp } from 'react-icons/tb';

const AddPlaceTitle = styled.h2`
  margin-top: 20px;
  text-align: center;
`;
const BackLink = styled(Link)`
  font-size: 30px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export default function CreatePlacePage() {
  const router = useRouter();

  async function addPlace(place) {
    const response = await fetch('/api/places', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(place),
    });

    if (response.ok) {
      router.push('/');
    }
    if (!response.ok) {
      const error = await response.json();
      console.log('Error:', error, response.status);
    }
  }

  return (
    <>
      <AddPlaceTitle id="add-place">Add new place</AddPlaceTitle>
      <Link href="/" passHref legacyBehavior>
        <BackLink>
          <TbArrowBackUp />
        </BackLink>
      </Link>
      <PlaceForm onSubmit={addPlace} formName={'add-place'} />
    </>
  );
}
