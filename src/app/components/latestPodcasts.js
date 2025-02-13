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
              className='podcast-card hover:border-red relative grid-flow-col rounded-3xl border-8 bg-white px-6 py-4 md:grid'
            >
              <div className='img-container mb-4 md:mr-4 md:mb-0'>
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
                <h2 className='mb-4 text-xl font-bold text-black'>{podcast.title}</h2>
                <h3 className='mb-4 text-black'>{podcast.description}</h3>
                {podcast.description2 && <p className='text-black'>{podcast.description2}</p>}
              </div>
              <div className='md:border-red mt-4 md:mt-0 md:ml-4 md:border-l-4 md:pl-4'>
                <h4 className='mb-4 text-xl font-bold text-black'>Listen Now</h4>
                <PodcastLinks color='black' hoverColor='blue-500' />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
