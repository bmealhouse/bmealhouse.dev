import Document, { Html, Head, Main, NextScript } from "next/document";

export default class BMealhouseDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          {/* <link href="/favicon.ico" rel="shortcut icon" />
          <link href="/site.webmanifest" rel="manifest" />
          <link
            href="/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            color="#4a9885"
            href="/safari-pinned-tab.svg"
            rel="mask-icon"
          />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta
            content="/browserconfig.xml"
            name="msapplication-config"
          /> */}
          <meta name="yandex-verification" content="63880aaa5b420964" />
          <meta
            name="google-site-verification"
            content="JdPCM0XHmAwdEs2jo9ulorijdxERKjLIXU7LYm8H_uw"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `if(window.matchMedia('(prefers-color-scheme:dark)').matches){document.querySelector("html").classList.add('dark');}else{document.querySelector("html").classList.remove('dark');}`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
