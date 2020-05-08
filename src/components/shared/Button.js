import React from 'react';
import styled from 'styled-components';

export const Button = ({ type, text, disabled, onSubmit, onClick }) => (
  <Container
    onClick={onClick}
    disabled={disabled}
    type={type}
    onSubmit={onSubmit}
  >
    {text}
  </Container>
);

const Container = styled.button`
  display: block;
  font-size: 1.5rem;
  cursor: pointer;
  background: transparent;
  color: ${({ theme }) => theme.color.lightGreen};
  border: 1px solid ${({ theme }) => theme.color.lightGreen};
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  padding: 1.2rem 3rem 1rem 3rem;
  border-radius: 0.4rem;
  font-family: ${({ theme }) => theme.font.comfortaa};

  &:hover {
    color: ${({ theme }) => theme.color.darkGreen};
    background: ${({ theme }) => theme.color.lightGreen};
  }
`;
