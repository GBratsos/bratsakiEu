const podcastData = [
  {
    title: 'Pedal to the metal without tomorrow | George Bratsos',
    image: '/pedal-to-the-metal-without-tomorrow.webp',
    description:
      'Welcome to "Pedal to the metal without tomorrow" podcast. George Bratsos a.k.a. Bratsaki shares his experiences from the world of simracing and motorsport, as well as his passion for cars.',
    date: "05/12/2024",
    spotifyUrl: 'https://open.spotify.com/episode/68tZeB4yMpT5K9R08Ahkv7?si=4XYISuL5RwuLE2gVJRDpdQ'
  },
  {
    title: 'Serres Endurance TrackDay 2024 | George Bratsos',
    image: '/serres-endurance-track-day.webp',
    description:
      "The Endurance TrackDay in Serres is an experience that tests endurance, driving, and strategy, and in this episode, I take you along on the journey of my first participation in an endurance race. We'll talk about the challenges I faced, what went well (and what didn't), and why this experience was so special—come discover the magic of endurance racing with me!",
    date: "13/01/2025",
    spotifyUrl: 'https://open.spotify.com/episode/4Xv8oENrdn13Tw18OFgmnl?si=lTsN5ojbTVSOLt7p5rB0Hg'
  },
  {
    title: 'Rally Legend: An unforgettable Experience | George Bratsos',
    image: '/rally-legend.webp',
    description:
      'Rally Legend 2022 was an experience like no other, and in this episode, I share the unique moments I experienced, the spectacular performances from historic rally cars, and the magic of being among motorsport legends.',
    date: "27/01/2025",
    spotifyUrl: 'https://open.spotify.com/episode/5IbZLPVpUSlEUPizVuEil9?si=xKv1d5CTRNqQgbxQBrOm1Q'
  },
  {
    title: 'Speedcar Experience - EKO Racing DiRT Games | George Bratsos',
    image: '/speedcar-experience.webp',
    description:
      'The year 2021 was when I experienced the true intensity of Speedcar and the adrenaline of DiRT Games, and in this episode, I share my experiences of participating in crosscar racing, the feeling of driving on dirt in a Speedcar, and how that racing experience compares to simracing.',
    date: "10/02/2025",
    spotifyUrl: 'https://open.spotify.com/episode/4gJrtu2ZbufLOFsEXxNeRY?si=isZYof3cRDqQQD40TSP1yw'
  },
  {
    title: 'FIA Motorsport Games | George Bratsos',
    image: '/fia-motorsport-games.webp',
    description:
      "In this episode, we travel to the exciting world of the FIA Motorsport Games, known as the 'Olympic Games' of motorsport. We look at the Greek team's progress at the 2022 Marseille and 2024 Valencia events, analysing entries, results and unforgettable moments.",
    date: "24/02/2025",
    spotifyUrl: 'https://open.spotify.com/episode/6FDSyYlBjR0f4zS79Eva8H?si=JWeIfFW6TgOKRZ5H3_kqVg'
  },
  {
    title: 'Motorsport Experience till 2023 | George Bratsos',
    image: '/bratsaki-season-2023.webp',
    description:
      'How did I get into racing? How did I grow through the sport, and where am I aiming to go next? This is the story of my motorsport journey—from my first steps behind the wheel to the challenges, victories, and lessons that have shaped me along the way.',
    date: "19/03/2025",
    spotifyUrl: 'https://open.spotify.com/episode/3eoRJnxkiudoWJD0IHOhMN?si=cXXoounXQP-FoJtRYbsLfQ'
  },
  {
    title: 'What is simracing | George Bratsos',
    image: '/bratsaki-intro-to-simracing.webp',
    description:
      "How did I get into racing? How did I grow through the sport, and where am I aiming to go next? This is the story of my motorsport journey—from my first steps behind the wheel to the challenges, victories, and lessons that have shaped me along the way. Join me as I reflect on my evolution in racing, the key moments that defined my path, and my ambitions for the future. Whether you're a fellow racer or just someone who loves the thrill of motorsports, this is a journey worth sharing!",
    date: "28/03/2025",
    spotifyUrl: 'https://open.spotify.com/episode/1KQxUwa95Zk7Qan2uxX1RI?si=q9puXOqBSXKNTaiSKmHysA'
  },
  {
    title: 'George, Kostas, and il Mostro Take on the 4th Historic Rally of Tripoli!',
    image: '/bratsaki-regularity-tripolis.webp',
    description:
      "Our journey into the world of regularity rallying has officially begun! With excitement, anticipation, and a few surprises along the way, we took part in the 4th Historic Rally of Tripoli, our first-ever regularity rally. But was it a flawless debut, or did we face unexpected challenges? Get ready for a ride full of twists, turns, and a bit of mystery—because in regularity rallying, it's not always about speed, but about mastering the art of consistency!",
    date: "07/04/2025",
    spotifyUrl: 'https://open.spotify.com/episode/4TJ8933izFfPRS9mCBUN1o?si=LQsMtKacRRCSmHMf1S035g'
  },
  {
    title: 'DiRT Hellenic community: The best simrally community!',
    image: '/bratsaki-dirtHellenic-community.webp',
    description:
      "Discover the most active Greek community around DiRT Rally / EA Sports WRC and simrally! In this episode of Pedal to the Metal Without Tomorrow, we talk about the creation and development of the DiRT Hellenic Community, the online championships, the actions, and how our common love for simrally united people from all over Greece. If you're interested in rally gaming, simracing in Greece, or want to participate in online championships, this episode is for you!",
    date: "12/05/2025",
    spotifyUrl: 'https://open.spotify.com/episode/5Z2pftBWOifrTMZF44WA3Z?si=opQP9NCAReuYYxg-cRETAA'
  },
  {
    title: 'Richard Burns Rally: The Game That Defies Time',
    image: '/bratsaki-richard-burns-rally.webp',
    description:
      'Discover why Richard Burns Rally remains the ultimate simrally title in the world of simracing, even 20 years after its release. Released in 2004, Richard Burns Rally is a legendary simrally game, widely considered by many as the greatest rally simulator of all time. Unlike arcade racing games, RBR offers a truly realistic simracing experience, focusing on driving physics, detailed stages, and difficulty that closely mirrors real-world rallying.',
    date: "02/06/2025",
    spotifyUrl: 'https://open.spotify.com/episode/5fjdGohrpXDzeJ7nIGwZNA?si=vj1u1MYrQmWVDN_zdrgrcA'
  },
  {
    title: 'il Mostro is back on the road!',
    image: '/1st-historic-rally-pigasos.webp',
    description:
      "The 1st Historic Rally Pegasus debuted as a new regularity event for historic vehicles, and of course, we couldn't miss it. With the black Fiat Cinquecento S—also known as il Mostro—and my co-driver Kostas, we got into racing mode for the next challenge.",
    date: "16/06/2025",
    spotifyUrl: 'https://open.spotify.com/episode/2JY0bvYpaoaVMzZICe5ope?si=s-ZZkHzrT7CowrDrigQ8TQ'
  },
  {
    title: 'Alfie the Greek Mini vs il Mostro',
    image: '/alfie-the-greek-mini-vs-il-mostro.webp',
    description:
      "It's time to hear Alfie's stories from the 1st Historic Rally Pegasus and the 1st Historic Rally of Tripoli. Alfie is a friend and competitor of il Mostro. The two friends and their crews made their first appearance together on the special stages of the historic rallies. So let's find out more details about Alfie and his crew.",
    date: "30/06/2025",
    spotifyUrl: 'https://open.spotify.com/episode/5YyaLgwrGDkMpbeiJjm7dJ?si=P240YNW4QouWWDCN9ZE6_A'
  },
  {
    title: 'What Is a Track Day and Why Should You Try It at Least Once?',
    image: '/bratsaki-track-day.webp',
    description:
      "Learn what a track day is, how to participate, what you need, and where track days take place in Greece. Have you heard the term 'track day' but don't know exactly what it is or how to participate? You're in the right place! In this guide, you'll discover what a track day is, how it works, who takes part, and why it's worth experiencing—especially if you love driving or motorsport.",
    date: "14/07/2025",
    spotifyUrl: 'https://open.spotify.com/episode/1E6sy2ECM5pLFuGRDFg0c9?si=FBirTJG7T_aIwI7HNv3VnA'
  },
  {
    title: 'The Best Simracing Games for Beginners',
    image: '/bratsaki-simracing-games-beginners.webp',
    description:
      "Do you want to get into simracing but don't know which game to start with? In this episode of Pedal to the metal without tomorrow I recommend the best simracing games for beginners, based on my experience. If you are new to simracing in Greece and want to know which game is best for you, this episode is the ideal guide to get you started.",
    date: "15/09/2025",
    spotifyUrl: 'https://open.spotify.com/episode/1wYBqO4EZLyFd7dofeNqpJ?si=p2fDvSwmQsedrZTG-TyaTQ'
  },
  {
    title: "Simracing Setup - Beginner's Guide",
    image: '/bratsaki-diy-simracing.webp',
    description:
      "Do you want to get into simracing but don't know where to start? In this episode of Pelad to the metal without tomorrow I show you how to build your first DIY simracing setup without spending a fortune.",
    date: "29/09/2025",
    spotifyUrl: 'https://open.spotify.com/episode/6oiNzBpqYMlwEi1RuS0pHw?si=LAnhAHRQRKOxFc2aHbghYQ'
  },
  {
    title: 'Simracing vs Real Racing - Can you become a racing driver from gaming?',
    image: '/bratsaki-simracing-real-racing.webp',
    description:
      'Can you become a racing driver starting from simracing? In this episode of Pedal to the Metal without tomorrow we look at the similarities and differences between simracing and real racing, and how some drivers made the leap from gaming to the real track.',
    date: "13/10/2025",
    spotifyUrl: 'https://open.spotify.com/episode/6EyH3ASea3fLJBKWmZjMnH?si=9SgZKqcKRMCukTSkxp9tjA'
  },
  {
    title: 'Central European Rally 2025',
    image: '/bratsaki-cer-wrc.webp',
    description:
      'We visited the WRC Central European Rally for the first time! The experience of seeing the WRC cars on the asphalt is unique! We talked about how we organized a long weekend to experience an asphalt WRC up close, what it&apos;s worth, what it costs, and what I would do again.',
    date: "27/10/2025",
    spotifyUrl: 'https://open.spotify.com/episode/2rQ2xEnlXmS4fXoJso1Cut?si=lWmQRUCUSnK8vW8S9PXTKA'
  },
  {
    title: 'Racing Psychology: The mind before the race',
    image: '/bratsaki-racing-psychology.webp',
    description:
      'In this episode of Pedal to the Metal without tomorrow, we explore the psychological aspects of racing. How do professional drivers prepare mentally for a race? What techniques do they use to stay focused and calm under pressure? Join us as we delve into the mind of a racer and discover the importance of mental strength in motorsport.',
    date: "10/11/2025",
    spotifyUrl: 'https://open.spotify.com/episode/5eAI9ATqEXzYq07nXB4BkN?si=0ZMuT_goSVOKaTcPeccXbw'
  },
  {
    title: 'Self-Improvement: How simracing improves your mind and life',
    image: '/bratsaki-simracing-self-improvement.webp',
    description:
      'Simracing is not just a hobby, it is a development tool. Learn how driving simulation improves concentration, reduces stress and cultivates discipline, patience and composure on and off the track.',
    date: "01/12/2025",
    spotifyUrl: 'https://open.spotify.com/episode/6MiESHDOA5WFaDaPoo0zj0?si=-E4lYd-WTjy8jtRKSezSfw'
  },
  {
    title: "From WRC to SimRally: What's not working today",
    image: '/bratsaki-simrally-wrc.webp',
    description: "From WRC to simrally, we break down what's missing from today's rally experience. Why do circuit sims focus more on driver development? And can the 2027 WRC changes bring rally back to its roots?",
    date: "22/12/2025",
    spotifyUrl: 'https://open.spotify.com/episode/1hI1wWny80FLp1nSvi5QiC?si=THNH1lozTeWGGyanS1ypEQ'
  },
  {
    title: "Rallye Monte-Carlo: Road trip, ice, and an experience of a lifetime",
    image: '/bratsaki-monte-carlo.webp',
    description: "From the Milan-Gap roadtrip and the first glimpses of snow, to the night stages, the ice at Luceram and the legendary Col de Turini, we experienced firsthand what makes Monte-Carlo unique: the ever-changing conditions and adrenaline at its absolute limit.",
    date: "16/02/2026",
    spotifyUrl: 'https://open.spotify.com/episode/2rqt0hyzkVmbEPCSQAtLit?si=syU5C8THThqSdFbQ-e3k2g'
  }
]

export default podcastData
