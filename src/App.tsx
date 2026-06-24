import { useEffect, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Clapperboard,
  Headphones,
  Menu,
  Mic2,
  Play,
  Radio,
  Users,
  X,
} from 'lucide-react'

import { Button } from './components/ui/button'
import { cn } from './lib/utils'

const navItems = [
  { label: 'UPCOMING', href: '#upcoming' },
  { label: 'TV & FILM', href: '#portfolio' },
  { label: 'AUDIO', href: '#audio' },
  { label: 'TEAM', href: '#team' },
  { label: 'PRESS', href: '#press' },
]

const heroSlides = [
  'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/a084e421-c33b-4eb8-9835-71d7885e052a/hero-7-v3-bw.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/08c99435-27bf-4f86-a034-f3b72750e495/hero-8-v3-bw.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/1e21011d-8d21-4940-852b-805acf6c2ae3/hero-9-v3-bw.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/bbcc3129-4895-4a7b-9abb-83909b49f4ab/hero-12-v3-bw.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/87d5bde9-0d27-4297-a594-36f78f0c6401/hero-13-v3-bw.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/4be47c4e-c785-42e1-bef4-abb372934641/hero-11-v3-bw.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/8d595d89-f8a6-4235-8f14-c5a68954e60e/hero-14-v1-bw.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/a0892b8d-eaca-491a-a956-2c62f3614d00/hero-16-v1-bw.jpg?format=1500w',
]

const siteLogo =
  'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/a715595c-d0f1-4ac1-bf07-4ff599c8497c/Logo-Confluential-Films-White-2022.png?format=1500w'

const logoBar =
  'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/86cbf929-d3c7-4186-890d-a8f591259c46/logo-bar%402x-V3.png?format=750w'

const brands = [
  {
    logo: 'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/d6c5fdba-2893-4a39-b157-c5f4347fdbd1/Logo-Confluential-Films-White-2022.png?format=500w',
    copy:
      'Founded by Tommy Oliver, Confluential develops, produces, and finances across film, TV, audio, documentaries, and docuseries. We make projects at the confluence of art, entertainment, business, and cultural specificity.',
  },
  {
    logo: 'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/446a0426-5582-4f45-9b44-1009bf8d938b/BKLV_White%2BBlue_oneline.png?format=500w',
    copy:
      'BLACK LOVE is the premier Black-owned partner for celebrating 360 degrees of Black love across television, FAST, podcasts, social media, and experiential.',
  },
  {
    logo: 'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/c321a038-e4d6-43f4-aa1b-4e8ab78373c5/LOGO+-+New+Fear+Unlocked+-+V4+-+Final+-+20240731_NEW+FEAR+UNLOCKED+-+RED+-+WEB.png?format=300w',
    copy:
      'A genre label dedicated to bold, elevated, culturally specific horror films from creators of color.',
  },
  {
    logo: 'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/2f11b8c9-359d-49e9-ab1b-479c0a160518/Confluential+Productions+-+Grey-White+-+WEB.png?format=300w',
    copy:
      'Confluential Productions provides pre-production, production, post-production, equipment, and sound stage services for motion pictures, television, and digital content.',
  },
]

const upcomingProjects = [
  {
    title: 'goons',
    poster:
      'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/f9d2f196-28a9-44e5-9e20-579954584f9b/Goons-Poster.png?format=500w',
    meta: [
      'Director: Gerard McMurray',
      'Writers: K Johnson, Gerard McMurray',
      'Cast: Chloe Bailey, Michael Rainey Jr.',
    ],
    copy:
      'When a crew breaks into a marijuana greenhouse on a Louisiana farm, a simple heist to grab the green turns into bloody mayhem.',
  },
  {
    title: 'HAMLET',
    poster:
      'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/fd80967a-4430-4af3-88e9-81ad3c716b3c/Hamlet+poster.jpg?format=500w',
    meta: [
      'Director: Aneil Karia',
      'Writers: Michael Leslie',
      'Author: William Shakespeare',
      'Cast: Riz Ahmed, Morfydd Clark, Joe Alwyn',
    ],
    copy:
      'Hamlet returns home after a long absence when his father, a powerful Indian businessman at the heart of London’s nouveau riche, dies suddenly.',
  },
  {
    title: 'Die Like A Man',
    poster:
      'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/db4823e3-59af-4981-897d-fd1ecb5db366/Die-Like-A-Man+copy.jpg',
    meta: [
      'Director: Eric Nazarian',
      'Writer: Eric Nazarian',
      'Cast: Cory Hardrict, Mariel Molino, Frankie Loyal, Miguel Angel Garcia',
    ],
    copy:
      'Set in the heart of a rapidly gentrifying west Los Angeles neighborhood still reeling from decades of guns and gang violence, a working-class single mom desperately tries to wean her son away from a veteran gangster.',
  },
]

