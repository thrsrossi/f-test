import React from 'react';
import styled, { css } from 'styled-components';

export const InputField = ({
  label,
  id,
  error,
  message,
  icon,
  ...inputProps
}) => (
  <>
    {label && <Label htmlFor={id}>{label}</Label>}
    <InputContainer>
      <Input {...inputProps} id={id} error={error} message={message} />
      {icon && <InputIcon src={icon} alt='Icon' />}
    </InputContainer>
    <Error>{message && <Message>{message}</Message>}</Error>
  </>
);

const Label = styled.label`
  display: inline-block;
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.font.abel};
  letter-spacing: 0.1rem;
  margin-right: 0.5rem;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.color.textGreen};
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1.8rem;
  }
`;
const Message = styled.span`
  color: ${({ theme }) => theme.color.error};
  font-family: ${({ theme }) => theme.font.abel};
  font-size: 1.4rem;
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1.6rem;
  }
`;
const InputContainer = styled.div`
  position: relative;
`;
const Input = styled.input`
  height: 5rem;
  width: 100%;
  font-size: 1.4rem;
  background: transparent;
  border: none;
  color: #fff;
  padding-left: 4rem;
  outline: none;
  font-family: ${({ theme }) => theme.font.abel};
  color: ${({ theme }) => theme.color.textGreen};
  letter-spacing: 0.1rem;
  border-bottom: 3px solid ${({ theme }) => theme.color.brightGreen};
  ${(props) =>
    props.message &&
    css`
      border-bottom: 3px solid ${(props) => props.theme.color.error};
    `}
  ::placeholder {
    color: ${({ theme }) => theme.color.lightGrey};
    font-style: italic;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1.6rem;
  }
`;
const InputIcon = styled.img`
  height: 1.8rem;
  width: 1.8rem;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 1rem;
`;
const Error = styled.div`
  height: 2rem;
  padding-top: 0.5rem;
`;
