import Welcome from '@/components/welcome';
import PlacesList from '@/components/placesList';
import useSWR from 'swr';
import { ImageUploader } from '@/components/imageUploader';
import { ImageList } from '@/components/imageList';
const fetcher = (url) => fetch(url).then((r) => r.json());
export default function Home() {
  const { data: images, isLoading } = useSWR('/api/images', fetcher);
  if (isLoading) {
    return 'loading...';
  }
  return (
    <>
      <ImageUploader />
      <ImageList images={images} />
      <Welcome />
      <PlacesList />
    </>
  );
}
