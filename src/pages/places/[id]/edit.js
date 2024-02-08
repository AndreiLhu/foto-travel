import { useRouter } from 'next/router';
import Link from 'next/link';
import useSWR from 'swr';
import PlaceForm from '@/components/placeForm';
import { TbArrowBackUp } from 'react-icons/tb';
import styled from 'styled-components';
const EditPlaceTitle = styled.h2`
  margin-top: 20px;
  text-align: center;
`;
const EditBackLink = styled(Link)`
  font-size: 30px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export default function EditPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data: place, isLoading, error, mutate } = useSWR(`/api/places/${id}`);

  async function editPlace(place) {
    try {
      const response = await fetch(`/api/places/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(place),
      });

      if (response.ok) {
        // mutate();
        router.push(`/places/${id}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  return (
    <>
      <EditPlaceTitle id="edit-place">Edit Place</EditPlaceTitle>
      <Link href={`/places/${id}`} passHref legacyBehavior>
        <EditBackLink>
          <TbArrowBackUp />
        </EditBackLink>
      </Link>
      <PlaceForm
        onSubmit={editPlace}
        formName={'edit-place'}
        defaultData={place}
      />
    </>
  );
}
