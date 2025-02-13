'use client'

import { faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

const opacityVariant = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
  },
}

export default function PodcastLinks({ color, hoverColor }) {
  return (
    <nav className='socials mx-auto flex w-[130px] flex-wrap items-center justify-between'>
      {[
        [faSpotify, 'https://open.spotify.com/show/23Y69tbd94gl4kowOhdNoq?si=019ca8c912744513', 'Spotify'],
        [faYoutube, 'https://www.youtube.com/rallydiaries/podcasts', 'YouTube'],
      ].map(([fa, url, title]) => (
        <motion.a
          href={url}
          key={title}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={title}
          className={`text-${color} hover:text-${hoverColor}`}
          variants={opacityVariant}
        >
          <FontAwesomeIcon icon={fa} size='3x' />
        </motion.a>
      ))}
    </nav>
  )
}
