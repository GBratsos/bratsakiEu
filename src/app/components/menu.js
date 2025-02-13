'use client'

import { faBars, faClose, faNewspaper, faPodcast, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useState } from 'react'
import SocialMedia from './socialMedia'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
      delayChildren: 0.2,
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

export default function Menu() {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <section className='menu-section relative z-20 flex items-center pt-[30px] lg:pt-[40px] 2xl:static'>
      <FontAwesomeIcon icon={faBars} size='2x' className='mr-8 cursor-pointer' onClick={() => setIsOpened(!isOpened)} />
      <Link href='/' aria-label='home'>
        <svg xmlns='http://www.w3.org/2000/svg' width='136' height='61' viewBox='0 0 136 61' fill='none'>
          <path
            d='M82.252 39.4241C82.252 26.4171 92.3386 18.4803 108.132 18.4803C123.924 18.4803 134.011 26.4081 134.011 39.4241C134.011 52.44 123.924 60.4305 108.132 60.4305C92.3386 60.4305 82.252 52.5027 82.252 39.4241ZM118.496 39.4241C118.496 33.7178 114.187 30.6632 108.132 30.6632C102.076 30.6632 97.7582 33.7268 97.7582 39.4241C97.7582 45.1213 102.148 48.2567 108.132 48.2567C114.115 48.2567 118.496 45.1303 118.496 39.4241Z'
            fill='#FE2243'
          />
          <path d='M59.9919 46.4471L67.4002 32.4637H51.4818L44.0557 46.4471H59.9919Z' fill='#FE2243' />
          <path d='M36.6472 60.4305L44.0554 46.4471H28.1371L20.7109 60.4305H36.6472Z' fill='#FE2243' />
          <path d='M84.3933 60.4305L99.2187 32.4637H83.3004L68.457 60.4305H84.3933Z' fill='#FE2243' />
          <path d='M99.1737 32.4637L113.99 4.49693H98.1077L83.2554 32.4637H99.1737Z' fill='#FE2243' />
          <path d='M83.3267 32.4637L90.7349 18.4803H74.8256L67.3994 32.4637H83.3267Z' fill='#FE2243' />
          <path d='M51.5082 32.4637L58.9164 18.4803H43.016L35.5898 32.4637H51.5082Z' fill='#FE2243' />
          <path d='M19.6898 32.4637L27.0981 18.4803H11.1976L3.77148 32.4637H19.6898Z' fill='#FE2243' />
          <path d='M43.0072 18.4803L50.4154 4.49693H34.515L27.0889 18.4803H43.0072Z' fill='#FE2243' />
          <path
            d='M81.9478 36.459C81.9478 22.8787 92.4823 14.5925 108.974 14.5925C125.466 14.5925 136 22.8697 136 36.459C136 50.0482 125.466 58.397 108.974 58.397C92.4823 58.397 81.9478 50.1199 81.9478 36.459ZM119.786 36.459C119.786 30.5019 115.28 27.3039 108.965 27.3039C102.65 27.3039 98.1348 30.5019 98.1348 36.459C98.1348 42.416 102.712 45.6857 108.965 45.6857C115.218 45.6857 119.786 42.416 119.786 36.459Z'
            fill='#02FCFF'
          />
          <path d='M58.7103 43.7956L66.4411 29.1941H49.8151L42.0664 43.7956H58.7103Z' fill='#02FCFF' />
          <path d='M34.3269 58.3971L42.0666 43.8045H25.4406L17.6919 58.3971H34.3269Z' fill='#02FCFF' />
          <path d='M84.1779 58.397L99.6573 29.1941H83.0403L67.543 58.397H84.1779Z' fill='#02FCFF' />
          <path d='M99.6127 29.1941L115.083 0H98.5019L82.9956 29.1941H99.6127Z' fill='#02FCFF' />
          <path d='M83.0674 29.1941L90.7981 14.6015H74.1901L66.4414 29.1941H83.0674Z' fill='#02FCFF' />
          <path d='M49.8421 29.1941L57.5818 14.6015H40.9737L33.2251 29.1941H49.8421Z' fill='#02FCFF' />
          <path d='M16.626 29.1941L24.3567 14.6015H7.75761L0 29.1941H16.626Z' fill='#02FCFF' />
          <path d='M40.9741 14.6015L48.7049 0H32.1058L24.3481 14.6015H40.9741Z' fill='#02FCFF' />
          <path
            d='M81.4819 37.1308C81.4819 24.1238 91.5686 16.1871 107.362 16.1871C123.154 16.1871 133.241 24.1149 133.241 37.1308C133.241 50.1468 123.154 58.1373 107.362 58.1373C91.5686 58.1373 81.4819 50.2095 81.4819 37.1308ZM117.735 37.1308C117.735 31.4246 113.426 28.3699 107.37 28.3699C101.315 28.3699 96.9971 31.4336 96.9971 37.1308C96.9971 42.8281 101.387 45.9634 107.37 45.9634C113.354 45.9634 117.735 42.8371 117.735 37.1308Z'
            fill='#E9E9E9'
          />
          <path d='M59.2302 44.1539L66.6384 30.1705H50.7201L43.2939 44.1539H59.2302Z' fill='#E9E9E9' />
          <path d='M35.8855 58.1373L43.2937 44.1539H27.3754L19.9492 58.1373H35.8855Z' fill='#E9E9E9' />
          <path d='M83.6315 58.1373L98.457 30.1705H82.5387L67.6953 58.1373H83.6315Z' fill='#E9E9E9' />
          <path d='M98.412 30.1705L113.228 2.20369H97.337L82.4937 30.1705H98.412Z' fill='#E9E9E9' />
          <path d='M82.5565 30.1705L89.9648 16.1871H74.0644L66.6382 30.1705H82.5565Z' fill='#E9E9E9' />
          <path d='M50.7471 30.1705L58.1553 16.1871H42.246L34.8198 30.1705H50.7471Z' fill='#E9E9E9' />
          <path d='M18.9281 30.1705L26.3363 16.1871H10.427L3.00977 30.1705H18.9281Z' fill='#E9E9E9' />
          <path d='M42.2455 16.1871L49.6537 2.20369H33.7533L26.3271 16.1871H42.2455Z' fill='#E9E9E9' />
        </svg>
      </Link>

      <div
        className={`gradient-bg bg-opacity-75 fixed top-0 left-0 z-50 h-full w-0 overflow-hidden backdrop-blur-lg transition-all duration-300 ${isOpened ? 'w-[300px] lg:w-[360px]' : 'w-[0]'}`}
      >
        <div className='flex h-full w-full flex-col items-end justify-between px-6 py-8'>
          <div className='flex w-full flex-col items-end'>
            <FontAwesomeIcon
              icon={faClose}
              onClick={() => setIsOpened(false)}
              className='z-30 cursor-pointer'
              size='2x'
              id='closeButton'
            />

            <motion.div
              variants={container}
              animate={isOpened ? 'show' : 'hidden'}
              className='mt-6 flex w-full flex-col gap-y-1'
            >
              <motion.div variants={opacityVariant} className='px-4 py-3 text-white hover:text-blue-100'>
                <Link href='/biography' className='text-lg font-bold'>
                  <FontAwesomeIcon icon={faUser} className='mr-4' size='lg' />
                  BIOGRAPHY
                </Link>
              </motion.div>
              <motion.div variants={opacityVariant} className='px-4 py-3 text-white hover:text-blue-100'>
                <Link href='/podcast' className='text-lg font-bold'>
                  <FontAwesomeIcon icon={faPodcast} className='mr-4' size='lg' />
                  PODCAST
                </Link>
              </motion.div>
              <motion.div variants={opacityVariant} className='px-4 py-3 text-white hover:text-blue-100'>
                <Link href='/#news' onClick={() => setIsOpened(false)} className='text-lg font-bold'>
                  <FontAwesomeIcon icon={faNewspaper} className='mr-4' size='lg' />
                  NEWS
                </Link>
              </motion.div>
            </motion.div>
          </div>
          <div className='mt-6 flex h-auto w-full flex-col items-center gap-y-1'>
            <SocialMedia />
          </div>
        </div>
      </div>
    </section>
  )
}
