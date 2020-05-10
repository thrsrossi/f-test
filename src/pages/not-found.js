import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NotFound = () => {
  return (
    <Container>
      <Content>
        <Text>Ooops! Page not found...</Text>
        <LinkText to='/search'>...back to search</LinkText>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.color.darkGreen};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.main`
  width: 30rem;
  color: ${({ theme }) => theme.color.textGreen};
`;
const Text = styled.h2`
  font-size: 3rem;
  font-family: ${({ theme }) => theme.font.comfortaa};
  margin-bottom: 0.5rem;
`;
const LinkText = styled(NavLink)`
  display: block;
  font-family: ${({ theme }) => theme.font.abel};
  font-size: 2rem;
  color: ${({ theme }) => theme.color.brightGreen};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
