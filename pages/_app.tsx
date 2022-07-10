import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover"
        />
        <title>트리플 프론트엔드 과제</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
