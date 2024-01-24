import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: black;
  color: white;
  display: flex;
  gap: 100px;
  align-items: baseline;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 50px;
  padding-right: 50px;
`;
const IconsContainer = styled.div`
  display: flex;
  margin-top: 50px;
  font-size: 20px;
  gap: 30px;
`;
const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <h1>
          <Link href="/">Foto Travel</Link>
        </h1>
        <IconsContainer>
          <a href="https://github.com/AndreiLhu" target="blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/andrei-lucian-leahu/"
            target="blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/?lang=en">
            <FaTwitterSquare />
          </a>
        </IconsContainer>
      </div>
      <LinksContainer>
        <h3>
          <Link href="/">Home</Link>
        </h3>
        <h3>
          <Link href="/blog">Blogs</Link>
        </h3>
      </LinksContainer>
      <h3>
        <Link href="/profile-page">Login</Link>
      </h3>
    </FooterContainer>
  );
};

export default Footer;
