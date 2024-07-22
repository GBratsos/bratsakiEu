'use client'

import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { motion } from 'framer-motion'

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

export default function LatestNews({ data }) {
  return (
    <section className='news-section gradient-bg py-8 lg:py-16'>
      <div className='container mx-auto px-4'>
        <h2 className='mb-8 text-3xl font-bold text-blue-100 lg:mb-[40px] lg:text-5xl'>Latest News</h2>

        <motion.div
          className='grid gap-8 lg:grid-cols-3'
          initial='offscreen'
          whileInView='onscreen'
          variants={container}
          viewport={{ amount: 0.2, once: true }}
        >
          {data.map((post) => (
            <motion.article
              key={post.view_node}
              variants={articleVariants}
              className='blogpost-card relative rounded-3xl border-8 bg-white hover:border-red'
            >
              <div className='img-container'>
                <picture>
                  <source
                    srcSet={`https://rallydiaries.eu${post.field_media_image_1}`}
                    media='(max-width: 500px)'
                    type='image/webp'
                  />
                  <source
                    srcSet={`https://rallydiaries.eu${post.field_media_image}`}
                    media='(max-width: 850px)'
                    type='image/webp'
                  />
                  <source
                    srcSet={`https://rallydiaries.eu${post.field_media_image}`}
                    media='(min-width: 851px)'
                    type='image/webp'
                  />
                  <img
                    loading='lazy'
                    width='720'
                    height='372'
                    src={`https://rallydiaries.eu${post.field_media_image_1}`}
                    alt={post.title}
                    typeof='foaf:Image'
                    className='rounded-t-2xl'
                  />
                </picture>
              </div>
              <section className='px-6 py-4'>
                <h2 className='max-h-13 mb-4 text-xl font-bold text-black'>
                  <a href={post.view_node} target='_blank' rel='noopener noreferrer' aria-label='{post.title}'>
                    {post.title}
                  </a>
                </h2>
                <p className='text-black'>{post.body}</p>
              </section>
            </motion.article>
          ))}
        </motion.div>
        <div className='text-center'>
          <Link
            href='https://rallydiaries.eu/en/news'
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
