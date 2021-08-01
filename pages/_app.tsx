import type { AppProps } from 'next/app';
import Head from 'next/head';
import Theme from 'src/styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Theme>
        <Head>
          <title>Donald Ivan - Web Developer</title>
          <meta
            property="og:title"
            content="Donald Ivan - Web Developer"
            key="title"
          />
          <meta
            name="description"
            content="React Typescript Developer. Full Stack Developer. MERN STACK"
          />
          <meta
            property="og:description"
            content="React Typescript Developer. Full Stack Developer. MERN STACK"
          />
          <meta property="og:url" content="" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Theme>
    </>
  );
};
export default MyApp;
