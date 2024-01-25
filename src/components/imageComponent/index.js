import Image from 'next/image';

export function ImageComponent({ image }) {
  return (
    <div>
      <Image
        alt=""
        src={image.src}
        fill={true}
        style={{ objectFit: 'contain' }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={true}
      />
    </div>
  );
}
