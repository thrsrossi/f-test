import React from 'react';
import styled from 'styled-components';
import LogoGreen from '../assets/logos/gitconnect_green.png';
import { SearchBar } from '../components/shared/SearchBar';

export const Search = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <TextContainer>
          <TextBox>
            <Text>Connect with</Text>
            <Text>active GitHubers</Text>
            <Text>near you</Text>
          </TextBox>
        </TextContainer>
        <SearchContainer>
          <SearchBar />
        </SearchContainer>
        <CopyWriteWrapper>
          <CopyWrite>&copy; 2020 </CopyWrite>
          <Logo src={LogoGreen} alt='Gitconnect logo green' />
        </CopyWriteWrapper>
      </ContentContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.color.darkGreen};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentContainer = styled.div`
  position: relative;
  width: 95vw;
  height: 35rem;
  border: 1px solid ${({ theme }) => theme.color.brightGreen};
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
  top: 102%;
  right: 0;
  display: flex;
  aligm-items: flex-end;
`;
const CopyWrite = styled.p`
  color: ${({ theme }) => theme.color.brightGreen};
  font-family: ${({ theme }) => theme.font.abel};
  font-size: 1.2rem;
  line-height: 1.5rem;
  padding-right: 0.5rem;
`;
const Logo = styled.img`
  height: 1.5rem;
`;
