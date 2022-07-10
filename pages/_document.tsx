import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'

class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta
            name="msapplication-TileImage"
            content="https://triple.guide/icons/favicon-144x144.png"
          />
          <meta name="msapplication-TileColor" content="#1FC1B6" />
          <link
            rel="apple-touch-icon-precomposed"
            href="https://triple.guide/icons/favicon-152x152.png"
          />

          <meta name="description" content="트리플 프론트엔드 과제입니다" />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <meta property="og:title" content="트리플 프론트엔드 과제" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ko_KR" />
          <meta
            property="og:image"
            content="https://assets.triple.guide/images/img-default-page-preview.png"
          />
          <meta property="og:image:width" content="1052" />
          <meta property="og:image:height" content="1052" />
          <meta
            property="og:description"
            content="트리플 프론트엔드 과제입니다"
          />
          <meta property="fb:app_id" content="136540730081853" />
          <meta property="al:ios:app_name" content="트리플" />
          <meta property="al:android:app_name" content="트리플" />
          <meta property="al:ios:app_store_id" content="1225499481" />
          <meta property="al:android:url" content="triple:///" />
          <meta
            property="al:android:package"
            content="com.titicacacorp.triple"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
