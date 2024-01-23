import Image from 'next/image';
import Link from 'next/link.js';

export default function Card({ name, image, location, id }) {
  return (
    <div>
      <div>
        <div>
          {/* <Image
            src={image}
            fill
            sizes="(max-width: 68px) 30vw,
              (max-width: 200px) 50vw,
              33vw"
            alt={`An image of ${name}, located in ${location}`}
          /> */}
        </div>
        <figcaption>{name}</figcaption>
      </div>
      <p>Location: {location}</p>
      <Link href={`places/${id}`} passHref legacyBehavior>
        <a>
          <span>More Info</span>
        </a>
      </Link>
    </div>
  );
}
