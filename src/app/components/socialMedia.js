import {
  faDiscord,
  faFacebookSquare,
  faInstagram,
  faTiktok,
  faTwitch,
  faViber,
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
          [faTwitch, 'https://twitch.tv/bratsaki', 'Twitch'],
          [faTiktok, 'https://tiktok.com/@geobratsos', 'TikTok'],
          [faYoutube, 'https://www.youtube.com/rallydiaries?sub_confirmation=1', 'YouTube'],
          [faFacebookSquare, 'https://fb.com/geobratsos', 'Facebook'],
          [faLinkedin, 'https://www.linkedin.com/in/george-bratsos/', 'LinkedIn'],
          [faDiscord, 'https://rallydiaries.eu/discord', 'Discord'],
          [faViber, 'https://rallydiaries.eu/viber', 'Viber'],
        ].map(([fa, url, title]) => (
          <Link
            href={url}
            key={url}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={title}
            className='flex items-center justify-center text-white hover:text-blue-100'
          >
            <FontAwesomeIcon icon={fa} className='h-[23px] text-[23px]' />
          </Link>
        ))}
      </nav>
    </div>
  )
}
