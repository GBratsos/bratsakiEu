import {
  faDiscord,
  faFacebookSquare,
  faInstagram,
  faTiktok,
  faTwitch,
  faYoutube,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function SocialMedia() {
  return (
    <div className='max-w[275px] mt-10 w-full md:max-w-[205px] lg:mt-0'>
      <nav className='socials mx-auto grid grid-cols-4 grid-rows-2 gap-y-8'>
        {[
          [faInstagram, 'https://instagram.com/bratsaki', 'Instagram'],
          [faTiktok, 'https://tiktok.com/@geobratsos', 'TikTok'],
          [faYoutube, 'https://www.youtube.com/rallydiaries?sub_confirmation=1', 'YouTube'],
          [faTwitch, 'https://twitch.tv/bratsaki', 'Twitch'],
          [faLinkedin, 'https://www.linkedin.com/in/george-bratsos/', 'LinkedIn'],
          [faDiscord, 'https://rallydiaries.eu/discord', 'Discord'],
          [faFacebookSquare, 'https://fb.com/geobratsos', 'Facebook'],
        ].map(([fa, url, title]) => (
          <Link
            href={url}
            key={url}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={title}
            className='flex items-center justify-center text-white hover:text-blue-100'
          >
            <FontAwesomeIcon icon={fa} size='xl' />
          </Link>
        ))}
      </nav>
    </div>
  )
}