const filmProjects = [
  {
    title: 'FANCY DANCE',
    background:
      'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/cc1525c4-59aa-4fed-9dfd-4d8f47ac6eb6/fancy-dance-5.jpeg',
    poster:
      'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/5060a4d1-0f4c-4dca-a8ff-8951ee27c3b6/Fancy-Dance-Poster.jpg',
    platformLogo:
      'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/802b5ef5-d9a5-4b56-8a94-931b7e9edaf6/Apple.png',
    description:
      "Since her sister's disappearance, Jax has cared for her niece, Roki, by scraping by on the Seneca-Cayuga reservation in Oklahoma. Every spare minute goes into finding her missing sister while helping Roki prepare for an upcoming powwow.",
    links: [
      { label: 'TRAILER', href: 'https://www.youtube.com/watch?v=AmPPiLaiN8g' },
      {
        label: 'MOVIE',
        href: 'https://tv.apple.com/us/movie/fancy-dance/umc.cmc.37d0bk971uulosq5inlm3ikb1',
      },
    ],
  },
  {
    title: 'YOUNG. WILD. FREE.',
    background:
      'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/3c87a206-4ce1-4533-8130-a38ba480d782/Young.Wild.Free+-+Wide+2.jpg',
    poster:
      'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/c984eb64-87da-4342-9d8a-1745b327a977/Young.Wild.Free.jpg',
    platformLogo:
      'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/9f0bcce0-b334-4c0b-8dcb-8f3afc9b7c4b/bet-plus-white.png',
    description:
      "A teenager struggling to provide for his younger siblings in Compton finds his life turned upside down when he's held at gunpoint by the girl of his dreams.",
    links: [
      { label: 'TRAILER', href: 'https://www.youtube.com/watch?v=D5xJUhCt32c' },
      { label: 'MOVIE', href: 'https://www.bet.plus/movie/young-wild-free' },
    ],
  },
  {
    title: 'GOING TO MARS',
    background:
      'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/657ce3b0-2f27-4b44-afe3-ad0b58faec9b/Going+to+Mars+Wide.jpg',
    poster:
      'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/123d2ba6-eae3-45d7-8cd7-1c8c88492f6f/Going-to-Mars-Poster.jpg',
    platformLogo:
      'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/228a0f7d-05b5-4170-96a4-a449f48bbbea/HBO-MAX-LOGO%402x.png',
    description:
      'A look at the life of poet Nikki Giovanni and the revolutionary historical periods through which she lived, from the Civil Rights Movement to Black Lives Matter.',
    links: [
      { label: 'TRAILER', href: 'https://www.youtube.com/watch?v=kyb3NV1U9SA' },
      {
        label: 'MOVIE',
        href: 'https://www.max.com/movies/going-to-mars-the-nikki-giovanni-project/851ad3b3-c7ea-4e3d-af7c-06045a93f922',
      },
    ],
  },
  {
    title: 'THE PERFECT FIND',
    background:
      'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/b99e839b-a885-4321-823e-17628eb6ee30/The-Perfect-Find-Wide.jpeg',
    poster:
      'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/b47c59c0-7ef2-4654-b772-3407183c4d0d/Perfect+Find+-+Poster.jpg',
    platformLogo:
      'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/7404ddcf-d3aa-49ff-a475-888aa937d703/netflix_white.png',
    description:
      "Based on New York Times best-selling author Tia Williams' debut novel, this romantic dramedy revolves around an accomplished forty-year-old fashion magazine editor who falls in love with the one person she shouldn't.",
    links: [
      { label: 'TRAILER', href: 'https://www.youtube.com/watch?v=n4tjqqGgky8' },
      { label: 'MOVIE', href: 'https://www.netflix.com/title/81030422' },
    ],
  },
  {
    title: 'JUICE WRLD: INTO THE ABYSS',
    background:
      'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/d2bc40df-08ee-441a-89ab-c2991c90a793/C18A0062.jpeg',
    poster:
      'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/49910785-1d11-40f2-9c56-7185ae825315/juice-wrld-poster%402x.png',
    platformLogo:
      'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/228a0f7d-05b5-4170-96a4-a449f48bbbea/HBO-MAX-LOGO%402x.png',
    description:
      'An intimate look into the life and extensive career of the late hip-hop star Jarad Anthony Higgins, known professionally as Juice WRLD.',
    links: [
      { label: 'TRAILER', href: 'https://www.youtube.com/watch?v=L05rpeHslpo' },
      { label: 'MOVIE', href: 'https://www.hbo.com/movies/music-box-juice-wrld-into-the-abyss' },
    ],
  },
  {
    title: '40 YEARS A PRISONER',
    background:
      'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/c3dab53b-9c79-4d4f-bea8-852673e01d46/40-yr-bkgd%402x.png',
    poster:
      'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/f0593175-84ea-4110-8ce5-7150da47d730/1592263_PRG-DOC_40YearsAPrisoner_KA_PO_CMYK_DOM_TItleTag.jpg',
    platformLogo:
      'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/228a0f7d-05b5-4170-96a4-a449f48bbbea/HBO-MAX-LOGO%402x.png',
    description:
      'Philadelphia native Tommy Oliver follows the efforts of Mike Africa Jr. to exonerate his parents, both incarcerated members of the revolutionary group MOVE.',
    links: [
      { label: 'TRAILER', href: 'https://www.youtube.com/watch?v=54o2m0f5EcA' },
      {
        label: 'MOVIE',
        href: 'https://www.max.com/movies/40-years-a-prisoner/ee47535a-31c3-420c-b493-ab51ae6b4822',
      },
    ],
  },
]

