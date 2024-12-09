'use client'

import Image from 'next/image'
import Link from 'next/link'
import Menu from '../components/menu'
import { motion } from 'framer-motion'
import { Tilt } from 'react-next-tilt'
import Podcasts from '../components/latestPodcasts'

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
  return (
    <section>
      <motion.section
        className='homeContent-section gradient-bg relative pb-8 lg:pb-16'
        variants={topContainer}
        initial='hidden'
        animate='show'
      >
        <motion.div variants={topOpacityVariant} className='absolute bottom-0 right-0 top-0 lg:left-auto'>
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
        <div className='container z-20 mx-auto px-4 xl:z-10'>
          <Menu />
          <div className='grid gap-8 pt-[260px] lg:pt-[496px] xl:grid-cols-2'>
            <div>
              <motion.h1
                variants={topOpacityVariant}
                className='relative text-[56px] font-black leading-snug text-red lg:min-h-[160px] lg:text-[59px]'
              >
                Pedal to the metal
                <p className='text-[40px] font-bold leading-none lg:text-[50px]'>
                  <i>without tomorrow</i>
                </p>
              </motion.h1>
              <motion.h2
                variants={topOpacityVariant}
                className='relative mt-2 text-[32px] text-white lg:mt-4 lg:text-[40px]'
              >
                Hosted by <strong>George Bratsos</strong>
              </motion.h2>
            </div>
          </div>
          <div className='mb-[50px] mt-8 grid grid-cols-3 gap-8 lg:mb-[107px] lg:mt-10'>
            <motion.div variants={opacityVariant} className='col-span-2'>
              <h3 className='relative text-xl text-blue-100'>Sim racer & rally driver (in the making)</h3>
            </motion.div>
            <div className='relative col-start-3 h-[30px]'>
              <div className='arrow-down left-auto right-0 lg:left-0'>
                <div className='left'></div>
                <div className='right'></div>
              </div>
            </div>
          </div>
          <h2 className='mb-8 text-3xl font-bold text-blue-100 lg:mb-[40px] lg:text-5xl'>About the Podcast</h2>

          <div className='grid gap-8 lg:grid-cols-4'>
            <div className='relative col-span-2'>
              <p className='mb-6 text-xl'>
                When Bratsaki starts talking, he forgets to stop. Car, racing, car racing and various experiences from
                tracks, tests and more with guests.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      <Podcasts />
    </section>
  )
}
