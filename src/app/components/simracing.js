'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const container = {
  offscreen: {},
  onscreen: {
    transition: {
      ease: 'easeInOut',
      duration: 0.4,
      delayChildren: 0.2,
      staggerChildren: 0.2,
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
export default function Simracing() {
  return (
    <section className='section simracing-section relative py-8 lg:py-16'>
      <Image src='/simracing.webp' loading='lazy' alt='From simracing to real rallies' fill className='object-cover' />
      <motion.div
        initial='offscreen'
        whileInView='onscreen'
        variants={container}
        viewport={{ amount: 0.45, once: true }}
        className='container mx-auto px-4'
      >
        <motion.h2
          variants={opacityVariant}
          className='mb-8 text-3xl font-bold text-white lg:mb-[40px] lg:max-w-[388px] lg:text-5xl'
        >
          From simracing to real rallies
        </motion.h2>

        <div className='grid gap-8 lg:grid-cols-2'>
          <div>
            <motion.p variants={opacityVariant} className='mb-6 text-xl'>
              During his student years, George set a goal to realize his dream. He purchased his first wheelbase and
              began honing his skills with simracing games. Through simracing, George connected with many real race
              drivers who helped him develop his driving abilities.
            </motion.p>
            <motion.p variants={opacityVariant} className='text-xl'>
              George achieved significant success by becoming the world champion in Richard Burns Rally (RallyeSim) with
              the WayTooFast Rally Team. He also established the largest simrally community in Greece,&nbsp;
              <Link
                href='https://linktr.ee/dirthellenic'
                target='_blank'
                rel='noopener noreferrer'
                className='underline'
              >
                DiRT Hellenic community
              </Link>
              , and became a simracing ambassador for Speedcar Greece. In this role, he promoted simracing and crosscar
              racing by organizing online events and track days.
            </motion.p>
          </div>
          <div>
            <motion.p variants={opacityVariant} className='mb-6 text-xl'>
              In 2018, George turned a long-held dream into reality by creating the&nbsp;
              <Link href='https://rallydiaries.eu/en' target='_blank' rel='noopener noreferrer' className='underline'>
                RallyDiaries project
              </Link>
              &nbsp;and building a Peugeot 205 GTi with his father in their garage. Following various track tests,
              George won his first hillclimb event in 2019 and achieved several more podium finishes in other hillclimb
              events that same year.
            </motion.p>
            <motion.p variants={opacityVariant} className='text-xl'>
              In 2023, George participated in the National Hillclimb Cup of Southern Greece. After achieving impressive
              results, he won the National Hillclimb Cup of Southern Greece in his class.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
