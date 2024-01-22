import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import PlacesList from '@/components/placesList';
import Login from '@/components/login';
import ImageUpload from '@/components/imageUpload';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <ImageUpload />
      <PlacesList />
    </>
  );
}
