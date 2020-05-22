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
          content="https://cdn.jsdelivr.net/gh/ealipio/cod3a/public/assets/bg.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta
          property="og:image:alt"
          content="Nice sky with beautiful lake near the forest"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="google-site-verification" content="YSSa96IBpzrcevvc8jDf8bnIyJp_t9D2Ctum55jecwk" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="https://cdn.jsdelivr.net/gh/ealipio/cod3a/public/assets/favicon.png"
        />
      </Head>

      <main>
        <div className="bg"></div>
        <div className="profile">
          <div className="avatar" title="Show biography">
            <img
              src="https://en.gravatar.com/userimage/141916401/118b9eca936a71fabee80991002469fb.jpeg"
              alt="Avatar"
            />
          </div>

          <div>
            <h1 className="name">Eisson Alipio</h1>
            <div className="links">
              <a target="_blank" href="https://www.linkedin.com/in/ealipio">LinkedIn</a>
              <a target="_blank" href="https://youtube.com/c/cod3a">Channel</a>
              <a target="_blank" href="https://github.com/ealipio">GitHub</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
