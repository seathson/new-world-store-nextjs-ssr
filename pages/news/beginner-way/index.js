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
            The basics and the beginner&quot;s path
          </h2>
          <h4 className="date flex text-lightYellow tracking-widest text-sm leading-7 uppercase opacity-90">
            Aug 7, 2021
          </h4>
        </div>
      </section>
      <section className="content tracking-wide font-medium mb-10">
        <div className="containerPost flex-col text-md s:text-lg">
          <div className="flex relative h-96 xs:h-56">
            <Image
              className="object-cover"
              src={'/news/beginner-way.webp'}
              layout="fill"
            />
          </div>
          <div className="text mt-6">
            <span>
              <p className="my-3">Hello survivors!</p>
            </span>

            <span>
              <p className="my-3">
                In this article, you will find out where to start your
                development in New World. What quests are in the game. And you
                will also find information on factions.
              </p>
            </span>

            <h3 className="font-Fell text-3xl text-left mt-10 whitespace-pre-wrap ">
              {/* posttitle */}
              Where to begin?
            </h3>

            <span>
              <p className="my-3">
                After joining the game, you will have a few quests around the
                campfire, and I highly recommend that you make crafting tools
                from the start. An ax, a knife, a sickle, a pickaxe in order to
                swing the profession from the very beginning, this is important,
                you can earn a coin on this, or make yourself consumables
                (potions, food, arrows, bullets, etc.), armor with weapons.
              </p>
            </span>

            <span>
              <p className="my-3">
                It is very important to focus on quests at the very beginning,
                there are several types of them:
              </p>
              <ul className="pl-4">
                <li>Story quests</li>
                <li>Orders from the bulletin board</li>
                <li>Faction quests</li>
                <li>General quests</li>
              </ul>
            </span>

            <span>
              <p className="my-3">
                These are quests that give more experience, more coins, more
                nitrogen - the most. This no longer gives a lot of experience
                for normal mob stuffing, but being low level to hunt high level
                animals as part of a group is cool. I think over time they will
                return the group farm of experience against strong beasts.
              </p>
            </span>

            <span>
              <p className="my-3">
                If you want to play and not think about development, we
                recommend{' '}
                <Link href="/#products">
                  <a className="underline text-lightYellow">
                    <strong className="font-medium">
                      our gold store in New Wrold.
                    </strong>
                  </a>
                </Link>
              </p>
            </span>
            <div className="flex relative h-96 xs:h-56 my-10">
              <Image className="object-cover" src={img2.src} layout="fill" />
            </div>
            <h3 className="font-Fell text-3xl text-left mt-10 whitespace-pre-wrap">
              {/* posttitle */}
              Quests
            </h3>

            <span>
              <p className="my-3">
                Friends, if you are confused in the quests, press &ldquo;J&ldquo; and you
                will see several tabs. Main plots - The storyline is very
                important for you, then there will be a division into general
                quests, orders from the board and faction.
              </p>
            </span>
            <span>
              <p className="my-3">
                It is necessary to complete the line of plot quests, even if the
                plot is not at all important to you, then you really need to get
                the Nitrogen Staff, which will allow you to go into dungeons,
                close rifts, etc. without it. you will lose a lot of content.
              </p>
            </span>
            <span>
              <p className="my-3">
                In order for the settlements to develop, you can fulfill these
                orders, the fulfillment of these orders will also give you
                experience, money and regional position, as well as the
                development of the city.
              </p>
            </span>

            <h3 className="font-Fell text-3xl text-left mt-10 whitespace-pre-wrap">
              {/* posttitle */}
              Faction and faction quests
            </h3>

            <span>
              <p className="my-3">
                A faction is an alliance on whose side you are fighting, without
                it you will not be able to join guilds, participate in quests
                and PVP wars, and besides, being a member of a faction is very
                beneficial for the players themselves.
              </p>
            </span>
            <span>
              <p className="my-3">
                The faction store sells items that cannot be obtained in any
                other way. The faction has several levels, and to increase each
                level of the faction, a quest is required (you can go through
                them alone, but it is more fun in a group), which opens up
                access to further advancement, they are not complicated and
                understandable, there are markers everywhere, a guide is not
                needed (if where - then something will be needed, I will write).
                If suddenly you have reached level 2, for example, you can
                continue to complete pvp quests, receive rewards and use the
                store, but access to the development of the level will be
                blocked, you will only receive tokens. Therefore, I recommend
                not to hesitate with such quests.
              </p>
            </span>
            <span>
              <p className="my-3">
                You will also receive a good coin in the form of factional
                experience and tokens for completing pvp quests and killing
                players, because for each kill, about 100 experience points and
                tokens are given. and for the quest, a maximum of about 400 is
                given (I&quot;ll be more precise) So don&quot;t be afraid of PVP, it&quot;s
                cool here. In a separate article I will talk about the beginning
                of the war for the village.
              </p>
            </span>

            <div className="flex relative h-96 xs:h-56 my-10">
              <Image className="object-cover" src={img3.src} layout="fill" />
            </div>

            <h3 className="font-Fell text-3xl text-left mt-10 whitespace-pre-wrap">
              {/* posttitle */}
              How to get to the dungeon?
            </h3>
            <span>
              <p className="my-3">
                The very first dungeon will launch you after receiving the
                Nitrogen Staff. but I highly recommend building a pack of 5
                people with level 25, because the last boss is quite difficult,
                and even in this pack, the guys died, but a lot depends on the
                chemistry of the players.
              </p>
            </span>
            <span>
              <p className="my-3">
                Our group of 4 people (it was quite late and did not recruit
                fully, we repent) Tank 22, DD 22, heal 18, and musket lvl 5 (Do
                not ask how this happened, but Beebock, you are really great)
                were able to complete the entire dungeon in the first campaign,
                but decided to go to the boss, because the damage was simply not
                enough, next to the boss there is a nepis that constantly
                revives after death (I suggest changing this to a longer spawn,
                although in a good pack they are almost not felt) and she
                attacks another part of the group , so there was a funny
                carousel, but if there were 5 of them, I&quot;m sure we would have
                finished off the boss, and without lvl 25.
              </p>
            </span>
            <span>
              <p className="my-3">
                I will describe the description of the dungeon, tactics and
                tasks in a separate guide. In addition, for each dungeon, you
                need keys that can be crafted ... (Where to craft? Damn forgot,
                I&quot;ll go into the game, take screenshots, continue the
                description)
              </p>
            </span>

            <h3 className="font-Fell text-3xl text-left mt-10 whitespace-pre-wrap">
              {/* posttitle */}
              Tips for players:
            </h3>

            <span>
              <ul className="pl-4">
                <li>
                  During quests, skin the animals, farm the place where the
                  quest is located (The resources and experience that you get
                  through this are not superfluous)
                </li>
                <li>
                  Be sure to collect all the chests, items for crafting drop out
                  of the chests, which you can sell or use, otherwise you will
                  not be able to get them in another way.
                </li>
                <li>
                  Be sure to collect all the plants you see, ore, turkey
                  feathers, in the saltpeter caves (I will give more information
                  on this substance in the crafting guide)
                </li>
                <li>
                  Don&quot;t forget to pitch your tents. it takes little time, but if
                  you die it&quot;s easy to come back. (Always carry flint (you can
                  collect brown stones from the ground) and wood)
                </li>
              </ul>
            </span>
            <span>
              <p className="my-3">
                According to preliminary information, New World will be released
                on PC on September 28th. You can discuss the game on our Discord
                channel. And on the site you will find news, articles, as well
                as the{' '}
                <Link href="/#products">
                  <a className="underline text-lightYellow">
                    <strong className="font-medium">
                      purchase of gold in the NEW WORLD.
                    </strong>
                  </a>
                </Link>
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
