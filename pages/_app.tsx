import type { AppProps } from 'next/app';
import Head from 'next/head';
import Theme from 'styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
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
            content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!"
          />
          <meta
            property="og:description"
            content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!"
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
