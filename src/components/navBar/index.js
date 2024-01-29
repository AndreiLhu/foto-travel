import Link from 'next/link';
import styled from 'styled-components';

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  color: black;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 50px;
  padding-right: 50px;
`;

const SecondNavigationContainer = styled.div`
  display: flex;
  gap: 50px;
`;

export default function Navbar() {
  return (
    <NavigationContainer>
      <h1>
        <Link href="/">Foto Travel</Link>
      </h1>
      <SecondNavigationContainer>
        <h3>
          <Link href="/">Home</Link>
        </h3>
        <h3>
          <Link href="/blog">Blogs</Link>
        </h3>
      </SecondNavigationContainer>
      <h2>
        <Link
          href="https://media.tenor.com/8jlC25Qb-jEAAAAC/spiderman-funny.gif"
          target="blank"
        >
          Login
        </Link>
      </h2>
    </NavigationContainer>
  );
}
