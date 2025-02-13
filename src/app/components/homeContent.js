'use client'

import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './menu'
import { motion } from 'framer-motion'
import { Tilt } from 'react-next-tilt'

const container = {
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

const opacityVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
}
export default function HomeContent() {
  return (
    <motion.section
      className='homeContent-section gradient-bg relative pb-8 lg:pb-16'
      variants={container}
      initial='hidden'
      animate='show'
    >
      <motion.div variants={opacityVariant} className='absolute top-0 right-0 bottom-0 left-[40%] lg:left-auto'>
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
              src='/georgebratsos.webp'
              alt='George Bratsos aka Bratsaki'
              width={934}
              height={1387}
              priority
              className='object-cover'
            />
          </div>
        </Tilt>
        <Image
          src='/georgebratsos.webp'
          alt='George Bratsos aka Bratsaki'
          width={934}
          height={1387}
          priority
          className='inline-block object-cover lg:hidden'
        />
      </motion.div>
      <div className='container mx-auto px-4'>
        <Menu />
        <div className='grid gap-8 pt-[260px] lg:grid-cols-2 lg:pt-[496px]'>
          <div>
            <motion.h1
              variants={opacityVariant}
              className='text-red relative text-[56px] leading-none font-black lg:min-h-[160px] lg:text-[80px]'
            >
              GEORGE BRATSOS
            </motion.h1>
            <motion.h2
              variants={opacityVariant}
              className='relative mt-2 text-[32px] text-white lg:mt-4 lg:text-[40px]'
            >
              <i>a.k.a.</i> <strong>BRATSAKI</strong>
            </motion.h2>
          </div>
        </div>
        <div className='mt-8 mb-[50px] grid grid-cols-3 gap-8 lg:mt-10 lg:mb-[107px]'>
          <motion.div variants={opacityVariant} className='col-span-2'>
            <h3 className='relative text-xl text-blue-100'>Sim racer & rally driver (in the making)</h3>
          </motion.div>
          <div className='relative h-[30px]'>
            <div className='arrow-down right-0 left-auto lg:left-0'>
              <div className='left'></div>
              <div className='right'></div>
            </div>
          </div>
        </div>
        <h2 className='mb-8 text-3xl font-bold text-blue-100 lg:mb-[40px] lg:text-5xl'>About George</h2>

        <div className='grid gap-8 lg:grid-cols-4'>
          <div className='relative col-span-2'>
            <p className='mb-6 text-xl'>George Bratsos is a dynamic and passionate Greek simracer and rally driver.</p>
            <p className='mb-6 text-xl'>
              Having grown up in his family&apos;s garage, George developed an early affinity for driving. He began
              simracing and realized his dream when he first raced a Peugeot 205 Maxi, which had been meticulously built
              in the family&apos;s garage.
            </p>
            <p className='text-xl'>
              George actively promotes simracing and motorsports in Greece through his online content and various
              motorsport activities.
            </p>
          </div>
        </div>
        <div className='mt-8 grid items-center gap-8 lg:mt-16 lg:grid-cols-2'>
          <div className='text-center lg:text-left'>
            <Link
              href='/biography'
              aria-label='George Bratsos biography'
              className='button border-red text-red hover:bg-red inline-flex items-center px-[54px] py-[15px] font-black hover:text-black lg:w-[318px]'
            >
              <span className='text-xl lg:text-[32px]'>SEE PROFILE</span>
              <FontAwesomeIcon
                icon={faAngleRight}
                size='3x'
                className='invinsible absolute top-[13px] right-[30px] opacity-0 lg:ms-4'
              />
            </Link>
          </div>
          <div className='hidden lg:block'>
            <div className='bg-red h-1 w-[279px]'></div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
