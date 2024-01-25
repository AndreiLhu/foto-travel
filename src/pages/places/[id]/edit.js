import { useRouter } from 'next/router';
import Link from 'next/link';
import useSWR from 'swr';
import PlaceForm from '@/components/placeForm';

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
        mutate();
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  return (
    <>
      <h2 id="edit-place">Edit Place</h2>
      <Link href={`/places/${id}`} passHref legacyBehavior>
        <Link justifySelf="start">back</Link>
      </Link>
      <PlaceForm
        onSubmit={editPlace}
        formName={'edit-place'}
        defaultData={place}
      />
    </>
  );
}