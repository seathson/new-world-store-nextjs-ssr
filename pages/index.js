import Link from 'next/link'
import { MainLayout } from '../components/MainLayout'
import { Case } from '../components/Case'
import { Faqs } from '../components/Faq/Faqs'
import screen from '../assets/img/screen.webp'
import screen2 from '../assets/img/screen2.webp'
import faq2 from '../assets/img/faq2.webp'
import service from '../assets/img/service.webp'
import {
  faGem,
  faDove,
  faShieldAlt,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [hash, setHash] = useState('/')
  const router = useRouter()

  const productSection = useRef()
  const faqSection = useRef()

  // move logic
  useEffect(() => {
    setHash(router.asPath)
  }, [router.asPath])

  if (hash === '/#products') {
    window.scrollTo({
      top: productSection.current.offsetTop - 50,
      behavior: 'smooth',
    })
  }

  if (hash === '/#faq') {
    window.scrollTo({
      top: faqSection.current.offsetTop - 50,
      behavior: 'smooth',
    })
  }

  if (hash === '/#support') {
    window.scrollTo({
      top: 9999, // warning!
      behavior: 'smooth',
    })
  }

  return (
    <MainLayout title={'New World Store | Home buy gold coins'}>
      <section
        className="welcome flex justify-center bg-no-repeat bg-center bg-cover items-center w-full md:mt-20"
        style={{ backgroundImage: `url(${screen.src})`, height: '70vh' }}
      >
        <div className="container flex-col font-medium">
          <div className="flex flex-col flex-shrink-1 max-w-xl ">
            <h3 className="flex text-lightYellow tracking-widest text-sm leading-7 uppercase">
              New World Store
            </h3>
            <h1 className="text-2xl text-yellow my-2">
              BUY A GOLD IN NEW WORLD WITH FAST DELIVERY
            </h1>
            <p>
              Spend your gold on upgrades, crafting new items, and advancing in
              the NEW WORLD. We have the largest selection of servers and the
              fastest order processing. As well as a system of discounts in our
              Discord. Save your time and enjoy the game. You don&apost have to farm
              for hours to get the item you want. You can just buy it!
            </p>
            <Link href="/[...params]" as="#products">
              <button className="buttonYellow mr-auto mt-8">
                <a className="flex">Proceed to Checkout</a>
              </button>
            </Link>
          </div>

          {/* <h1>Hello Next.JS</h1>
          <p>
            <Link href="/about">
              <a>About</a>
            </Link>
          </p>
          <p>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit animi
            libero veritatis perspiciatis! Saepe officiis doloremque repellat in
            quod? Voluptatum fugit eligendi quod veniam voluptatem veritatis
            commodi provident quia sapiente?
          </p> */}
        </div>
      </section>
      <section className="flex flex-col mt-20 items-center w-full md:mt-28">
        <div className="container flex-col items-center">
          <h2 className="sectionTitle">WHY CHOOSE US?</h2>
          <p className="sectionSubtitle tracking-widest mt-4">
            We are constantly improving our service to deliver mind-blowing
            experiences to our customers for every order, every day. Order
            services from us and be satisfied!
          </p>
        </div>
        <div
          className="flex items-center justify-center w-full bg-no-repeat bg-center bg-cover mt-6"
          style={{ backgroundImage: `url(${screen2.src})`, minHeight: '45vh' }}
        >
          <div className="container flex-wrap">
            <Case
              icon={faGem}
              title="Highest Quality Services"
              text="Maintaining an impeccable reputation is our top priority, therefore providing the highest quality service is one of our core principles."
            />

            <Case
              icon={faShieldAlt}
              title="Lifetime Warranty"
              text="We fully control the process of issuing gold to buyers. This allows us to be completely confident in the reliability of the services provided. In addition, the support team is also ready to help you at any time."
            />

            <Case
              icon={faDove}
              title="Fast Delivery"
              text="Our delivery system allows us to quickly process orders. It also cuts down on the time it takes to get it."
            />
          </div>
        </div>
      </section>
      <section
        ref={productSection}
        className="flex flex-col mt-20 items-center w-full"
      >
        <div className="container flex-col items-center">
          <h2 className="sectionTitle whitespace-pre-wrap text-center">Select your service</h2>
          <p className="sectionSubtitle tracking-widest mt-4">
            Below you can see the different types of services.
            <br />
            Choose the service that suits you, and after payment we will
            immediately provide it.
          </p>
        </div>
        <div
          className="flex items-center justify-center w-full bg-no-repeat bg-center bg-cover mt-6"
          style={{ backgroundImage: `url(${service.src})`, minHeight: '60vh' }}
        >
          <div className="container items-center justify-center">
            <button className="buttonYellow">coming soon</button>
          </div>
        </div>
      </section>
      <section
        ref={faqSection}
        className="flex flex-col mt-12 md:mt-4 items-center w-full xs:mb-20"
      >
        <div className="container flex-col items-center">
          <h2 className="sectionTitle">F A Q</h2>
          <p className="sectionSubtitle tracking-widest mt-4">
            Answers to the most frequently asked questions about our service New
            World Store!
          </p>
        </div>
        <div
          className="faq flex items-start justify-center w-full bg-no-repeat bg-center bg-cover mt-6"
          style={{ backgroundImage: `url(${faq2.src})`}}
        >
          <div className="container flex-col max-w-3xl items-center justify-center mt-10">
            <Faqs />
            <Link href="/[...params]" as="#products">
              <button className="buttonYellow mt-8">
                <a className="flex">
                  buy now
                  <i className="flex items-center justify-center ml-3">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </i>
                </a>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
