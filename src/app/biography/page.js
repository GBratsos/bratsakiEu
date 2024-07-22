'use client'

import Image from 'next/image'
import Link from 'next/link'
import Menu from '../components/menu'
import { motion } from 'framer-motion'

const container = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1.2,
      delayChildren: 0.35,
      staggerChildren: 0.4,
    },
  },
}

const opacityVariant = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
  },
}

export default function Biography() {
  return (
    <section className='section gradient-bg gradient-bg pb-8 lg:pb-16'>
      <motion.section
        whileInView='onscreen'
        initial='offscreen'
        variants={container}
        viewport={{ amount: 0.35, once: true }}
        className='biography relative'
      >
        <Image
          src='/bratsaki-rally.webp'
          alt='George Bratsos holding OMP wheel'
          priority
          fill
          className='object-cover'
        />
        <div className='container relative mx-auto px-4'>
          <Menu />
          <div className='py-[12%]'>
            <motion.h1
              variants={opacityVariant}
              className='mb-8 text-3xl font-bold text-blue-100 lg:mb-[40px] lg:text-5xl'
            >
              Profile
            </motion.h1>
            <motion.h2 variants={opacityVariant} className='mt-2 text-[24px] text-white lg:mt-4 lg:text-[32px]'>
              <strong>From simracing to real rallies.</strong>
            </motion.h2>
          </div>
        </div>
      </motion.section>

      <section className='container mx-auto px-4'>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          variants={container}
          viewport={{ amount: 0.35, once: true }}
          className='mt-8 grid gap-8 lg:mt-32 lg:grid-cols-2'
        >
          <div className='lg:lg:py-8'>
            <motion.h2
              variants={opacityVariant}
              className='mb-8 text-[30px] font-black leading-none text-red lg:text-[40px]'
            >
              George Bratsos
            </motion.h2>
            <motion.p variants={opacityVariant} className='text-xl'>
              George Bratsos is a dynamic and passionate Greek simracer and rally driver. Growing up in his
              family&apos;s garage, George began driving at a young age. He ventured into simracing in 2009, and in
              2018, he realized his dream of racing a Peugeot 205 Maxi built in the family&apos;s garage.
            </motion.p>
          </div>
          <motion.div variants={opacityVariant} className='relative py-40 lg:py-0'>
            <Image
              loading='lazy'
              src='/george-bratsos-mechanic.webp'
              alt='George Bratsos prepares Peugeot 205 GTi'
              fill
              className='object-cover'
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          variants={container}
          viewport={{ amount: 0.35, once: true }}
          className='mt-8 grid gap-8 lg:mt-32 lg:grid-cols-2'
        >
          <motion.div variants={opacityVariant} className='relative order-last py-40 lg:order-first lg:py-0'>
            <Image
              loading='lazy'
              src='/bratsaki-simracing.webp'
              alt='George Bratsos simracing profile'
              fill
              className='object-cover'
            />
          </motion.div>
          <div className='order-first lg:order-last lg:py-8'>
            <motion.p variants={opacityVariant} className='mb-6 text-xl'>
              A significant milestone came in 2014 when George became a world champion in Richard Burns Rally
              (RallyeSim) with the WayTooFast Rally Team. This victory marked the beginning of a series of successes
              until 2018. In addition to his team accomplishments, George also achieved notable solo wins in various
              rallies.
            </motion.p>
            <motion.p variants={opacityVariant} className='mb-6 text-xl'>
              In 2015, George began engaging more with his Greek fans by promoting simracing through social media
              content and livestreams.
            </motion.p>
            <motion.p variants={opacityVariant} className='text-xl'>
              George is the founder of the largest Greek simrally community,&nbsp;
              <Link
                href='https://linktr.ee/dirthellenic'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-100 underline'
              >
                DiRT Hellenic community
              </Link>
              . This community focuses on simrally games, particularly DiRT Rally and EA Sports WRC 2023. They organize
              annual championships, charity events, and collaborate with real motorsport brands for virtual events.
            </motion.p>
          </div>
        </motion.div>
        <motion.idv
          initial='offscreen'
          whileInView='onscreen'
          variants={container}
          viewport={{ amount: 0.35, once: true }}
          className='mt-8 grid gap-8 lg:mt-32 lg:grid-cols-2'
        >
          <div className='lg:mt-0 lg:py-8'>
            <motion.p variants={opacityVariant} className='mb-6 text-xl'>
              In 2018, George turned a long-held dream into reality by creating the&nbsp;
              <Link
                href='https://rallydiaries.eu/en'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-100 underline'
              >
                RallyDiaries project
              </Link>
              . He built a Peugeot 205 GTi with his father in their garage, showcasing their passion and dedication to
              motorsport.
            </motion.p>
            <motion.p variants={opacityVariant} className='text-xl'>
              More determined than ever and following extensive preparation and various track tests, George demonstrated
              his capability to exceed expectations. In 2019, he won his first event at the Tsakona Hillclimb and
              secured several more podium finishes in other events throughout the year.
            </motion.p>
          </div>
          <div className='relative py-40 lg:py-0'>
            <Image
              loading='lazy'
              src='/peugeot-205-dimitsana-hillclimb.webp'
              alt='Peugeot 205 - George Bratsos'
              fill
              className='object-cover'
            />
          </div>
        </motion.idv>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          variants={container}
          viewport={{ amount: 0.35, once: true }}
          className='mt-8 grid gap-8 lg:mt-32 lg:grid-cols-2'
        >
          <div className='relative order-last py-40 lg:order-first lg:py-0'>
            <Image
              loading='lazy'
              src='/speedcar-xtrem-george-bratsos.webp'
              alt='George Bratsos driving Speedcar XTREM'
              fill
              className='object-cover'
            />
          </div>
          <div className='order-first lg:order-last lg:py-8'>
            <motion.p variants={opacityVariant} className='mb-6 text-xl'>
              As a simracing ambassador for Speedcar Greece, George promotes both simracing and crosscar racing by
              organizing online events and track days. His work with the online community inspires people to start
              simracing and to indulge their passion for motorsports.
            </motion.p>
            <motion.p variants={opacityVariant} className='text-xl'>
              George&apos;s passion for racing drives him to continuously seek new experiences. In 2021, he took part in
              the EKO Racing DiRT Games, where he competed in gravel events behind the wheel of a Speedcar XTREM 600cc.
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          variants={container}
          viewport={{ amount: 0.35, once: true }}
          className='mt-8 grid gap-8 lg:mt-32 lg:grid-cols-2'
        >
          <div className='lg:py-8'>
            <motion.p variants={opacityVariant} className='mb-6 text-xl'>
              In 2023, George participated in the National Hillclimb cup of southern Greece. After good results he
              managed to win the National Hillclimb cup of southern Greece in his class.
            </motion.p>
            <motion.p variants={opacityVariant} className='mb-6 text-xl'>
              George is not only active on the track but also on social media, where he consistently promotes simracing
              and motorsport.
            </motion.p>
            <motion.p variants={opacityVariant} className='text-xl'>
              He has a simple yet profoundly meaningful goal: to promote driving safety awareness through simracing and
              to unite simracers with the world of real racing. He achieves this by creating social media content,
              videos, and live streams that help people start simracing and encourage simracers to get involved in
              motorsport.
            </motion.p>
          </div>
          <div className='relative py-40 lg:py-0'>
            <Image loading='lazy' src='/omae-2023-1.webp' alt='' priority fill className='object-cover' />
          </div>
        </motion.div>
      </section>
    </section>
  )
}
