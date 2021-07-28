import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/img/logo.svg'

export function MainLayout({ children, title = 'Next App' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="next,js,nextjs,react" />
        <meta name="description" content="this is yt tutorial for next" />
        <meta charSet="utf-8" />
      </Head>
      <div className="wrapper">
        <header className="flex justify-center h-12 fixed left-0 top-0 w-full bg-black items-center">
          <div className="container justify-start">
            <div className="logo flex w-10">
              <Link href={'/'}>
                <a><Image objectFit={'contain'} src={logo} /></a>
              </Link>
            </div>
            <nav className="nav flex text-sm text-textWhite font-normal uppercase tracking-widest">
              <div className="flex mx-2 items-center justify-center">
                <Link href={'/'}>
                  <a>Home</a>
                </Link>
              </div>
              <div className="flex mx-2 items-center justify-center">
                <Link href={'/news'}>
                  <a>News</a>
                </Link>
              </div>
              <div className="flex mx-2 items-center justify-center">
                <Link href={'https://www.google.com/'}>
                  <a target='_blank'>Discord</a>
                </Link>
              </div>
              <div className="flex mx-2 items-center justify-center">
                <Link href={''}>
                  <a>Support</a>
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <main className="flex flex-col mt-12 w-full min-h-full items-center justify-center text-textWhite">
          {children}
        </main>
      </div>
    </>
  )
}
