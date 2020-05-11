import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { SearchForm } from '../components/shared/SearchForm';
import { Results } from '../components/result/Results';

export const Search = () => {
  const [inputString, setInputString] = useState('');
  const [result, setResult] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState('');
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (result && result.total_count === 0) {
      setMessage('No results, try again.');
      setShowResults(false);
    } else if (result && result.total_count > 0) {
      setMessage('');
      setShowResults(true);
    }
    if (hasError) {
      setMessage('Something went wrong, please try again.');
      setShowResults(false);
    }
  }, [result, hasError]);

  return (
    <Wrapper inputString={inputString}>
      <ContainerWrapper inputString={inputString}>
        <TopContainer>
          <TextContainer>
            <TextBox>
              <Text>Connect with</Text>
              <Text>active GitHubers</Text>
              <Text>near you</Text>
            </TextBox>
          </TextContainer>
          <SearchContainer>
            <SearchForm
              setInputString={setInputString}
              setResult={setResult}
              setHasError={setHasError}
            />
          </SearchContainer>
        </TopContainer>

        <BottomContainer message={message}>
          {message && (
            <MessageWrapper>
              <Message>{message}</Message>
            </MessageWrapper>
          )}
          {showResults && result && result.items && (
            <Results results={result.items} location={inputString} />
          )}
        </BottomContainer>
        <CopyWriteWrapper>
          <CopyWrite>&copy;2020 GITCONNECT</CopyWrite>
        </CopyWriteWrapper>
      </ContainerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.darkGreen};
  display: flex;
  justify-content: center;
`;

const ContainerWrapper = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.brightGreen};
  margin-top: 20rem;
  height: inherit;
  margin-bottom: 10rem;
`;
const TopContainer = styled.div`
  width: 95vw;
  height: 35rem;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.device.tablet} {
    width: 85vw;
    flex-direction: row-reverse;
    height: 40rem;
    padding: 1rem;
  }
  @media ${({ theme }) => theme.device.tabletL} {
    width: 80vw;
    padding: 2rem;
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: 75rem;
    height: 45rem;
  }
`;
const BottomContainer = styled.div`
  ${(props) =>
    props.message &&
    css`
      padding: 4rem;
    `}
`;
const TextContainer = styled.div`
  flex: 1;
`;
const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.device.tablet} {
    align-items: flex-end;
  }
`;
const TextBox = styled.div`
  height: 100%;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media ${({ theme }) => theme.device.tablet} {
    align-items: flex-start;
    padding: 2.5rem 0.5rem;
  }
`;
const Text = styled.h2`
  font-size: 2rem;
  letter-spacing: 0.1rem;
  font-family: ${({ theme }) => theme.font.comfortaa};
  color: ${({ theme }) => theme.color.textGreen};
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 2.3rem;
  }
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 2.8rem;
  }
`;
const CopyWriteWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: -5px;
  display: flex;
  aligm-items: flex-end;
  padding-top: 0.5rem;
`;
const CopyWrite = styled.p`
  color: ${({ theme }) => theme.color.brightGreen};
  font-family: ${({ theme }) => theme.font.abel};
  font-size: 1.2rem;
  line-height: 1.5rem;
  padding-right: 0.5rem;
  letter-spacing: 0.3rem;
`;
const MessageWrapper = styled.div`
  height: 10rem;
  padding: 4rem 0;
  border-top: 1px solid ${({ theme }) => theme.color.brightGreen};
`;
const Message = styled.h3`
  font-size: 2rem;
  letter-spacing: 0.1rem;
  font-family: ${({ theme }) => theme.font.comfortaa};
  color: ${({ theme }) => theme.color.textGreen};
`;
