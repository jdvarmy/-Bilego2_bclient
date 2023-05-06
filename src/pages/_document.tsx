import type { DocumentProps } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import i18nextConfig from '../../next-i18next.config';

export default class HomeDocument extends Document<DocumentProps> {
  render() {
    const currentLocale = this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;

    return (
      <Html lang={currentLocale}>
        <Head>
          <meta charSet='utf-8' />
        </Head>
        <body className='text-white bg-blue-900 font-body text-base'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
