'use client'

import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PodcastLinks from './podcastLinks'

const PODCAST_VARIANTS = {
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

const buttonVariant = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

export default function Podcast() {
  return (
    <section className='section podcast-section relative py-8 lg:py-16'>
      <Image
        loading='lazy'
        src='/bratsaki-rally.webp'
        alt='Podcast - Pedal to the metal without tomorrow'
        fill
        className='object-cover'
      />
      <motion.div
        initial='offscreen'
        whileInView='onscreen'
        variants={PODCAST_VARIANTS}
        viewport={{ amount: 0.7, once: true }}
        className='container mx-auto px-4'
      >
        <h2 className='mb-8 text-3xl font-bold text-blue-100 lg:mb-[40px] lg:text-5xl'>Podcast</h2>
        <motion.h3 variants={opacityVariant} className='mb-8 text-xl text-white lg:mb-16 lg:text-3xl'>
          <i>Pedal to the metal without tomorrow.</i>
        </motion.h3>
        <div className='flex flex-col flex-wrap items-center justify-center lg:flex-row lg:items-end lg:justify-between'>
          <div>
            <motion.div variants={opacityVariant} className='lg:max-h-[358px] lg:max-w-[358px]'>
              <Image
                loading='lazy'
                src='/pedal-to-the-metal-without-tomorrow.webp'
                width={358}
                height={358}
                alt='Pedal to the metal without tomorrow.'
              />
            </motion.div>
          </div>
          <div>
            <motion.div variants={buttonVariant}>
              <Link
                href='/podcast'
                className='button my-8 inline-flex items-center border-white px-[54px] py-[15px] font-black text-white hover:bg-white hover:text-red lg:mt-12 lg:w-[350px] lg:py-[22px]'
              >
                <span className='text-xl lg:text-[32px]'>ALL EPISODES</span>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className='absolute bottom-0 right-[30px] top-0 hidden h-full opacity-0 lg:ms-4 lg:inline-block lg:w-[30px]'
                />
              </Link>
            </motion.div>
            <PodcastLinks />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
