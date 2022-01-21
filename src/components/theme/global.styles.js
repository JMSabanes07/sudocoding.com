import { createGlobalStyle } from 'styled-components'

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${(props) => props.theme.text};
    font-family: 'UbuntuMono';
    letter-spacing: 0.095rem;
  }

  @font-face {
    font-family: "UbuntuMono";
    src: url("/fonts/UbuntuMono400.woff");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "UbuntuMono";
    src: url("/fonts/UbuntuMono800.woff");
    font-style: normal;
    font-weight: 800;
    font-display: swap;
  }
`
