import 'tailwindcss/tailwind.css'
import '../assets/global.css'
import NextNprogress from 'nextjs-progressbar'
import smoothscroll from 'smoothscroll-polyfill'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  if (typeof window !== 'undefined') {
    smoothscroll.polyfill()
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
