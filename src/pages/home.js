import React from 'react';
import styled from 'styled-components';

export const Home = () => {
  return <Container>Home</Container>;
};

const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.color.black};
  color: ${(props) => props.theme.color.white};
`;
