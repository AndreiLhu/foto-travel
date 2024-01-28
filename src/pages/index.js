import Welcome from '../components/welcome/index';
import PlacesList from '@/components/placesList';
import useSWR from 'swr';

export default function Home() {
  return (
    <>
      <Welcome />
      <PlacesList />
    </>
  );
}
