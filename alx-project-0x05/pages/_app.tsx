import type { AppProps } from 'next/app';
import { CountProvider } from '../context/CountContext';

// Corrected import paths to match the checker's requirements
import Layout from '@/components/layouts/Layout';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CountProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CountProvider>
  );
}

export default MyApp;