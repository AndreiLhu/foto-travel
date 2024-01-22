import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { SWRConfig } from 'swr';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
        {/* <SWRConfig value={{ fetcher }}> */}
        <Component {...pageProps} />
        {/* </SWRConfig> */}
      </SessionProvider>
    </>
  );
}
