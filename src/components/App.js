import React from 'react';
import styled from 'styled-components';
import { DefaultLayout } from '../styles/layouts/default-layout';
import { Header } from './Header';

export const App = () => {
  return (
    <DefaultLayout>
      <Header />
      <Container />
    </DefaultLayout>
  );
};

const Container = styled.div`
  width: 100%;
  height: 10rem;
  background: ${(props) => props.theme.color.black};
`;
