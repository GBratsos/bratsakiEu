'use client'

import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Menu from './menu'
import { motion } from 'framer-motion'

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
export default function SimpleHeader() {
  return (
    <motion.section
      whileInView='onscreen'
      initial='offscreen'
      variants={container}
      viewport={{ amount: 0.35, once: true }}
      className='biography relative'
    >
      <Image src='/bratsaki-rally.webp' alt='George Bratsos holding OMP wheel' priority fill className='object-cover' />
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
  )
}
