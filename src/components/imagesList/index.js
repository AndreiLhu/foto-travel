import useSWR from 'swr';
import { useRouter } from 'next/router';
import Image from 'next/image';
const fetcher = (url) => fetch(url).then((r) => r.json());

export default function ImagesList() {
  const router = useRouter();
  const { data, error, isLoading } = useSWR('/api/places', fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <h3>Loading...</h3>;

  console.log(data);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {data.map((image) => (
        <li key={image._id}>
          <h2>{image.name}</h2>
          <p>{image.location}</p>
          <Image
            src={image.image}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </li>
      ))}
    </ul>
  );
}
