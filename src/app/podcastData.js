const podcastData = [
  {
    title: 'Pedal to the metal without tomorrow | George Bratsos',
    image: '/pedal-to-the-metal-without-tomorrow.webp',
    description:
      'Welcome to "Pedal to the metal without tomorrow" podcast. George Bratsos a.k.a. Bratsaki shares his experiences from the world of simracing and motorsport, as well as his passion for cars.',
  },
  {
    title: 'Serres Endurance TrackDay 2024 | George Bratsos',
    image: '/serres-endurance-track-day.webp',
    description:
      "The Endurance TrackDay in Serres is an experience that tests endurance, driving, and strategy, and in this episode, I take you along on the journey of my first participation in an endurance race. We'll talk about the challenges I faced, what went well (and what didn't), and why this experience was so special—come discover the magic of endurance racing with me!",
  },
  {
    title: 'Rally Legend: An unforgettable Experience | George Bratsos',
    image: '/rally-legend.webp',
    description:
      'Rally Legend 2022 was an experience like no other, and in this episode, I share the unique moments I experienced, the spectacular performances from historic rally cars, and the magic of being among motorsport legends.',
  },
  {
    title: 'Speedcar Experience - EKO Racing DiRT Games | George Bratsos',
    image: '/speedcar-experience.webp',
    description:
      'The year 2021 was when I experienced the true intensity of Speedcar and the adrenaline of DiRT Games, and in this episode, I share my experiences of participating in crosscar racing, the feeling of driving on dirt in a Speedcar, and how that racing experience compares to simracing.',
  },
  {
    title: 'FIA Motorsport Games | George Bratsos',
    image: '/fia-motorsport-games.webp',
    description:
      "In this episode, we travel to the exciting world of the FIA Motorsport Games, known as the 'Olympic Games' of motorsport. We look at the Greek team's progress at the 2022 Marseille and 2024 Valencia events, analysing entries, results and unforgettable moments.",
  },
  {
    title: 'Motorsport Experience till 2023 | George Bratsos',
    image: '/bratsaki-season-2023.webp',
    description:
      'How did I get into racing? How did I grow through the sport, and where am I aiming to go next? This is the story of my motorsport journey—from my first steps behind the wheel to the challenges, victories, and lessons that have shaped me along the way.',
  },
  {
    title: 'What is simracing | George Bratsos',
    image: '/bratsaki-intro-to-simracing.webp',
    description:
      "How did I get into racing? How did I grow through the sport, and where am I aiming to go next? This is the story of my motorsport journey—from my first steps behind the wheel to the challenges, victories, and lessons that have shaped me along the way. Join me as I reflect on my evolution in racing, the key moments that defined my path, and my ambitions for the future. Whether you're a fellow racer or just someone who loves the thrill of motorsports, this is a journey worth sharing!",
  },
  {
    title: 'George, Kostas, and il Mostro Take on the 4th Historic Rally of Tripoli!',
    image: '/bratsaki-regularity-tripolis.webp',
    description:
      "Our journey into the world of regularity rallying has officially begun! With excitement, anticipation, and a few surprises along the way, we took part in the 4th Historic Rally of Tripoli, our first-ever regularity rally. But was it a flawless debut, or did we face unexpected challenges? Get ready for a ride full of twists, turns, and a bit of mystery—because in regularity rallying, it's not always about speed, but about mastering the art of consistency!",
  },
  {
    title: 'DiRT Hellenic community: The best simrally community!',
    image: '/bratsaki-dirtHellenic-community.webp',
    description:
      "Discover the most active Greek community around DiRT Rally / EA Sports WRC and simrally! In this episode of Pedal to the Metal Without Tomorrow, we talk about the creation and development of the DiRT Hellenic Community, the online championships, the actions, and how our common love for simrally united people from all over Greece. If you're interested in rally gaming, simracing in Greece, or want to participate in online championships, this episode is for you!",
  },
  {
    title: 'Richard Burns Rally: The Game That Defies Time',
    image: '/bratsaki-richard-burns-rally.webp',
    description:
      'Discover why Richard Burns Rally remains the ultimate simrally title in the world of simracing, even 20 years after its release. Released in 2004, Richard Burns Rally is a legendary simrally game, widely considered by many as the greatest rally simulator of all time. Unlike arcade racing games, RBR offers a truly realistic simracing experience, focusing on driving physics, detailed stages, and difficulty that closely mirrors real-world rallying.',
  },
  {
    title: 'il Mostro is back on the road!',
    image: '/1st-historic-rally-pigasos.webp',
    description:
      "The 1st Historic Rally Pegasus debuted as a new regularity event for historic vehicles, and of course, we couldn't miss it. With the black Fiat Cinquecento S—also known as il Mostro—and my co-driver Kostas, we got into racing mode for the next challenge.",
  },
  {
    title: 'Alfie the Greek Mini vs il Mostro',
    image: '/alfie-the-greek-mini-vs-il-mostro.webp',
    description:
      "It's time to hear Alfie's stories from the 1st Historic Rally Pegasus and the 1st Historic Rally of Tripoli. Alfie is a friend and competitor of il Mostro. The two friends and their crews made their first appearance together on the special stages of the historic rallies. So let's find out more details about Alfie and his crew.",
  },
  {
    title: 'What Is a Track Day and Why Should You Try It at Least Once?',
    image: '/bratsaki-track-day.webp',
    description:
      "Learn what a track day is, how to participate, what you need, and where track days take place in Greece. Have you heard the term 'track day' but don't know exactly what it is or how to participate? You're in the right place! In this guide, you'll discover what a track day is, how it works, who takes part, and why it's worth experiencing—especially if you love driving or motorsport.",
  },
  {
    title: 'The Best Simracing Games for Beginners',
    image: '/bratsaki-simracing-games-beginners.webp',
    description:
      "Do you want to get into simracing but don't know which game to start with? In this episode of Pedal to the metal without tomorrow I recommend the best simracing games for beginners, based on my experience. If you are new to simracing in Greece and want to know which game is best for you, this episode is the ideal guide to get you started.",
  },
  {
    title: "Simracing Setup - Beginner's Guide",
    image: '/bratsaki-diy-simracing.webp',
    description:
      "Do you want to get into simracing but don't know where to start? In this episode of Pelad to the metal without tomorrow I show you how to build your first DIY simracing setup without spending a fortune.",
  },
  {
    title: 'Simracing vs Real Racing - Can you become a racing driver from gaming?',
    image: '/bratsaki-simracing-real-racing.webp',
    description:
      'Can you become a racing driver starting from simracing? In this episode of Pedal to the Metal without tomorrow we look at the similarities and differences between simracing and real racing, and how some drivers made the leap from gaming to the real track.',
  },
  {
    title: 'Simracing vs Real Racing - Can you become a racing driver from gaming?',
    image: '/bratsaki-cer-wrc.webp',
    description:
      'In this episode of Pedal to the Metal without tomorrow, we share our first trip to the Central European Rally, one of the newest and most exciting rounds of the WRC. From the roar of the WRC cars on asphalt to the atmosphere around the stages, this is a rally fan’s dream come true.',
  },
]

export default podcastData
