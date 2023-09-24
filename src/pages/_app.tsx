import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

// import { useAuth } from '@/application/components/Auth/hooks/useAuth';
import { Layout } from '@/application/components/Layout/Layout';

function App({ Component, pageProps }: AppProps) {
  // useAuth();

  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(App);
