import Link from 'next/link'
import { faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PodcastLinks() {
  return (
    <nav className='socials mx-auto grid w-[130px] grid-cols-2 grid-rows-1 gap-y-8'>
      {[
        [
          faSpotify,
          'https://open.spotify.com/show/23Y69tbd94gl4kowOhdNoq?si=019ca8c912744513',
          'Spotify',
          'text-green',
        ],
        [faYoutube, 'https://www.youtube.com/rallydiaries/podcasts', 'YouTube', 'text-red'],
      ].map(([fa, url, title, color]) => (
        <Link
          href={url}
          key={title}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={title}
          className={`text-black hover:${color}`}
        >
          <FontAwesomeIcon icon={fa} size='3x' />
        </Link>
      ))}
    </nav>
  )
}
