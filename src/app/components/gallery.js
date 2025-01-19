'use client'

import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ARTICLES_VARIANTS = {
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

const articleVariants = {
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

export default function Gallery() {
  return (
    <section className='section bratsaki-gallery relative py-8 lg:py-16'>
      <Image
        loading='lazy'
        src='/bratsaki-gallery.webp'
        alt='Bratsaki Gallery'
        fill
        className='absolute bottom-0 left-0 right-0 top-0 object-cover'
      />
      <div className='container mx-auto px-4 lg:justify-between lg:px-0'>
        <motion.div
          className='grid gap-8 md:grid-cols-2 xl:grid-cols-4'
          initial='offscreen'
          whileInView='onscreen'
          variants={ARTICLES_VARIANTS}
          viewport={{ amount: 0.2, once: true }}
        >
          <motion.div variants={articleVariants}>
            <Image
              loading='lazy'
              src='/speedcar-xtrem.webp'
              width={549}
              height={372}
              alt='Speedcar XTREM - George Bratsos.'
              className='rounded-3xl border-8 opacity-70 hover:border-black hover:opacity-100'
            />
          </motion.div>

          <motion.div variants={articleVariants}>
            <Image
              loading='lazy'
              src='/peugeot-205.webp'
              width={549}
              height={372}
              alt='Peugeot 205 by Bratsos Team.'
              className='rounded-3xl border-8 opacity-70 hover:border-black hover:opacity-100'
            />
          </motion.div>

          <motion.div variants={articleVariants}>
            <Image
              loading='lazy'
              src='/george-bratsos.webp'
              width={549}
              height={372}
              alt='George Bratsos - Peugeot 205.'
              className='rounded-3xl border-8 opacity-70 hover:border-black hover:opacity-100'
            />
          </motion.div>

          <motion.div variants={articleVariants}>
            <Image
              loading='lazy'
              src='/bratsaki-simracing.webp'
              width={549}
              height={372}
              alt='Bratsaki simracing.'
              className='rounded-3xl border-8 opacity-70 hover:border-black hover:opacity-100'
            />
          </motion.div>
        </motion.div>
        <div className='mt-8 text-center lg:mt-12'>
          <Link
            href='https://instagram.com/bratsaki'
            target='_blank'
            rel='noopener noreferrer'
            className='button mt-8 inline-flex items-center border-white px-[54px] py-[15px] font-black text-white hover:bg-white hover:text-red lg:mt-12 lg:w-[310px] lg:py-[22px]'
          >
            <span className='text-xl lg:text-[32px]'>VIEW MORE</span>
            <FontAwesomeIcon
              icon={faAngleRight}
              className='absolute bottom-0 right-[30px] top-0 hidden h-full opacity-0 lg:ms-4 lg:inline-block lg:w-[30px]'
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
