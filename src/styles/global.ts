import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['primary-500']};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.1s ease-in-out;
  }

  body {
    background: ${({ theme }) => theme.colors['gray-100']};
    color: ${({ theme }) => theme.colors['gray-800']};
    --webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: ${({ theme }) => theme.fonts.default};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: ${({ theme }) => theme.fonts.default};
    color: ${({ theme }) => theme.colors['gray-900']};
    font-weight: 700;
    line-height: 1.3;
  }

  span[color] {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  ul {
    list-style-type: none;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 87.5%;
  }
`;
