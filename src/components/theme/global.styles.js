import { createGlobalStyle } from 'styled-components'

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${(props) => props.theme.text};
    font-family: 'UbuntuMono';
    letter-spacing: 0.1rem;
    list-style: none;
    text-decoration: none;
    ::selection {
      color: ${(props) => props.theme.bg};
      background: ${(props) => props.theme.highlight};
    }
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
  @font-face {
    font-family: "Lucida Console";
    src: url("/fonts/LucidaConsole.woff");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Courier new";
    src: url("/fonts/CourierNew400.woff");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  html{
    font-size: 18px;
    @media (max-width: 767px) {
      font-size: 18px;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 16px;
    }
    @media (min-width: 1024px) {
      font-size: 18px;
    }
  }

  .typing-cursor {
    ::after {
      content: '█';
      animation: cursor 1.1s infinite step-start;
    }

    @keyframes cursor {
      50% {
        opacity: 0;
      }
    }
  }

`
