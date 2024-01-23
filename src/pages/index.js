import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import PlacesList from '@/components/placesList';
import ImageUpload from '@/components/imageUpload';
import Profile from '@/components/profilePage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <Profile />
      <ImageUpload />
      <PlacesList />
    </>
  );
}
