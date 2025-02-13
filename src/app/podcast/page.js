'use client'

import Image from 'next/image'
import Menu from '../components/menu'
import { motion } from 'framer-motion'
import { Tilt } from 'react-next-tilt'
import Podcasts from '../components/latestPodcasts'
import podcastData from '../podcastData'

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

const topContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1.2,
      delayChildren: 0.6,
      staggerChildren: 0.4,
    },
  },
}

const topOpacityVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
}

const podcastVariants = {
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
  let podcasts = podcastData

  return (
    <section className='gradient-bg overflow-x-hidden'>
      <motion.section
        className='homeContent-section relative pb-8 lg:pb-16'
        variants={topContainer}
        initial='hidden'
        animate='show'
      >
        <motion.div
          variants={topOpacityVariant}
          className='absolute top-0 right-[-128px] bottom-0 md:right-0 lg:left-auto'
        >
          <Tilt
            borderRadius={0}
            spotGlareEnable={false}
            lineGlareEnable={false}
            aria-hidden='true'
            scale={1}
            tiltReverse={false}
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            preserve3dEnable={false}
          >
            <div className='hidden lg:block'>
              <Image
                src='/bratsaki.webp'
                alt='George Bratsos'
                width={1265}
                height={1222}
                priority
                className='object-cover'
              />
            </div>
          </Tilt>
          <Image
            src='/bratsaki.webp'
            alt='George Bratsos'
            width={1265}
            height={1222}
            priority
            className='inline-block object-cover lg:hidden'
          />
        </motion.div>
        <div className='container mx-auto px-4'>
          <Menu />
          <div className='grid gap-8 pt-[260px] lg:pt-[496px] xl:grid-cols-2'>
            <div>
              <motion.h1
                variants={topOpacityVariant}
                className='text-red relative text-[38px] leading-snug font-black lg:min-h-[160px] lg:text-[59px]'
              >
                Pedal to the metal
                <p className='text-[36px] leading-none font-bold lg:text-[50px]'>
                  <i>without tomorrow</i>
                </p>
              </motion.h1>
              <motion.h2
                variants={topOpacityVariant}
                className='relative mt-4 text-[26px] text-white lg:mt-4 lg:text-[40px]'
              >
                Hosted by <strong>George Bratsos</strong>
              </motion.h2>
            </div>
          </div>
          <div className='mt-4 mb-[50px] grid grid-cols-3 gap-8 lg:mt-10 lg:mb-[107px]'>
            <motion.div variants={opacityVariant} className='col-span-2'>
              <h3 className='relative text-xl text-blue-100'>Sim racer & rally driver (in the making)</h3>
            </motion.div>
            <div className='relative col-start-3 h-[30px]'>
              <div className='arrow-down right-0 left-auto lg:left-0'>
                <div className='left'></div>
                <div className='right'></div>
              </div>
            </div>
          </div>
          <h2 className='mb-8 text-3xl font-bold text-blue-100 lg:mb-[40px] lg:text-5xl'>About the Podcast</h2>

          <div className='grid gap-8 lg:grid-cols-4'>
            <div className='relative col-span-2'>
              <p className='mb-6 text-xl'>
                When Bratsaki starts talking, he forgets to stop. Cars, motorsports and various experiences from tracks,
                tests and more with guests.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      <Podcasts podcastData={podcasts} />
    </section>
  )
}