const founder = {
  image:
    'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/0cedee5f-64a8-47ad-aeca-ecf27e39dee7/Tommy.jpg',
  name: 'Tommy Oliver',
  title: 'Founder, CEO & Co-Chair',
  bio:
    'Tommy is an award-winning writer, director, producer, editor, photographer, and cinematographer. A graduate of Carnegie Mellon University, he is also a member of AMPAS, the DGA, the PGA, the WGA, and the Television Academy.',
}

const team = [
  ['Ayo Awoyemi', 'Assistant Director of Photography and Equipment Manager'],
  ['Azella PerRyman', 'Chief Operating Officer'],
  ['Codie Elaine Oliver', 'Partner & Co-Chair'],
  ['Colt Hansen', 'Head of Post-Production'],
  ['Danny Watkins', 'Controller'],
  ['Gerren Crochet', 'Assistant Editor'],
  ['Hannah Cope', 'Executive Assistant to CEO & CCO'],
  ['Joe Kehoe', 'Editor'],
  ['Kay Dillard', 'Creative Executive'],
  ['Keith Gionet', 'VP, Documentaries'],
  ['Nick Daue', 'Post-Production Coordinator'],
  ['Patrick Stapleton', 'Head of Production'],
  ['Shaun Williams', 'Chief Financial Officer'],
  ['Taylor Hamilton', 'Senior Vice President'],
] as const

