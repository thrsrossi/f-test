import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { GlobalStyle } from '../../styles/global';

export const DefaultLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      {children}
      <GlobalStyle />
    </>
  </ThemeProvider>
);
