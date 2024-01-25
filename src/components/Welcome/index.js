import Image from 'next/image';
import React from 'react';
import aurora from '../../../public/norway-aurora.jpg';
import styled from 'styled-components';
const WelcomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: black;
`;

const WelcomeTitle = styled.h1`
  font-size: 50px;
  max-width: 500px;
  text-align: center;
  margin: auto;
  font-weight: 300;
  color: white;
`;

const WelcomeImage = styled(Image)`
  height: auto;
  width: 60em;
`;

const Welcome = () => {
  return (
    <WelcomeContainer>
      <WelcomeTitle>CREATE AND SHARE YOUR PHOTO STORIES.</WelcomeTitle>
      <WelcomeImage src={aurora} alt={`Welcome image`} />
    </WelcomeContainer>
  );
};

export default Welcome;
