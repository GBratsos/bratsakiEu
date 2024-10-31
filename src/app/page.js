import Gallery from './components/gallery'
import HomeContent from './components/homeContent'
import LatestNews from './components/latestNews'
import Podcast from './components/podcast'
import Simracing from './components/simracing'

async function getData() {
  const res = await fetch('https://rallydiaries.eu/en/rest/articles/bratsaki', { next: { revalidate: 60 } })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data = await getData()
  return (
    <>
      <HomeContent />
      <Simracing />
      <Podcast />
      <Gallery />
      <LatestNews data={data} />
    </>
  )
}
