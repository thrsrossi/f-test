/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAxios } from '../helpers/hooks/useAxios';

export const Header = () => {
  const [payload, setPayload] = useState({});
  const [result, setResult] = useState(null);
  const endpoint = 'https://api.github.com/users/thrsrossi/repos';

  const { data, isLoading, hasError } = useAxios(payload);

  useEffect(() => {
    setPayload({
      endpoint,
    });
  }, [endpoint]);

  useEffect(() => {
    if (data) {
      setResult(data);
    }
  }, [data]);

  console.log('result', result);
  console.log('hasError', hasError);
  console.log('isLoading', isLoading);
  return <StyledHeader>Header</StyledHeader>;
};

const StyledHeader = styled.header`
  width: 100%;
`;
