import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from '@/layout/layout'
import DataProvider from '@/context/provider/Data.provider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </DataProvider>
  )
}
