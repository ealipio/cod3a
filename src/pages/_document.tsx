import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html className="dark">
      <link
        rel="icon"
        type="image/png"
        href="https://cdn.jsdelivr.net/gh/ealipio/cod3a/public/assets/favicon.png"
      />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
