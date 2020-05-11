/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logos/GC-green-notext.png';

export const Header = () => {
  return (
    <StyledHeader>
      <Link to='/search'>
        <StyledLogo src={Logo} alt='GitConnext Logo' />
      </Link>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  z-index: 999;
  width: 100%;
  background: ${(props) => props.theme.color.darkGreen};
`;
const StyledLogo = styled.img`
  height: 5.5rem;
  margin: 1.5rem;
  @media ${({ theme }) => theme.device.tabletL} {
    height: 7rem;
    margin: 2rem;
  }
`;