const press = [
  {
    outlet: 'Variety',
    logo: 'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/e14f1f0c-53fe-4753-a601-6c03d1036560/Variety_Logo.png',
    title:
      'Black Love producer Tommy Oliver on navigating the post-peak TV marketplace, paying a Black tax, and banking on BIPOC stories',
    href: 'https://variety.com/',
  },
  {
    outlet: 'Deadline',
    logo: 'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/36c16f84-e6a3-405f-a4d0-e9574bd8ea69/Deadline_Hollywood-Logo.wine.png',
    title: 'Michael Rainey Jr. & Chloe Bailey set for new Fear Unlocked horror pic Goons',
    href: 'https://deadline.com/',
  },
  {
    outlet: 'The Hollywood Reporter',
    logo: 'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/990fbef3-d0e8-4109-bb5a-04b974e7cc48/The_Hollywood_Reporter_logo.png',
    title: 'Hamlet starring Riz Ahmed bought by Focus Features for international rights',
    href: 'https://www.hollywoodreporter.com/',
  },
  {
    outlet: 'Vanity Fair',
    logo: 'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/fb69f5f8-f49f-40bb-8832-bdb6ea4057e4/vanity-fair-logo-vector.png',
    title: 'A confluence of vision and determination rooted in community and authenticity',
    href: 'https://www.vanityfair.com/',
  },
  {
    outlet: 'New York Times',
    logo: 'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/705e020a-cc84-4082-b39f-148c866b62b7/new-york-times-logo-png-transparent.png',
    title: 'The ability to say yes to stories long neglected on the screen',
    href: 'https://www.nytimes.com/',
  },
  {
    outlet: 'Essence',
    logo: 'https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/b531131c-3b4e-445e-970e-12658f42fc0d/essence-png-logo.png',
    title: 'Black Love co-creator Codie Elaine Oliver on showing that Black love is worth it',
    href: 'https://www.essence.com/',
  },
]

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 4500)

    return () => window.clearInterval(interval)
  }, [])

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length)
  }

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length)
  }

  return (
    <div className="bg-[#e6e6e6] text-black">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 md:px-10">
          <a href="#top" className="relative z-20">
            <img
              src={siteLogo}
              alt="Confluential Films"
              className="h-8 w-auto md:h-10"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] tracking-[0.22em] text-white/90 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="relative z-20 rounded-full border border-white/25 bg-black/15 text-white backdrop-blur md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {menuOpen && (
          <div className="mx-4 rounded-3xl border border-white/15 bg-black/90 p-6 text-white shadow-2xl backdrop-blur md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm tracking-[0.22em]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative min-h-screen overflow-hidden bg-black">
          {heroSlides.map((image, index) => (
            <div
              key={image}
              className={cn(
                'absolute inset-0 bg-cover bg-center transition-opacity duration-1000',
                index === activeSlide ? 'opacity-100' : 'opacity-0'
              )}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}

          <div className="absolute inset-0 bg-black/38" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/70 to-transparent" />

          <div className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-5 pb-10 pt-28 md:px-10 md:pb-12">
            <div className="flex items-center justify-between pb-6">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-white/20 bg-black/20 text-white hover:bg-white/10 hover:text-white"
                  onClick={previousSlide}
                >
                  <ArrowLeft className="size-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-white/20 bg-black/20 text-white hover:bg-white/10 hover:text-white"
                  onClick={nextSlide}
                >
                  <ArrowRight className="size-4" />
                </Button>
              </div>

              <div className="text-sm text-white/78">
                {activeSlide + 1} / {heroSlides.length}
              </div>
            </div>

            <div className="grid items-end gap-8 border-t border-white/10 pt-8 md:grid-cols-[minmax(0,1fr)_320px] md:pt-10">
              <div className="max-w-3xl">
                <h1 className="font-['Montserrat'] text-4xl font-bold leading-tight text-white md:text-[56px] md:leading-[1.08]">
                  Moving culture through bold storytelling.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/82 md:text-lg">
                  Confluential Films is an award-winning, Black-owned and
                  Black-founded, film, television, and documentary production company
                  and financier. We are creator-driven, hyper-collaborative, and
                  grounded in authenticity.
                </p>
              </div>

              <div className="flex flex-col gap-4 md:items-end">
                <span className="text-xs tracking-[0.24em] text-white/65">
                  WE LOVE OUR PARTNERS
                </span>
                <img
                  src={logoBar}
                  alt="Partner logos"
                  className="h-auto w-full max-w-[360px] opacity-95"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 bg-[#0a0a0a] px-5 py-18 text-white md:px-10 md:py-24">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-10 flex items-center gap-3">
              <Clapperboard className="size-5 text-white/70" />
              <h2 className="font-['Archivo_Black'] text-3xl uppercase md:text-[42px]">
                Our Brands
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[28px] bg-white/10 md:grid-cols-2 xl:grid-cols-4">
              {brands.map((brand) => (
                <article
                  key={brand.logo}
                  className="flex min-h-[320px] flex-col justify-between bg-black px-7 py-8 md:px-8"
                >
                  <img
                    src={brand.logo}
                    alt=""
                    className="h-14 w-auto object-contain object-left"
                  />
                  <p className="mt-10 text-[15px] leading-7 text-white/78">{brand.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="upcoming" className="px-5 py-18 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-10 flex items-center gap-3">
              <Play className="size-5" />
              <h2 className="font-['Archivo_Black'] text-3xl uppercase md:text-[42px]">
                Upcoming Projects
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {upcomingProjects.map((project) => (
                <article
                  key={project.title}
                  className="overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.08)]"
                >
                  <img
                    src={project.poster}
                    alt={project.title}
                    className="aspect-[3/4] w-full object-cover"
                  />
                  <div className="space-y-4 p-7">
                    <h3 className="font-['Archivo_Black'] text-2xl uppercase leading-tight">
                      {project.title}
                    </h3>
                    <div className="space-y-2 text-sm uppercase tracking-[0.12em] text-black/70">
                      {project.meta.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                    <p className="pt-2 text-[15px] leading-7 text-black/78">{project.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="bg-black px-5 py-18 text-white md:px-10 md:py-24">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-10 flex items-center gap-3">
              <Clapperboard className="size-5 text-white/70" />
              <h2 className="font-['Archivo_Black'] text-3xl uppercase md:text-[42px]">
                TV & Film
              </h2>
            </div>

            <div className="space-y-10">
              {filmProjects.map((project) => (
                <article
                  key={project.title}
                  className="overflow-hidden rounded-[32px] border border-white/10 bg-neutral-900"
                >
                  <div className="grid lg:grid-cols-[1.2fr_0.85fr]">
                    <div
                      className="relative min-h-[280px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.background})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                    </div>

                    <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[140px_minmax(0,1fr)] lg:p-9">
                      <img
                        src={project.poster}
                        alt={project.title}
                        className="w-full rounded-2xl object-cover shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                      />

                      <div>
                        <h3 className="font-['Archivo_Black'] text-2xl uppercase md:text-[30px]">
                          {project.title}
                        </h3>
                        <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/76">
                          {project.description}
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                          {project.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 text-[11px] tracking-[0.22em] text-white transition hover:bg-white hover:text-black"
                            >
                              {link.label}
                              <ArrowUpRight className="size-4" />
                            </a>
                          ))}
                        </div>

                        <img
                          src={project.platformLogo}
                          alt=""
                          className="mt-8 h-6 w-auto object-contain object-left opacity-85"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="audio" className="px-5 py-18 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-10 flex items-center gap-3">
              <Headphones className="size-5" />
              <h2 className="font-['Archivo_Black'] text-3xl uppercase md:text-[42px]">
                Audio
              </h2>
            </div>

            <article className="overflow-hidden rounded-[34px] bg-[#21153a] text-white shadow-[0_24px_80px_rgba(14,8,31,0.28)]">
              <div className="grid lg:grid-cols-[1.25fr_0.9fr]">
                <div
                  className="min-h-[320px] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, rgba(17,9,30,0.72), rgba(17,9,30,0.15)), url(https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/5c5d6855-c170-4841-9609-0ce9670ae76f/Africas-vs-Americas--Confluential-BG-Wide-Purple.png)',
                  }}
                />

                <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[140px_minmax(0,1fr)] lg:p-9">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/ef9bb200-6bbf-4637-959f-345af5b40641/Africas-vs-Americas--Confluential-Poster-Tall.png"
                    alt="The Africas VS. America"
                    className="w-full rounded-2xl object-cover shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                  />

                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-white/65">
                      Limited Series
                    </p>
                    <h3 className="mt-3 font-['Archivo_Black'] text-2xl uppercase md:text-[30px]">
                      The Africas VS. America
                    </h3>
                    <p className="mt-4 text-[15px] leading-7 text-white/76">
                      In 1985, at the height of the Black Power era, police dropped a bomb
                      in a Philadelphia neighborhood. Their target was a family of Black
                      radicals known as MOVE, who found themselves ensnared in a citywide
                      political conflict.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <AudioChip icon={Radio} label="CBC Listen" href="https://www.cbc.ca/listen" />
                      <AudioChip
                        icon={Mic2}
                        label="Apple Podcasts"
                        href="https://podcasts.apple.com/"
                      />
                      <AudioChip icon={Headphones} label="Spotify" href="https://spotify.com/" />
                    </div>

                    <img
                      src="https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/923cfa4e-3213-4dc9-ba54-1981f42bd5ed/CBC_Logo_withwordmark_Horizontal_reverse.png"
                      alt=""
                      className="mt-8 h-8 w-auto object-contain object-left opacity-90"
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-black px-5 py-18 text-white md:px-10 md:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-white/60">Founder</p>
              <h2 className="mt-3 font-['Archivo_Black'] text-3xl uppercase md:text-[42px]">
                {founder.name}
              </h2>
              <p className="mt-3 text-base uppercase tracking-[0.14em] text-white/68">
                {founder.title}
              </p>
              <p className="mt-6 max-w-xl text-[15px] leading-8 text-white/76">
                {founder.bio}
              </p>
            </div>

            <div className="overflow-hidden rounded-[36px]">
              <img
                src={founder.image}
                alt={founder.name}
                className="aspect-[4/3] w-full object-cover grayscale"
              />
            </div>
          </div>
        </section>

        <section id="team" className="px-5 py-18 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-10 flex items-center gap-3">
              <Users className="size-5" />
              <h2 className="font-['Archivo_Black'] text-3xl uppercase md:text-[42px]">
                Team
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[28px] bg-black/10 md:grid-cols-2 xl:grid-cols-4">
              {team.map(([name, role]) => (
                <article key={name} className="bg-white px-6 py-7 md:px-7">
                  <h3 className="font-['Archivo_Black'] text-xl uppercase leading-tight">
                    {name}
                  </h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.12em] text-black/62">
                    {role}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="press" className="bg-black px-5 py-18 text-white md:px-10 md:py-24">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-10 flex items-center gap-3">
              <ArrowUpRight className="size-5 text-white/70" />
              <h2 className="font-['Archivo_Black'] text-3xl uppercase md:text-[42px]">
                Recent Press
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {press.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-[250px] flex-col justify-between rounded-[28px] border border-white/10 bg-white/4 p-7 transition hover:bg-white/7"
                >
                  <img
                    src={item.logo}
                    alt={item.outlet}
                    className="h-9 w-auto max-w-[150px] object-contain object-left opacity-90 invert"
                  />

                  <div>
                    <p className="mb-3 text-xs uppercase tracking-[0.22em] text-white/52">
                      {item.outlet}
                    </p>
                    <h3 className="text-lg leading-8 text-white/88 transition group-hover:text-white">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-6 flex items-center text-sm uppercase tracking-[0.18em] text-white/68">
                    Read More
                    <ArrowRight className="ml-2 size-4" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 bg-[#e6e6e6] px-5 py-10 md:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <img src={siteLogo} alt="Confluential Films" className="h-8 w-auto invert" />
          <div className="max-w-2xl text-sm leading-7 text-black/68">
            Confluential Productions is the production services arm of Confluential. We
            provide pre-production, production, and post-production services, equipment
            rentals, and stage services for motion pictures, television, and digital
            content.
          </div>
        </div>
      </footer>
    </div>
  )
}

function AudioChip({
  icon: Icon,
  label,
  href,
}: {
  icon: LucideIcon
  label: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/7 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/82 transition hover:bg-white hover:text-black"
    >
      <Icon className="size-4" />
      {label}
    </a>
  )
}

export default App
