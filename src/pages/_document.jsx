import { Html, Head, Main, NextScript } from 'next/document';

/**
 * The Document component is NextJS's base for a html document.
 * Here, is a good place to fetch static assets such as fonts.
 */
const Document = () => (
  <Html lang="en">
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
