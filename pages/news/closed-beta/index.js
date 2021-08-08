import React from 'react'
import { MainLayout } from '../../../components/MainLayout'
import Image from 'next/image'
import Link from 'next/link'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function New() {
  return (
    <MainLayout title='New World Store | Post buy gold coins'>
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
            New World Closed Beta completed
          </h2>
          <h4 className="date flex text-lightYellow tracking-widest text-sm leading-7 uppercase opacity-90">
            Aug 5, 2021
          </h4>
        </div>
      </section>
      <section className="content tracking-wide font-medium mb-10">
        <div className="containerPost flex-col text-md s:text-lg">
          <div className="flex relative h-96 xs:h-56">
            <Image
              className="object-cover"
              src={'/news/closed-beta.webp'}
              layout="fill"
            />
          </div>
          <div className="text mt-6">
            <span>
              <p className="my-3">Hello Adventurers!</p>
            </span>

            <span>
              <p className="my-3">
                We are pleased to announce a new stage in the development of the
                New World game.
              </p>
            </span>

            <span>
              <p className="my-3">
                At its peak, Amazon CBT MMORPG New World attracted 200,000
                players and 700,000 Twitch viewers at the same time, and for the
                second week the game tops the Steam sales chart.
              </p>
            </span>

            <span>
              <p className="my-3">
                The final round of testing, in which the preorder owners were
                able to participate, came to an end, and the developers thanked
                the community for their support, feedback and bug reports. The
                servers are not working, there is a wipe ahead and the
                long-awaited release of a fantasy project.
              </p>
            </span>

            <span>
              <p className="my-3">
                Many gamers have faced technical difficulties, and experts like
                Asmongold, while generally praising New World, are not at all
                sure if it&apos;s ready for the premiere. Should the studio postpone
                debut again? Or is a month quite enough to work on bugs?
              </p>
            </span>
            <span>
              <p className="my-3">
                By the release, the developers promised to fix more bugs in the
                game. And also optimize the game. In the end, the benchmark
                results weren&apos;t the best.
              </p>
            </span>

            <span>
              <p className="my-3">
                According to preliminary information, New World will be released
                on PC on September 28th. You can discuss the game on our Discord
                channel. And on the site you will find news, articles, as well
                as the <Link href="/#products"><a className='underline text-lightYellow'><strong className='font-medium'>purchase of gold in the NEW WORLD.</strong></a></Link>
              </p>
            </span>

            <div className="mt-10">
              <span>
                <b className="my-3">Source:</b>{' '}
                <Link href={'https://www.newworld.com/en-us'}>
                  <a className="underline">Amazon</a>
                </Link>
              </span>
              <br />
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
