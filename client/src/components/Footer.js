import React from 'react';
import styled from 'styled-components';
import { links, socials, companyInfo } from './footerData';


const Footer = () => {
  return (
    <Container>
      <UpperContainer>
        <LinkContainer>
          {links.map((item, idx) => (
            <div key={idx}>
              <a href={item.url} target="_blank">
                {item.desc}
              </a>
            </div>
          ))}
        </LinkContainer>
        <SocialContainer>
          {socials.map((item, idx) => (
            <div key={idx}>
              <Button
                imgSrc={item.imgSrc}
                onClick={() => window.open(item.url, '_blank')}
              />
            </div>
          ))}
        </SocialContainer>
      </UpperContainer>
      <Divider />
      <InfoContainer>
        {companyInfo.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </InfoContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  padding: 60px;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const UpperContainer = styled.section`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
`;

const LinkContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  li + li::before {
    content: '|';
    margin-right: 5px;
  }
  a {
    font-size: 16px;
    color: #000;
    &:hover {
      font-weight: 700;
    }
  }
  @media screen and (max-width: 768px) {
    gap: 10px;
  }
  @media screen and (max-width: 576px) {
    gap: 5px;
    li + li::before {
      margin-right: 5px;
    }
    a {
      font-size: 16px;
    }
  }
`;

const SocialContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-self: center;
  gap: 14px;
`;

const Button = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  ${({ imgSrc }) => `background-image: url(${imgSrc});`}
`;

const Divider = styled.div`
  margin-top: 22px;
  margin-bottom: 30px;
  width: 100%;
  height: 1px;
  background-color: #c4c4c4;
  @media screen and (max-width: 768px) {
    margin-top: 16px;
    margin-bottom: 20px;
  }
`;

const InfoContainer = styled.ul`
  display: flex;
  flex-direction: column;
  li {
    color: #767676;
    font-size: 10px;
    line-height: 20px;
    &:first-child {
      font-weight: 500;
    }
  }
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    li {
        color: #767676;
        font-size: 10px;
        line-height: 10px;
        &:first-child {
          font-weight: 500;
        }
      }
`;