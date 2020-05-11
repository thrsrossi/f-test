import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const Result = ({ results, location }) => {
  const [formattedLocation, setFormattedLOcation] = useState('');
  useEffect(() => {
    setFormattedLOcation(location.replace('&', ' '));
  }, [location]);

  return results.map((result, key) => (
    <Container key={key}>
      <InfoContainer>
        <Username>{result.login}</Username>
        <UserLink href={`${result.html_url}`}>Contact me!</UserLink>
      </InfoContainer>
      <LocationContainer>
        <Location>Location:</Location>
        <Location>{formattedLocation}</Location>
      </LocationContainer>
    </Container>
  ));
};

const Container = styled.div`
  font-family: ${({ theme }) => theme.font.comfortaa};
  height: 9rem;
  border-top: 1px solid ${({ theme }) => theme.color.brightGreen};
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
`;

const Username = styled.h3`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color.textGreen};
  margin-bottom: 1rem;
`;
const UserLink = styled.a`
  display: block;
  font-size: 1.8rem;
  text-decoration: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.abel};
  color: ${({ theme }) => theme.color.brightGreen};
  &:hover {
    color: ${({ theme }) => theme.color.textGreen};
  }
`;
const InfoContainer = styled.div`
  flex: 1;
`;
const LocationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Location = styled.p`
  font-size: 1.6rem;
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.font.abel};
  color: ${({ theme }) => theme.color.textGreen};
`;
