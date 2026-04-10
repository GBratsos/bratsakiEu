import { motion } from 'framer-motion'
import Image from 'next/image'
import PodcastLinks from './podcastLinks'

const container = {
  offscreen: {},
  onscreen: {
    transition: {
      ease: 'easeInOut',
      duration: 0.3,
      delayChildren: 0.15,
      staggerChildren: 0.15,
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

// Helper function to format date
function formatDate(dateStr) {
  // dateStr format: "05/12/2024" (DD/MM/YYYY)
  const [day, month, year] = dateStr.split('/')
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export default function Podcasts({ podcastData }) {
  return (
    <section className='news-section gradient-bg py-8 lg:py-16' id='news'>
      <div className='container mx-auto px-4'>
        <h2 className='mb-8 text-3xl font-bold text-blue-100 lg:mb-[40px] lg:text-5xl'>Latest Podcast Episodes</h2>

        <motion.div
          className='flex flex-col gap-8'
          initial='offscreen'
          whileInView='onscreen'
          variants={container}
          viewport={{ amount: 0, once: true }}
        >
          {podcastData?.map((podcast) => (
            <motion.article
              key={podcast.title}
              variants={podcastVariants}
              className='podcast-card hover:border-red rounded-3xl border-8 bg-white p-4 md:px-6 md:py-4 lg:flex lg:items-center lg:gap-6'
            >
              <div className='img-container mb-4 flex shrink-0 items-center justify-center'>
                <Image
                  loading='lazy'
                  src={podcast.image}
                  width={200}
                  height={200}
                  className='w-[200px]'
                  alt={podcast.title}
                />
              </div>
              <div>
                <h2 className='mb-4 text-xl font-bold text-black'>{podcast.title}</h2>
                <p className='mb-4 text-black'>{podcast.description}</p>
              </div>
              <div className='border-red mt-4 border-t-4 lg:mt-0 lg:border-t-0 lg:border-l-4 lg:pl-4'>
                <h4 className='my-4 text-xl font-bold text-black'>Listen Now</h4>
                <PodcastLinks spotifyUrl={podcast.spotifyUrl} />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
