'use client'

import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import PodcastLinks from './podcastLinks'

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

export default function Podcasts({ podcastData }) {
  console.log(podcastData)

  return (
    <section className='news-section gradient-bg py-8 lg:py-16' id='news'>
      <div className='container mx-auto px-4'>
        <h2 className='mb-8 text-3xl font-bold text-blue-100 lg:mb-[40px] lg:text-5xl'>Latest Podcast Episodes</h2>

        <motion.div
          className='grid gap-8 lg:grid-cols-1'
          initial='offscreen'
          whileInView='onscreen'
          variants={container}
          viewport={{ amount: 0.2, once: true }}
        >
          {podcastData?.map((podcast) => (
            <motion.article
              key={podcast.title}
              variants={podcastVariants}
              className='podcast-card relative grid-flow-col rounded-3xl border-8 bg-white px-6 py-4 hover:border-red md:grid'
            >
              <div className='img-container mb-4 md:mb-0 md:mr-4'>
                <Image
                  loading='lazy'
                  src={podcast.image}
                  width={160}
                  height={160}
                  className='w-full md:w-[160px]'
                  alt={podcast.title}
                />
              </div>
              <div>
                <h2 className='max-h-13 mb-4 text-xl font-bold text-black'>{podcast.title}</h2>
                <h3 className='mb-4 text-black'>{podcast.description}</h3>
                {podcast.description2 && <p className='text-black'>{podcast.description2}</p>}
              </div>
              <div className='podcast-links'>
                <PodcastLinks />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
