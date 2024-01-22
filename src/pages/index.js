import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import ImagesList from '@/components/imagesList';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <ImagesList />

      <h1>Home page</h1>
    </>
  );
}
