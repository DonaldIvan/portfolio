import type { AppProps } from 'next/app';
import Theme from 'styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
};
export default MyApp;
