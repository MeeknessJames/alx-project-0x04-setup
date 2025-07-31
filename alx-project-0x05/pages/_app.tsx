import type { AppProps } from 'next/app';
import { CountProvider } from '../context/CountContext'; // Corrected import
import Layout from '../components/layouts/Layout'; // Added Layout import
import '../styles/globals.css';

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