import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Eisson Alipio</title>
        <meta name="author" content="Eisson Alipio" />
        <meta
          name="description"
          content="Hi, this is Eisson. I'm a freelance web developer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Eisson" />
        <meta
          property="og:description"
          content="Hi, this is Eisson. I'm a freelance web developer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cod3a.com/" />
        <meta
          property="og:image"
          content="https://cdn.jsdelivr.net/gh/ealipio/cod3a/assets/bg.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta
          property="og:image:alt"
          content="Cielo con nubes y hermoso lago junto al bosque"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
      </Head>

      <main>
        <div className="bg"></div>
      </main>
    </>
  );
}
