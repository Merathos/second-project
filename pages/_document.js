import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ru">
        <Head>
          <link rel="font" href="/fonts/TTNorms-Medium.woff" as="font" />
          <link rel="font" href="/fonts/TTNorms-Medium.eot" as="font" />
          <link rel="font" href="/fonts/TTNorms-Medium.ttf" as="font" />

          <link rel="font" href="/fonts/TTNorms-Bold.woff" as="font" />
          <link rel="font" href="/fonts/TTNorms-Bold.eot" as="font" />
          <link rel="font" href="/fonts/TTNorms-Bold.ttf" as="font" />

          <link rel="font" href="/fonts/TTNorms-ExtraBold.woff" as="font" />
          <link rel="font" href="/fonts/TTNorms-ExtraBold.eot" as="font" />
          <link rel="font" href="/fonts/TTNorms-ExtraBold.ttf" as="font" />

          <link rel="stylesheet" href="/styles/reset.css" />
          <link rel="stylesheet" href="/styles/fonts.css" />
          {/* <link rel="stylesheet" href="/styles/timepad.css" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
