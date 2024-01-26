import Link from 'next/link';
import { useRouter } from 'next/router.js';
import useSWR from 'swr';
import Image from 'next/image.js';
import Comments from '@/components/comments';
import styled from 'styled-components';
import { TbEdit } from 'react-icons/tb';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { TbArrowBackUp } from 'react-icons/tb';

const ImageDetailsContainer = styled.div`
  position: relative;
  height: 40rem;
  width: 100%;
`;

const ButtonsContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 20px;
`;

const DetailsImage = styled(Image)`
  height: auto;
  width: 60em;
`;
const IconsSpan = styled.span`
  font-size: 20px;
`;

const ImageDescriptionContainer = styled.div`
  display: flex;
  background-color: whitesmoke;
`;
const DescriptionContainer = styled.div`
  position: relative;
  font-size: 20px;
  text-align: left;
  font-weight: 300;
  width: 70%;
  padding-left: 50px;
  padding-right: 50px;
`;
const DetailsTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
`;
const MapLink = styled(Link)`
  position: absolute;
  bottom: 20px;
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
      {' '}
      <ImageDescriptionContainer>
        <ImageDetailsContainer>
          <DetailsImage src={place.image} fill alt=" images" />
        </ImageDetailsContainer>
        <ButtonsContainer>
          <button>
            <Link href={'/'} passHref legacyBehavior>
              <Link>
                <IconsSpan>
                  <TbArrowBackUp />
                </IconsSpan>
              </Link>
            </Link>
          </button>
          <button>
            <Link href={`/places/${id}/edit`} passHref legacyBehavior>
              <Link>
                <IconsSpan>
                  <TbEdit />
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
          <DetailsTitle>
            {place.name}, {place.location}
          </DetailsTitle>
          <p>{place.description}</p>
          <Link href={place.mapURL} passHref legacyBehavior>
            <MapLink>See location on Google Maps </MapLink>
          </Link>
        </DescriptionContainer>
      </ImageDescriptionContainer>
      <Comments
        locationName={place.name}
        comments={place.comments}
        id={id}
        mutate={mutate}
      />
    </>
  );
}
