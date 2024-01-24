import Image from 'next/image';
import Link from 'next/link.js';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  color: white;
  max-width: 600px;
  gap: 20px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ImageContainer = styled.div`
  height: 50rem;
`;

const TextContainer = styled.div`
  position: absolute;
  bottom: 8px;
  right: 16px;
`;

export default function Card({ name, image, location, id }) {
  return (
    <CardContainer>
      <ImageContainer>
        <StyledImage
          src={image}
          fill
          alt={`An image of ${name}, located in ${location}`}
        />
      </ImageContainer>
      <TextContainer>
        <figcaption>{name}</figcaption>

        <p>Location: {location}</p>
        <Link href={`places/${id}`} passHref legacyBehavior>
          <a>
            <span>More Info</span>
          </a>
        </Link>
      </TextContainer>
    </CardContainer>
  );
}
