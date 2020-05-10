import React from 'react';
import styled from 'styled-components';
import { Result } from './Result';

export const Results = ({ results }) => {
  return (
    <Container>
      <ResultList>
        <Result results={results} />
      </ResultList>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  font-family: ${({ theme }) => theme.font.comfortaa};

  @media ${({ theme }) => theme.device.tabletL} {
    padding: 3rem;
  }
`;
const ResultList = styled.div`
  padding-top: 3rem;
`;
