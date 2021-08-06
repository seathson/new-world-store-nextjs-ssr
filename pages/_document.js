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
          <meta
            name="description"
            content="This is a safe place to shop in the New World. New world Buy gold coins in the best store. Fast delivery of gold. Lifetime warranty. Buy Now!"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content='https://newworldstore.net/' />
          <meta
            property="og:title"
            content="New World: Buy GOLD coins in New World Store"
          />
          <meta
            property="og:description"
            content="This is a safe place to shop in the New World. New world Buy gold coins in the best store. Fast delivery of gold. Lifetime warranty. Buy Now!"
          />
          <meta
            property="og:image"
            content="/socials.webp"
          />

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
          <meta
            property="twitter:image"
            content="/socials.webp"
          />
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
