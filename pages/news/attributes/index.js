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
            Attributes in the New World
          </h2>
          <h4 className="date flex text-lightYellow tracking-widest text-sm leading-7 uppercase opacity-90">
            Aug 20, 2021
          </h4>
        </div>
      </section>
      <section className="content tracking-wide font-medium mb-10">
        <div className="containerPost flex-col text-md s:text-lg">
          <div className="attributes1 flex relative h-96 xs:h-56">
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
                To survive in the New World, you will have to overcome many
                difficulties and learn new abilities and skills. The development
                of each character takes place in three main areas:{' '}
                <strong>Core Attributes</strong>, <strong>Trade Skills</strong>,
                and <strong>Weapon Mastery</strong>.
              </p>
            </span>

            <h3 className="font-Fell text-4xl text-left mt-10 whitespace-pre-wrap ">
              {/* posttitle */}
              Core Attributes
            </h3>

            <span>
              <p className="my-3">
                When you enter the world, your character will have 5 points for
                each of the main characteristics, and this is the minimum number
                of points below which he cannot fall. Each time your character
                is promoted, you gain one attribute point, which you can invest
                in any of them. The soft lid of each of the main characteristics
                is 60 units. You can exceed the limit by using various trinkets,
                but anything above the limit has less impact on the character's
                strength. If you want to redistribute the characteristics of
                your character, you can do it at any time for a small amount of
                coins. Respec up to level 20 will be completely free, it will
                give you the opportunity to experiment.
              </p>
            </span>
            <div className="attributes2 flex relative h-96 xs:h-56">
              {/* <Image
              className="object-cover"
              priority={true}
              src={'/news/beginner-way.webp'}
              layout="fill"
            /> */}
            </div>
            <span>
              <p className="my-3">
                Each characteristic has a threshold (50, 100, 150, etc. units),
                by stepping over which, you will receive a certain bonus.
              </p>
            </span>

            <h4 className="font-Fell text-3xl text-left mt-10 whitespace-pre-wrap ">
              {/* posttitle */}
              Strength (STR)
            </h4>

            <span>
              <p className="my-3">
                Strength governs your power with melee weapons. Heavy melee
                weapons, such as the War Hammer, scale their damage exclusively
                on Strength, while lighter melee weapons like the Sword scale
                their damage primarily on Strength, but also slightly on
                Dexterity.
              </p>
              <strong>Threshold Bonuses</strong>
              <ul className="pl-4">
                <li>
                  <b>50:</b> +10% chance to critical hit, +10 skinning speed
                </li>
                <li>
                  <b>100:</b> +5% piercing damage, +20% haste for 3 seconds
                  after skinning
                </li>
                <li>
                  <b>150:</b> Dodging cost 10 less stamina, -10% decrease in
                  weight of skinned items
                </li>
                <li>
                  <b>200:</b> +20% bonus backstab and headshot damage, +10%
                  skinning speed
                </li>
                <li>
                  <b>250:</b> +30% bonus critical hit damage on stunned, slowed,
                  or rooted enemies, +10% yield increase when skinning
                </li>
                <li>
                  <b>300:</b> Ammo has +15% chance of being returned, guaranteed
                  critical hit after a dodge roll
                </li>
              </ul>
            </span>

            <h3 className="font-Fell text-3xl text-left mt-10 whitespace-pre-wrap ">
              {/* posttitle */}
              Dexterity (DEX)
            </h3>

            <span>
              <p className="my-3">
                Dexterity governs the effectiveness with ranged weapons. Bows,
                Muskets, and Rapier attacks scale off a character’s Dexterity.
                Lighter melee weapons also see a benefit from Dexterity, but not
                as much as they gain from Strength.
              </p>
              <strong>Threshold Bonuses</strong>
              <ul className="pl-4">
                <li>
                  <b>50:</b> +15% damage to melee weapon light attacks, +10%
                  mining speed
                </li>
                <li>
                  <b>100:</b> +20% damage to melee weapon heavy attacks, +20
                  encumbrance
                </li>
                <li>
                  <b>150:</b> +50% stamina damage from melee weapon light and
                  heavy attacks, -10% decrease in weight of mined items
                </li>
                <li>
                  <b>200:</b> +20% damage on stunned, slowed, or rooted enemies,
                  +10% mining speed
                </li>
                <li>
                  <b>250:</b> Stamina regeneration continues while performing
                  light and heavy attacks with melee weapons, +10% yield
                  increase when mining
                </li>
                <li>
                  <b>300:</b> Light and heavy attacks with melee weapons gain
                  Grit, 25% chance to fully mine an ore node with a single swing
                </li>
              </ul>
            </span>

            <h3 className="font-Fell text-3xl text-left mt-10 whitespace-pre-wrap ">
              {/* posttitle */}
              Intelligence (INT)
            </h3>

            <span>
              <p className="my-3">
                Intelligence governs your power with magical weapons, including
                any magical Perks your weapons might have. Both purely magical
                weapons like the Fire Staff, and physical weapons with a Magical
                Perk (such as a Flaming Sword), grow in power based on your
                Intelligence Attribute.
              </p>
              <strong>Threshold Bonuses</strong>
              <ul className="pl-4">
                <li>
                  <b>50:</b> +10% damage to light and heavy magic attacks, +10%
                  harvest speed
                </li>
                <li>
                  <b>100:</b> +20% critical hit damage, 5% chance to gain 1
                  azoth when harvesting
                </li>
                <li>
                  <b>150:</b> +20% to elemental damage, -10% decrease in weight
                  of harvested items
                </li>
                <li>
                  <b>200:</b> +10 mana after a dodge, +10% harvest speed
                </li>
                <li>
                  <b>250:</b> +30% duration to damage of time spells, +10% yield
                  increase when harvesting
                </li>
                <li>
                  <b>300:</b> +30% damage on first hit on full health target,
                  -10% reduction in Azoth travel cost
                </li>
              </ul>
            </span>

            <h3 className="font-Fell text-3xl text-left mt-10 whitespace-pre-wrap ">
              {/* posttitle */}
              Focus (FOC)
            </h3>

            <span>
              <p className="my-3">
                Focus governs your Mana recovery rate and your skill cooldown
                times. Higher Focus not only means that you can cast more spells
                more regularly, but also that you can use your cooldown-based
                abilities with a higher frequency.
              </p>
              <strong>Threshold Bonuses</strong>
              <ul className="pl-4">
                <li>
                  <b>50:</b> +10% mana regeneration rate, +10% fishing line
                  tension
                </li>
                <li>
                  <b>100:</b> +20 to mana pool, +10% yield increase when
                  salvaging
                </li>
                <li>
                  <b>150:</b> +20% healing output, -10% decrease in weight of
                  fishing items
                </li>
                <li>
                  <b>200:</b> +20% duration on casted buffs, +10% fishing line
                  tension
                </li>
                <li>
                  <b>250:</b> +30 mana on any self or group kill, +10% increase
                  to caught fish size
                </li>
                <li>
                  <b>300:</b> When mana hits zero gain 200% mana regen for 10s
                  (60s cooldown), 10% cooldown reduction for Inn fast travel
                </li>
              </ul>
            </span>

            <h3 className="font-Fell text-3xl text-left mt-10 whitespace-pre-wrap ">
              {/* posttitle */}
              Constitution (CON)
            </h3>

            <span>
              <p className="my-3">
                Constitution governs your overall Health pool. The higher your
                Constitution, the more damage you can sustain before succumbing
                to your injuries.
              </p>
            </span>
            <span>
              <p className="my-3">
                Constitution has diminishing returns on the amount of HP granted
                per level the more points you put into it. It starts at 25 HP
                granted per attribute point, and decreases gradually until you
                get 21 HP per attribute. This decreased the total HP granted
                from Constitution slightly from 12,175 to 11,325, but increased
                the amount of HP players get from Constitution at a lower level.
              </p>
              <strong>Threshold Bonuses</strong>
              <ul className="pl-4">
                <li>
                  <b>50:</b> All health consumables +20% stronger, +10% logging
                  speed
                </li>
                <li>
                  <b>100:</b> Increase max health by 10% of physical armor, 10%
                  reduction on durability loss for tools
                </li>
                <li>
                  <b>150:</b> 20% reduction to crit damage taken, 10% decrease
                  in weight of logging items
                </li>
                <li>
                  <b>200:</b> +20% increase to armor, +10% logging speed
                </li>
                <li>
                  <b>250:</b> 80% damage reduction when full health, +10% yield
                  increase when logging
                </li>
                <li>
                  <b>300:</b> +30% duration of stun, slow, and root spells, 25%
                  chance to chop down a tree in a single swing
                </li>
              </ul>
            </span>

            <h3 className="font-Fell text-4xl text-left mt-10 whitespace-pre-wrap ">
              {/* posttitle */}
              Trade Skills
            </h3>

            <span>
              <p className="my-3">
                Crafting skills are a variety of non-combat skills that you can
                master. There are a total of 4 resource gathering skills, 5
                processing skills and 7 production skills.
              </p>
            </span>

            <div className="attributes3 flex relative h-96 xs:h-56">
              {/* <Image
              className="object-cover"
              priority={true}
              src={'/news/beginner-way.webp'}
              layout="fill"
            /> */}
            </div>

            <h3 className="font-Fell text-2xl text-left mt-10 whitespace-pre-wrap ">
              {/* posttitle */}
              Gathering Skills
            </h3>

            <span>
              <p className="my-1">This includes 4 skills:</p>
              <ul className="pl-4">
                <li>
                  <b>Mining</b> - collection of stone and various ores
                </li>
                <li>
                  <b>Skinning</b> - skinning of animals
                </li>
                <li>
                  <b>Logging</b> - tree felling
                </li>
                <li>
                  <b>Harvesting</b> - cathedral of fibers, fruits and vegetables
                </li>
              </ul>
            </span>

            <span>
              <p className="my-3">
                Improving these skills opens up the opportunity to harvest
                higher quality resources. In addition, with an increase in
                skill, you get the opportunity to discover nearby valuable
                resources and find special resources that are necessary for the
                manufacture of certain things.
              </p>
            </span>

            <h3 className="font-Fell text-2xl text-left mt-10 whitespace-pre-wrap ">
              {/* posttitle */}
              Refining Skills
            </h3>

            <span>
              <p className="my-1">This includes 5 skills:</p>
              <ul className="pl-4">
                <li>
                  <b>Smelting</b> - ore processing into ingots
                </li>
                <li>
                  <b>Stonecutting</b> - cleaning stone and turning it into
                  blocks, processing gems
                </li>
                <li>
                  <b>Woodworking</b> - turn wood into planks and other materials
                </li>
                <li>
                  <b>Tanning</b> - processing raw leather into craftable
                </li>
                <li>
                  <b>Weaving</b> - processing of fibers into fabric
                </li>
              </ul>
            </span>

            <span>
              <p className="my-3">
                Increasing the skills of this group opens up the possibility of
                processing higher-level resources into materials for crafting.
                As your skills in this group increase, the efficiency of
                resource use also grows: there is a chance to get additional
                resources while working.
              </p>
            </span>

            <h3 className="font-Fell text-2xl text-left mt-10 whitespace-pre-wrap ">
              {/* posttitle */}
              Crafting Skills
            </h3>

            <span>
              <p className="my-1">This includes 7 skills:</p>
              <ul className="pl-4">
                <li>
                  <b>Weaponsmithing</b> - making melee weapons
                </li>
                <li>
                  <b>Armoring</b> - making light and heavy armor
                </li>
                <li>
                  <b>Jewelcrafting</b> - making accessories
                </li>
                <li>
                  <b>Engineering</b> - making ranged weapons and ammunition
                </li>
                <li>
                  <b>Arcana</b> - creation of potions, flasks and magic weapons
                </li>
                <li>
                  <b>Cooking</b> - preparation of food and drinks
                </li>
                <li>
                  <b>Furnishing</b> - making furniture, chests and trophies for
                  players' houses
                </li>
              </ul>
            </span>

            <span>
              <p className="my-3">
                Increasing the level of production skills unlocks more recipes
                and their more powerful variations, as well as some other things
                that will be known later.
              </p>
            </span>

            <h3 className="font-Fell text-4xl text-left mt-10 whitespace-pre-wrap ">
              {/* posttitle */}
              Weapon Mastery
            </h3>

            <span>
              <p className="my-3">
                Using a weapon in battle gives experience in the corresponding
                skill of wielding this weapon, i.e. to upgrade a certain type of
                weapon, you just need to use it more often. The game has no
                restrictions on pumping weapon skills and, in theory, you can
                master all of them.
              </p>
            </span>

            <span>
              <p className="my-3">
                New World has one race and no character classes, instead each
                weapon type has two Skill Trees, and each Skill Tree in turn has
                a choice of active abilities, passive modifiers and bonuses that
                are unique to that weapon type. ... Thus, your role will be
                determined by what is in your hands at the moment.
              </p>
            </span>

            <div className="attributes4 flex relative h-96 xs:h-56">
            {/* <Image
              className="object-cover"
              priority={true}
              src={'/news/beginner-way.webp'}
              layout="fill"
            /> */}
          </div>

            <span>
              <p className="my-3">
                At the moment, there are 4 types of weapons in the game, i.e. 7
                classes. Each of them is analyzed in a separate guide with a
                full translation of the abilities into Russian:
              </p>
              <ul className="pl-4">
                <li>
                  <b>One-Handed Weapons</b> - Straight Sword, Hatchet
                </li>
                <li>
                  <b>Two-Handed Weapons</b> - War Hammer
                </li>
                <li>
                  <b>Magic</b> - Fire Staff, Life Staff
                </li>
                <li>
                  <b>Ranged Weapons</b> - Bow, Musket
                </li>
              </ul>
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
