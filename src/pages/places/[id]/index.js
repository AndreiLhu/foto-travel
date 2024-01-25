import Link from 'next/link';
import { useRouter } from 'next/router.js';
import useSWR from 'swr';
import Image from 'next/image.js';
import Comments from '@/components/comments';
import styled from 'styled-components';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';

const ImageDetailsContainer = styled.div`
  position: relative;
  height: 40rem;
  width: 100%;
`;

const ButtonsContainer = styled.div`
  position: absolute;
  top: 110px;
  right: 16px;
`;

const DetailsImage = styled(Image)`
  height: auto;
  width: 60em;
`;
const IconsSpan = styled.span`
  font-size: 20px;
`;

const DescriptionContainer = styled.div`
  background-color: lightblue;
`;

const fetcher = (url) => fetch(url).then((r) => r.json());
export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const {
    data: place,
    isLoading,
    error,
    mutate,
  } = useSWR(`/api/places/${id}`, fetcher);
  console.log('place', place);

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  async function deletePlace() {
    await fetch(`/api/places/${id}`, { method: 'DELETE' });
    router.push('/');
  }
  return (
    <>
      <Link href={'/'} passHref legacyBehavior>
        <Link justifySelf="start">back</Link>
      </Link>
      <ImageDetailsContainer>
        <DetailsImage src={place.image} fill alt=" images" />
      </ImageDetailsContainer>
      <ButtonsContainer>
        <button>
          <Link href={`/places/${id}/edit`} passHref legacyBehavior>
            <Link>
              <IconsSpan>
                <FaEdit />
              </IconsSpan>
            </Link>
          </Link>
        </button>
        <button onClick={deletePlace} type="button" variant="delete">
          <IconsSpan>
            <RiDeleteBin6Line />
          </IconsSpan>
        </button>
      </ButtonsContainer>
      <DescriptionContainer>
        <h2>
          {place.name}, {place.location}
        </h2>
        <p>{place.description}</p>
      </DescriptionContainer>

      <Link href={place.mapURL} passHref legacyBehavior>
        <Link>Location on Google Maps</Link>
      </Link>

      <Comments
        locationName={place.name}
        comments={place.comments}
        id={id}
        mutate={mutate}
      />
    </>
  );
}
