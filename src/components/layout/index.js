import styled from 'styled-components';
import Head from 'next/head.js';
import Navbar from '../navBar';
import Footer from '../footer';

const Main = styled.main`
  width: 100%;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Foto Travel</title>
      </Head>
      <Navbar />

      <Main>{children}</Main>
      <Footer />
    </>
  );
}
