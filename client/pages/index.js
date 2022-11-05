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
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

export default function Home() {
  // const [hash, setHash] = useState('')
  const [amount, setAmount] = useState(500)
  const [price, setPrice] = useState(1)

  const title = `GOLD [${amount} coins]`

  const router = useRouter()

  const productSection = useRef()
  const faqSection = useRef()

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  // move logic
  useEffect(() => {
    // setHash(router.asPath)
    console.log(router)

    if (router.asPath === '/#products') {
      window.scrollTo({
        top: productSection.current.offsetTop - 70,
        behavior: 'smooth',
      })
    }

    if (router.asPath === '/') {
      window.scrollTo({
        top: 0,
      })
    }

    if (router.asPath === '/#faq') {
      window.scrollTo({
        top: faqSection.current.offsetTop - 70,
        behavior: 'smooth',
      })
    }

    if (router.asPath === '/#support') {
      window.scrollTo({
        top: 9999, // warning!
        behavior: 'smooth',
      })
    }
  }, [router.asPath])

  useEffect(() => {
    setPrice(() => Number(amount) / 500)
  }, [amount])

  // if (hash === '/#products') {
  //   window.scrollTo({
  //     top: productSection.current.offsetTop - 70,
  //     behavior: 'smooth',
  //   })
  // }

  // if (hash === '/') {
  //   window.scrollTo({
  //     top: 0,
  //   })
  // }

  // if (hash === '/#faq') {
  //   window.scrollTo({
  //     top: faqSection.current.offsetTop - 70,
  //     behavior: 'smooth',
  //   })
  // }

  // if (hash === '/#support') {
  //   window.scrollTo({
  //     top: 9999, // warning!
  //     behavior: 'smooth',
  //   })
  // }

  const handleChange = (e) => {
    const elem = e.target
    setAmount(() => elem.value)
  }

  const handleBlur = () => {
    if (amount < 500) {
      setAmount(500)
      return
    }
    setAmount(Math.round(amount / 500) * 500)
  }

  const createOrder = async () => {
    const res = await axios.post('http://localhost:3001/api/users/product', {
      title,
      price,
    })
    // Router.push(res.data.link)
    window.open(res.data.link, '_blank')
  }

  return (
    <MainLayout title={'New World Store | Home buy gold coins'}>
      <section className="welcome flex justify-center bg-no-repeat bg-center bg-cover items-center w-full">
        <div className="container flex-col font-medium">
          <div className="flex flex-col flex-shrink-1 max-w-xl">
            <h3 className="flex text-lightYellow tracking-widest text-sm leading-7 uppercase">
              New World Store
            </h3>
            <h1 className="text-2xl text-yellow my-1.5">
              BUY A GOLD IN NEW WORLD WITH FAST DELIVERY
            </h1>
            <p>
              Spend your gold on upgrades, crafting new items, and advancing in
              the NEW WORLD. We have the largest selection of servers and the
              fastest order processing. As well as a system of discounts in our
              Discord. Save your time and enjoy the game. You don&apos;t have to
              farm for hours to get the item you want. You can just buy it!
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
      <section className="flex flex-col mt-6 items-center w-full">
        <div className="container flex-col items-center">
          <h2 className="sectionTitle">WHY CHOOSE US?</h2>
          <p className="sectionSubtitle tracking-widest mt-4">
            We are constantly improving our service to deliver mind-blowing
            experiences to our customers for every order, every day. Order
            services from us and be satisfied!
          </p>
        </div>
        <div
          className="difference flex items-center justify-center w-full bg-no-repeat bg-center bg-cover mt-6"
          // style={{ backgroundImage: `url(${screen2.src})`, minHeight: '45vh' }}
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
          <h2 className="sectionTitle whitespace-pre-wrap text-center">
            Select your service
          </h2>
          <p className="sectionSubtitle tracking-widest mt-4">
            Below you can see the different types of services.
            <br />
            Choose the service that suits you, and after payment we will
            immediately provide it.
          </p>
        </div>
        <div
          className="service flex items-center justify-center w-full bg-no-repeat bg-center bg-cover mt-6"
          // style={{ backgroundImage: `url(${service.src})`, minHeight: '60vh' }}
        >
          <div className="container items-center justify-center">
            <div className="flex flex-col justify-a items-center w-full">
              <h3 className="buttonYellow-none text-3xl" style={{textShadow: 'none'}}>
                New World Coins
              </h3>
              <div className="flex flex-row md:flex-wrap w-full justify-center mt-10 select-none tracking-widest">
                <div className="flex w-96 flex-col md:mt-10 justify-start items-center order-2">
                  {/* <h4 className="flex justify-center bg-black bg-opacity-80 text-center items-center text-3xl p-1.5">
                    Choose Your Server
                  </h4> */}
                  <p className="buttonWhite-none text-black bg-textWhite mb-4 font-bold cursor-default" style={{textShadow: 'none'}}>
                    Choose Your Server
                  </p>

                  <div className="flex text-2xl justify-around w-full">
                    <span className="flex rounded-sm bg-black bg-opacity-70 border-black border p-1.5">
                      US East
                    </span>
                    <span className="flex rounded-sm bg-black bg-opacity-70 border-black border p-1.5">
                      Baltia
                    </span>
                  </div>
                  <input
                      className="bg-black bg-opacity-70 border-black border rounded-sm min-w-full text-center outline-none text-2xl mt-5 py-1.5"
                      type="text"
                      placeholder="Email"
                    />
                </div>

                <div className="flex w-96 flex-col items-center order-1">
                  <p className="buttonWhite-none text-black bg-textWhite mb-4 font-bold cursor-default" style={{textShadow: 'none'}}>AMOUNT</p>
                  <div className="flex flex-row">
                    <div
                      className="flex justify-center items-center w-10 mx-2 rounded-sm bg-black bg-opacity-70 border-black border cursor-pointer text-4xl pb-1"
                      onClick={() => {
                        if (amount >= 1000)
                          return setAmount(Number(amount) - 500)
                      }}
                    >
                      <span>-</span>
                    </div>
                    <input
                      className="text-yellow rounded-sm bg-black bg-opacity-70 border-black border w-40 outline-none text-2xl text-center py-1.5"
                      type="number"
                      min="500"
                      step="500"
                      value={amount}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div
                      className="flex justify-center items-center w-10 mx-2 rounded-sm bg-black bg-opacity-70 border-black border cursor-pointer text-4xl"
                      onClick={() => {
                        setAmount((prevAmount) => Number(prevAmount) + 500)
                      }}
                    >
                      <span className='flex text-center justify-center items-center w-full'>+</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <input
                      className="rounded-sm bg-black bg-opacity-70 border-black border w-64 text-center outline-none text-2xl mt-5 py-1.5"
                      type="text"
                      placeholder="Character name"
                    />
                  </div>
                </div>
              </div>
              <button
                className="buttonYellow mt-8"
                onClick={() => {
                  createOrder()
                }}
              >
                Checkout ({formatter.format(price)})
                <i className="flex items-center justify-center ml-3">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </i>
              </button>
            </div>
            {/* <button className="buttonYellow">coming soon</button> */}
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
          className="faq flex items-start justify-center w-full bg-no-repeat bg-center bg-cover mt-0"
          // style={{ backgroundImage: `url(${faq2.src})` }}
        >
          <div className="container flex-col max-w-3xl items-center justify-center mt-10">
            <Faqs />
            <Link href="/[...params]" as="#products">
              <button className="buttonYellow mt-8">
                <a className="flex">
                  buy now
                  <i className="flex items-center justify-center ml-3">
                    <FontAwesomeIcon icon={faArrowRight} />
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
