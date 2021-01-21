import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { useStore } from '../lib/store';
import { useApollo } from '../lib/apollo';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'TT Norms';
    src: local('TT Norms Bold'), local('TTNorms-Bold'),
      url('/fonts/TTNorms-Bold.eot?#iefix') format('embedded-opentype'),
      url('/fonts/TTNorms-Bold.woff') format('woff'),
      url('/fonts/TTNorms-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'TT Norms';
    src: local('TT Norms Medium'), local('TTNorms-Medium'),
      url('/fonts/TTNorms-Medium.eot?#iefix') format('embedded-opentype'),
      url('/fonts/TTNorms-Medium.woff') format('woff'),
      url('/fonts/TTNorms-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'TT Norms';
    src: local('TT Norms ExtraBold'), local('TTNorms-ExtraBold'),
      url('/fonts/TTNorms-ExtraBold.eot?#iefix') format('embedded-opentype'),
      url('/fonts/TTNorms-ExtraBold.woff') format('woff'),
      url('/fonts/TTNorms-ExtraBold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    padding: 0;
  }

  html {
    -webkit-text-size-adjust: 100%;
  }

  body {
    color: #201F2A;
    font-family: 'TT Norms', 'Arial', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 158%;
    overflow-x: hidden;
    font-variant-ligatures: none;
  }

  a {
    text-decoration: none;
    color: #201F2A;
    font-weight: 500;
    display: block;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  a:hover,
  a:focus {
    color: #53B443;
  }

  a:active {
    color: #339722;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    text-align: left;
    font-family: inherit;
  }

  h1, h2, h3, h4, h5 {
    font-weight: 800;
  }

  img, video {
    width: 100%;
    height: auto;
  }

  input[type="checkbox"],
  input[type="radio"]{
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    overflow: hidden;
    top: -20px;
    left: -20px;
  }

  .swiper-wrapper {
    display: flex;
  }

  .swiper-container {
    overflow: hidden;
  }

  .ReactModal__Body--open {
    overflow: hidden;
    margin-right: 17px;
  }

  .formModal {
    top: 40px;
    bottom: 40px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    box-sizing: border-box;
    position: absolute;
    overflow: auto;
    outline: none;
    background-color: #ffffff;

    @media (max-width: 1199px) {
      top: 0;
      bottom: 0;
      padding-top: 0;
    }

    &::-webkit-scrollbar {
    width: 3px;
    }
    &::-webkit-scrollbar-track {
      background: #F7F8F9;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #53B443;
      border-radius: 6px;
      border: 3px solid #53B443;
    }

    scrollbar-width: thin;
    scrollbar-color: #53B443 #F7F8F9;
  }

  .successModal {
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
    box-sizing: border-box;
    position: absolute;
    overflow: visible;
    outline: none;

    @media (max-width: 768px) {
      top: 0;
      transform: translateY(0);
      bottom: 0;
    }
  }

  .track-vertical {
    position: absolute;
    width: 3px !important;
    right: 0;
    bottom: 2px;
    top: 2px;
    border-radius: 6px;
    background-color: #f7f8f9;
  }

  .thumb-vertical {
    position: relative;
    display: block;
    width: 100%;
    cursor: pointer;
    border-radius: inherit;
    background-color: #53b443 !important;
    height: 84px;
    transform: translateY(0px);
  }

  .scroll-view {
    ::-webkit-scrollbar {
      -webkit-appearance: none;
    }
  }

  .scroll-view--scrolling {
    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-track {
      background: #F7F8F9;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #53B443;
      border-radius: 6px;
      border: 3px solid #53B443;
    }
  }

  .map-container {
    width: 100%;
    height: 100%;

    .ymaps-2-1-77-copyrights-pane {
      inset: auto 0px 10px !important;
    }
  }

  @media screen and (max-width: 420px) {
    body {
      font-size: 14px;
    }
  }
`;

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Head>
          <title>DINS</title>
        </Head>
        <Component {...pageProps} />
        <GlobalStyle />
      </ApolloProvider>
    </Provider>
  );
}
