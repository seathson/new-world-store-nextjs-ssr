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
            Factions in New World
          </h2>
          <h4 className="date flex text-lightYellow tracking-widest text-sm leading-7 uppercase opacity-90">
            Aug 15, 2021
          </h4>
        </div>
      </section>
      <section className="content tracking-wide font-medium mb-10">
        <div className="containerPost flex-col text-md s:text-lg">
          <div className="factions1 flex relative h-96 xs:h-56">
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
                Today we will find out what factions exist in the New World,
                what they are for and what their types are.
              </p>
            </span>

            <h3 className="font-Fell text-3xl text-left mt-10 whitespace-pre-wrap ">
              {/* posttitle */}
              Marauders, Covenant and Syndicate.
            </h3>

            <span>
              <p className="my-3">
                <strong>The Marauders</strong> are a ruthless military force
                seeking to create a free nation in which anyone with power can
                thrive and profit.
              </p>
            </span>
            <span>
              <p className="my-3">
                <strong>The Syndicate</strong> is a secret organization of
                immeasurable cunning and intelligence in search of forbidden
                knowledge to usher in a new era of enlightenment.
              </p>
            </span>
            <span>
              <p className="my-3">
                <strong>The Covenant</strong> is an ardent group of humans who
                have taken it upon themselves to cleanse the land of heretics
                and defilers so that its true holy nature can flourish and
                justice can be restored.
              </p>
            </span>

            <span>
              <p className="my-3">
                After arriving at the shore of Aeternum, you will be guided
                through a series of beach beginner quests. You will need to
                complete these quests. If you do not complete these quests, you
                will not be able to access the quests in the city. So don&apos;t miss
                them.
              </p>
            </span>

            <span>
              <p className="my-3">
                Once you complete the first few quests, you will be directed to
                the nearest town. You will need to continue the quest chain and
                eventually you will be directed to the first faction leader to
                complete the faction questline. Once you&apos;ve completed the
                faction quests for all three faction leaders, you can choose
                which faction you want to join.
              </p>
            </span>

            <span>
              <p className="my-3">
                You must reach level 10 (which you will get by completing all
                the quests) and complete the corresponding quests, so that you
                can then be able to choose one of the 3 factions. Keep in mind
                that after you select a faction, you will be tied to that
                faction and will not be able to switch. If you want to play as a
                different faction, you will have to start over on that server or
                join a different server.
              </p>
            </span>

            <h3 className="font-Fell text-3xl text-left mt-10 whitespace-pre-wrap ">
              {/* posttitle */}
              Company and your chosen faction.
            </h3>

            <span>
              <p className="my-3">
                It is also important to note that the governor or leader of your
                company (guild) will determine which faction you fight for. So,
                whichever faction the governor chooses, you need to make sure
                you choose the same faction so that you can be with the company
                of your choice.
              </p>
            </span>

            <div className="factions3 flex relative h-96 xs:h-56">
              {/* <Image
              className="object-cover"
              priority={true}
              src={'/news/beginner-way.webp'}
              layout="fill"
            /> */}
            </div>

            <h3 className="font-Fell text-3xl text-left mt-10 whitespace-pre-wrap ">
              {/* posttitle */}
              Faction target.
            </h3>

            <span>
              <p className="my-3">
                The ultimate goal for anyone in any faction should be to help
                your faction control as much of the island&apos;s territory as
                possible, because when you do, you get buffs that include more
                damage against certain Aeternum creatures, you can get more
                resources while collecting, you will be able to craft
                higher-level items and have a little more luck when searching
                chests. Thus, the more territories your faction controls, the
                stronger you will become as a player.
              </p>
            </span>

            <h3 className="font-Fell text-3xl text-left mt-10 whitespace-pre-wrap ">
              {/* posttitle */}
              Faction missions.
            </h3>

            <span>
              <p className="my-3">
                So how does a faction control territory? War! But before you can
                actually declare war on another faction, that faction&apos;s control
                on their territory must first be undermined, and if you are a
                faction that is trying to maintain control, then you, as a
                member of that faction, must actively contribute to this.
              </p>
            </span>

            <div className="factions2 flex relative h-96 xs:h-56">
              {/* <Image
              className="object-cover"
              priority={true}
              src={'/news/beginner-way.webp'}
              layout="fill"
            /> */}
            </div>

            <h3 className="font-Fell text-3xl text-left mt-10 whitespace-pre-wrap ">
              {/* posttitle */}
              Declaration of war.
            </h3>

            <span>
              <p className="my-3">
                As soon as control of a territory is reduced to such an extent
                that it becomes vulnerable to a declaration of war, then any
                guild from the enemy faction will be able to declare war on that
                territory. When this is done, one of the companies that have
                declared war will be randomly selected as the Vanguard.
              </p>
            </span>
            <span>
              <p className="my-3">
                The leaders of the chosen company are required to become the
                vanguard in order to replenish their forces with players who
                volunteer in battles, and the vanguard will be the company that
                controls the territory if the war is won. This system enables
                small companies to control territories.
              </p>
            </span>
            <span>
              <p className="my-3">
                So, even if you have a company of 10 people, you will still be
                able to own the territory? Yes, if a 10-man company declares war
                and is chosen as the vanguard, then it brings in 40 other
                players who have volunteered to fight to help you complete your
                50-man siege team. So yes, even if you are a one-man company,
                you will still have the opportunity to own territory. It is
                worth noting that you cannot declare war on a company from the
                same faction as you.
              </p>
            </span>

            <h3 className="font-Fell text-3xl text-left mt-10 whitespace-pre-wrap ">
              {/* posttitle */}
              Should a player join a faction?
            </h3>

            <span>
              <p className="my-3">
                No, you are not forced to join a faction in NEW WORLD, but keep
                in mind that if you do not, you will not be able to participate
                in many aspects of the game. You will not be able to check in
                for open world PvP or join a company. You will not be able to
                help undermine or help control the territory, <strong>you will not be
                able to do factional quests and buy factional items either!</strong> 
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
