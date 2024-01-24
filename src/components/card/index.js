import Image from 'next/image';
import Link from 'next/link.js';
import styled from 'styled-components';
import { FaArrowRightLong } from 'react-icons/fa6';

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
  height: 40rem;
  width: 100%;
`;

const TextContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50px;
  width: 75%;
`;
const Line = styled.div`
  border-top: 1px solid white;
  margin-top: 5px;
  margin-bottom: 5px;
  // width: 75%;
`;

const Name = styled.span`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
`;
const SpanInfo = styled.span`
  font-size: 16px;
  font-weight: 400;
`;
const Ancor = styled.a`
  display: flex;
  justify-content: space-between;
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
        <Name>{name}</Name>

        <p>Located: {location}</p>
        <Line></Line>
        <Link href={`places/${id}`} passHref legacyBehavior>
          <Ancor>
            <SpanInfo>MORE INFO</SpanInfo>
            <span>
              <FaArrowRightLong />
            </span>
          </Ancor>
        </Link>
      </TextContainer>
    </CardContainer>
  );
}
