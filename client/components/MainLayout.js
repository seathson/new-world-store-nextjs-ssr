import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/img/logo.svg'
import paypalIcon from '../assets/img/paypal.svg'
import visalIcon from '../assets/img/visa.svg'
import mclIcon from '../assets/img/mc.svg'
import bitcoinlIcon from '../assets/img/bitcoin.svg'
import ethIcon from '../assets/img/eth.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faTelegram } from '@fortawesome/free-brands-svg-icons'

export function MainLayout({ children, title = 'New World Store buy gold coins' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="wrapper">
        <header className="flex justify-center h-16 sticky left-0 top-0 w-full bg-black items-center z-50">
          <div className="container items-center px-0 justify-start h-full ">
            <div className="logo items-center justify-center flex w-14 xs:w-12 ml-6 mr-16 md:mr-12 xs:mr-4 mt-2 flex-shrink-0 ">
              <Link href={'/'}>
                <a>
                  <Image objectFit={'contain'} src={logo} />
                </a>
              </Link>
            </div>
            <nav className="nav flex text-sm text-textWhite h-16 font-normal uppercase tracking-widest ">
              <div className="flex items-center justify-center duration-200 sm:hover:bg-black hover:bg-darkBlack">
                <Link href={'/'}>
                  <a className="flex w-full h-full px-4 xs:px-2 items-center justify-center text-center">
                    Home
                  </a>
                </Link>
              </div>
              <div className="flex items-center justify-center duration-200 sm:hover:bg-black hover:bg-darkBlack">
                <Link href={'/news'}>
                  <a className="flex w-full h-full px-4 xs:px-2 items-center justify-center text-center">
                    News
                  </a>
                </Link>
              </div>
              <div className="flex items-center justify-center duration-200 sm:hover:bg-black hover:bg-darkBlack">
                <Link href={'https://discord.gg/6dzXay7ATB'}>
                  <a
                    className="flex w-full h-full px-4 xs:px-2 items-center justify-center text-center"
                    target="_blank"
                  >
                    Discord
                  </a>
                </Link>
              </div>
              <div className="flex items-center justify-center duration-200 sm:hover:bg-black hover:bg-darkBlack">
                <Link href="/#support">
                  <a className="flex w-full h-full px-4 xs:px-2 items-center justify-center text-center">
                    Support
                  </a>
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <main className="flex flex-col mt-0 w-full min-h-full items-center justify-center text-textWhite z-0">
          {children}
        </main>
        <footer className="flex justify-center bg-black w-full">
          <div className="container justify-center xl:flex-wrap">
            <div
              className="flex flex-col xs:mt-6 justify-center items-center"
              style={{ minWidth: '270px' }}
            >
              <div className="logo flex w-28 mt-2">
                <Link href={'/'}>
                  <a>
                    <Image objectFit={'contain'} src={logo} />
                  </a>
                </Link>
              </div>
              <h2 className="flex font-Fell text-4xl text-center">
                NEW WORLD STORE
              </h2>
            </div>
            <div className="flex w-full ml-20 xl:ml-0 xl:mt-10 lg:flex-wrap whitespace-nowrap tracking-wider font-medium">
              <div
                className="flex flex-col m-5 xs:m-0 flex-1 items-start xl:justify-start xl:items-center text-sm"
                style={{ minWidth: '250px' }}
              >
                <h3 className="mb-3 text-lg text-lightYellow">Information</h3>
                <p className="my-1.5">
                  <Link href={'/'}>
                    <a className="flex w-full h-full items-center justify-center text-center">
                      Home page
                    </a>
                  </Link>
                </p>
                <p className="my-1.5">
                  <Link href="/#products">
                    <a className="flex w-full h-full items-center justify-center text-center">
                      Proceed to Checkout
                    </a>
                  </Link>
                </p>
                <p className="my-1.5">
                  <Link href="/#faq">
                    <a className="flex w-full h-full items-center justify-center text-center">
                      FAQ
                    </a>
                  </Link>
                </p>
                <p className="my-1.5">
                  <Link href={'/'}>
                    <a className="flex w-full h-full items-center justify-center text-center">
                      Terms and Conditions
                    </a>
                  </Link>
                </p>
              </div>
              <div
                className="flex flex-col m-5 xs:m-0 xs:mt-7 flex-1 xl:justify-start xl:items-center text-sm"
                style={{ minWidth: '250px' }}
              >
                <h3 className="text-lg text-lightYellow mb-3">Support</h3>
                <Link href="mailto:newworldstoreoff@gmail.com">
                  <a className="my-1.5">newworldstoreoff@gmail.com</a>
                </Link>

                <div className="flex items-center text-center my-1.5">
                  <Link href={'https://discord.com/invite/6dzXay7ATB'}>
                    <a className="flex" target="_blank">
                      <FontAwesomeIcon
                        className="text-2xl mr-2"
                        icon={faDiscord}
                      />
                      <span>seathson#5788</span>
                    </a>
                  </Link>
                </div>
                <div className="flex items-center text-center my-1.5">
                  <Link className="text-black" href={'https://t.me/seathson'}>
                    <a className="flex" target="_blank">
                      <FontAwesomeIcon
                        className="text-2xl mr-2"
                        icon={faTelegram}
                      />
                      <span className="">seathson</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col m-5 xs:m-0 xs:mt-7 flex-1 items-center text-sm">
                <h3 className="text-lg text-lightYellow mb-3">
                  Payment methods
                </h3>
                <div
                  className="flex flex-row justify-center flex-wrap"
                  style={{ minWidth: '250px' }}
                >
                  <div
                    className="flex w-16 h-10 bg-contain bg-no-repeat m-2"
                    // style={{ backgroundImage: `url(${paypalIcon.src})` }}
                  ><Image src={paypalIcon.src} width='100' height='100' objectFit='contain' objectPosition='center'/></div>
                  <div
                    className="flex w-16 h-10 bg-contain bg-no-repeat m-2"
                    // style={{ backgroundImage: `url(${visalIcon.src})` }}
                  ><Image src={visalIcon.src} width='100' height='100' objectFit='contain' objectPosition='center'/></div>
                  <div
                    className="flex w-16 h-10 bg-contain bg-no-repeat m-2"
                    // style={{ backgroundImage: `url(${mclIcon.src})` }}
                  ><Image src={mclIcon.src} width='100' height='100' objectFit='contain' objectPosition='center'/></div>
                  <div
                    className="flex w-16 h-10 bg-contain bg-no-repeat m-2"
                    // style={{ backgroundImage: `url(${bitcoinlIcon.src})` }}
                  ><Image src={bitcoinlIcon.src} width='100' height='100' objectFit='contain' objectPosition='center'/></div>
                  <div
                    className="flex w-16 h-10 bg-contain bg-no-repeat m-2"
                    // style={{ backgroundImage: `url(${ethIcon.src})` }}
                  ><Image src={ethIcon.src} width='100' height='100' objectFit='contain' objectPosition='center'/></div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
