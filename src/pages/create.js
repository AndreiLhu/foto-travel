import PlaceForm from '@/components/placeForm';
import Link from 'next/link.js';
import { useRouter } from 'next/router';

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
      <h2 id="add-place">Add Place</h2>
      <Link href="/" passHref legacyBehavior>
        <Link>back</Link>
      </Link>
      <PlaceForm onSubmit={addPlace} formName={'add-place'} />
    </>
  );
}
