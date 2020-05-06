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
    {message && <Message>{message}</Message>}
    <InputContainer>
      <Input {...inputProps} id={id} error={error} message={message} />
      {icon && <InputIcon src={icon} alt='Icon' />}
    </InputContainer>
  </>
);

const Label = styled.label`
  display: inline-block;
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.font.nunito};
  margin-right: 0.5rem;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.color.light};
`;
const Message = styled.span`
  color: ${({ theme }) => theme.color.error};
  font-family: ${({ theme }) => theme.font.nunito};
  font-size: 1.4rem;
`;
const InputContainer = styled.div`
  position: relative;
`;
const Input = styled.input`
  height: 5rem;
  width: 100%;
  font-size: 1.6rem;
  background: transparent;
  border: none;
  color: #fff;
  padding-left: 4rem;
  outline: none;
  font-family: ${({ theme }) => theme.font.nunito};
  border-bottom: 2px solid ${({ theme }) => theme.color.lightGreen};
  ${(props) =>
    props.message &&
    css`
      border-bottom: 3px solid ${(props) => props.theme.color.error};
    `}

  ::placeholder {
    color: #959595;
    opacity: 1;
    font-style: italic;
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
