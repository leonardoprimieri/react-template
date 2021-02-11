import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`

  ${normalize};

  body {
    font-family: 'Inter', sans-serif;
  }

  .container {
    max-width: 70rem;
    margin: 0 auto;
  }

`;
