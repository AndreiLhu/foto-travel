import Image from 'next/image';
import Link from 'next/link.js';

export default function Card({ name, image, location, id, description }) {
  return (
    <div>
      <div>
        <Image
          src={image}
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <h3>{name}</h3>
      </div>
      <p>Location: {location}</p>
      <p>description: {description}</p>
    </div>
  );
}
