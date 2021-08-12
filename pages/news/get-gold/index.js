import React from 'react'
import { MainLayout } from '../../../components/MainLayout'
import Image from 'next/image'
import Link from 'next/link'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img2 from '../../../assets/img/beginner-way/beginner-way2.webp'
import img3 from '../../../assets/img/beginner-way/beginner-way3.webp'

export default function New() {
  return (
    <MainLayout title="New World Store | Post buy gold coins">
      <section className="start flex items-center justify-center w-full">
        <div className="containerPost w-full flex-col">
          <Link href={'/news'}>
            <a className="mr-auto">
              <div className="buttonWhite mr-auto">
                <FontAwesomeIcon
                  className="flex items-center text-md"
                  icon={faChevronLeft}
                />
                <span className="flex items-center tracking-widest text-sm ml-4">
                  BACK TO NEWS
                </span>
              </div>
            </a>
          </Link>

          <h2 className="sectionTitle text-left mt-12 mb-2 whitespace-pre-wrap">
            {/* title */}
            How to get/buy gold coins in the new world?
          </h2>
          <h4 className="date flex text-lightYellow tracking-widest text-sm leading-7 uppercase opacity-90">
            Aug 12, 2021
          </h4>
        </div>
      </section>
      <section className="content tracking-wide font-medium mb-10">
        <div className="containerPost flex-col text-md s:text-lg">
          <div className="get-gold1 flex relative h-96 xs:h-56">
            {/* <Image
              className="object-cover"
              priority={true}
              src={'/news/beginner-way.webp'}
              layout="fill"
            /> */}
          </div>
          <div className="text mt-6">
            <span>
              <p className="my-3">Hello survivors!</p>
            </span>

            <span>
              <p className="my-3">
                In this post, we will learn how to buy gold coins in the new
                world and what they can be used for.
              </p>
            </span>

            <h3 className="font-Fell text-3xl text-left mt-10 whitespace-pre-wrap ">
              {/* posttitle */}
              How to buy?
            </h3>

            <span>
              <p className="my-3">
                You can purchase gold coins for the New World on our website by
                placing an order{' '}
                <Link href="/#products">
                  <a className="underline text-lightYellow">
                    <strong className="font-medium">here.</strong>
                  </a>
                </Link>{' '}
                You can choose any amount of gold and whatever server you play
                on. After purchase, within 30 minutes you will receive gold on
                your account.
              </p>
            </span>

            <span>
              <p className="my-3">
                We are one of the best new world services, we started selling
                gold even before the new world closed beta test. Customers asked
                to increase the volume and create a full-fledged store. This is
                what we did.
              </p>
            </span>

            <span>
              <p className="my-3">
                You can also get a discount coupon on purchase for our{' '}
                <Link href="https://discord.com/invite/6dzXay7ATB">
                  <a target="_blank" className="underline text-lightYellow">
                    <strong className="font-medium">Discord channel</strong>
                  </a>
                </Link>{' '}
                users.
              </p>
            </span>

            <h3 className="font-Fell text-3xl text-left mt-10 whitespace-pre-wrap ">
              {/* posttitle */}
              How to get by playing?
            </h3>

            <span>
              <p className="my-3">
                You get the main amount of gold for completing various quests.
                You can also farm gold by killing monsters in dungeons, there is
                a separate post on this topic. Also, the most profitable way to
                get gold is by trading in-game items, but for this method you
                need a starting capital.
              </p>
            </span>

            <div className="get-gold2 flex relative h-96 xs:h-56">
              {/* <Image
              className="object-cover"
              priority={true}
              src={'/news/beginner-way.webp'}
              layout="fill"
            /> */}
            </div>

            <h3 className="font-Fell text-3xl text-left mt-10 whitespace-pre-wrap ">
              {/* posttitle */}
              How to use gold in the new world?
            </h3>

            <span>
              <p className="my-3">
                The whole game is built on gold, you can&apos;t do anything without
                gold. Gold is the only way to improve your character so far.
                Buying armor, upgrades, buying weapons, crafting are all
                available if you have gold.
              </p>
            </span>
            <span>
              <p className="my-3">
                Transfer to your guild account, thereby helping in the
                development of your team. In short, gold reflects your progress
                in the game.
              </p>
            </span>
            <div className="mt-10">
              <span>
                <b className="my-3">Illustrations:</b> Amazon
              </span>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
