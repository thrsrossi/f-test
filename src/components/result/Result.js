import React from 'react';
import styled from 'styled-components';

export const Result = ({ results }) => {
  return results.map((result, key) => (
    <Container key={key}>
      <Username>{result.login}</Username>
      <UserLink href={`${result.html_url}`}>Contact me!</UserLink>
    </Container>
  ));
};

const Container = styled.div`
  font-family: ${({ theme }) => theme.font.comfortaa};
  height: 9rem;
  border-top: 1px solid ${({ theme }) => theme.color.brightGreen};
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
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
