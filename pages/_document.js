import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={'en'}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="keywords" content="newworld,coins,gold,buy,store,shop" />
          <meta
            name="title"
            content="New World: Buy GOLD coins in New World Store"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="description"
            content="This is a safe place to shop in the New World. New world Buy gold coins in the best store. Fast delivery of gold. Lifetime warranty. Buy Now!"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://newworldstore.net/" />
          <meta
            property="og:title"
            content="New World: Buy GOLD coins in New World Store"
          />
          <meta
            property="og:description"
            content="This is a safe place to shop in the New World. New world Buy gold coins in the best store. Fast delivery of gold. Lifetime warranty. Buy Now!"
          />
          <meta property="og:image" content="/socials.webp" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://newworldstore.net/" />
          <meta
            property="twitter:title"
            content="New World: Buy GOLD coins in New World Store"
          />
          <meta
            property="twitter:description"
            content="This is a safe place to shop in the New World. New world Buy gold coins in the best store. Fast delivery of gold. Lifetime warranty. Buy Now!"
          />
          <meta property="twitter:image" content="/socials.webp" />
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
