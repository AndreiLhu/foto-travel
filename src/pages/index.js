import Welcome from '@/components/welcome';
import PlacesList from '@/components/placesList';
import ImageUpload from '@/components/imageUpload';

export default function Home() {
  return (
    <>
      <ImageUpload />
      <Welcome />
      <PlacesList />
    </>
  );
}
