import Link from 'next/link'
import { MainLayout } from '../components/MainLayout'
import { Case } from '../components/Case'
import { Faqs } from '../components/Faq/Faqs'
import screen from '../assets/img/screen.png'
import screen2 from '../assets/img/screen2.png'
import faq from '../assets/img/faq.png'
import faq2 from '../assets/img/faq2.png'
import service from '../assets/img/service.png'
import { faGem, faDove, faShieldAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <MainLayout title={'Home Page'}>
      <section
        className="welcome flex justify-center bg-no-repeat bg-center bg-cover items-center w-full"
        style={{ backgroundImage: `url(${screen.src})`, height: '70vh' }}
      >
        <div className="container flex-col font-medium">
          <div className="flex flex-col flex-shrink-1 max-w-xl ">
            <h3 className="flex text-lightYellow tracking-widest text-sm leading-7 uppercase">
              THE MYSTICAL ISLAND OF
            </h3>
            <h1>BUY A LEAGUE OF LEGENDS ACCOUNT WITH INSTANT DELIVERY</h1>
            <p>
              From tattered rags to powerful hero, you'll grow in might, skill,
              and influence you adventure in Aeternum. When and how you progress
              is up to you: each gathered plant, tanned hide, slain foe, or
              completed quest will make you better at the particular skill or
              weapon you're using and will also contribute to your overall
              character level.
            </p>
            <button className="buttonYellow mr-auto mt-8">
              <span className="flex">MORE ABOUT PROGRESSION</span>
            </button>
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
      <section className="flex flex-col mt-20 items-center w-full">
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
              title="Highest Quality Smurfs"
              text="Maintaining an impeccable reputation is a top priority for us, as a consequence providing accounts of the highest quality is laid down in the core principles of our service."
            />

            <Case
              icon={faShieldAlt}
              title="Lifetime Warranty"
              text="We fully control the process of leveling our accounts. This allows us to be fully confident in their reliability and provide a lifetime warranty for free on absolutely every account we sell."
            />

            <Case
              icon={faDove}
              title="Instant Delivery"
              text="Our automatic delivery system works 24/7, account details will be sent to your email address instantly after the payment."
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col mt-20 items-center w-full">
        <div className="container flex-col items-center">
          <h2 className="sectionTitle">Select your service</h2>
          <p className="sectionSubtitle tracking-widest mt-4">
            Below you can see the different types of services.
            <br />
            Choose the service that suits you, and after payment we will
            immediately provide it.
          </p>
        </div>
        <div
          className="flex items-center justify-center w-full bg-no-repeat bg-center bg-cover mt-6"
          style={{ backgroundImage: `url(${service.src})`, minHeight: '50vh' }}
        >
          <div className="container items-center justify-center">
            <button className="buttonYellow">coming soon</button>
          </div>
        </div>
      </section>
      <section className="flex flex-col mt-20 items-center w-full">
        <div className="container flex-col items-center">
          <h2 className="sectionTitle">F A Q</h2>
          <p className="sectionSubtitle tracking-widest mt-4">
            Answers to the most frequently asked questions about our service New
            World Store!
          </p>
        </div>
        <div
          className="flex items-start justify-center w-full bg-no-repeat bg-center bg-cover mt-6"
          style={{ backgroundImage: `url(${faq2.src})`, minHeight: '75vh' }}
        >
          <div className="container flex-col max-w-3xl items-center justify-center">
            <Faqs/>
            <button className="buttonYellow mt-8">
              <span className="flex">buy now <i className='flex items-center justify-center ml-3'><FontAwesomeIcon icon={faShoppingCart}/></i></span>
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
