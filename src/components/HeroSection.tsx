import { useEffect, useState } from 'react'
// import { ArrowLeft, ArrowRight } from 'lucide-react'

import { heroSlides, logoBar } from '@/data/site-content'
// import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 4500)

    return () => window.clearInterval(interval)
  }, [])

  // const previousSlide = () => {
  //   setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length)
  // }

  // const nextSlide = () => {
  //   setActiveSlide((current) => (current + 1) % heroSlides.length)
  // }

  return (
    <section className="hero-depth-stage relative min-h-screen overflow-hidden bg-black">
      {heroSlides.map((image, index) => (
        <div
          key={image}
          className={cn(
            'hero-image-plane absolute inset-0 bg-cover bg-center transition-opacity duration-1000 grayscale brightness-90 contrast-[1.05]',
            index === activeSlide ? 'opacity-100' : 'opacity-0'
          )}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      <div className="absolute inset-0 bg-[#28153c]/45 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[#221235]/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(43,94,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(146,76,255,0.14),transparent_24%)]" />
      <div className="hero-orbital-panel hero-orbital-panel--one" />
      <div className="hero-orbital-panel hero-orbital-panel--two" />
      <div className="hero-orbital-panel hero-orbital-panel--three" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-linear-to-t from-black via-black/70 to-transparent" />

      <div className="relative mx-auto flex  max-w-[1500px] flex-col justify-between px-5 pb-12 pt-40 md:px-10 md:pb-16">
        <div className="hero-copy-3d mb-48 max-w-5xl space-y-24">
          <h1 className="font-['Montserrat'] text-4xl font-bold uppercase leading-tight text-white md:text-6xl md:leading-[1.08]">
            Moving culture through bold storytelling.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/82 md:text-lg">
            Confluential Films is an award-winning, Black-owned and
            Black-founded, film, television, and documentary production company
            and financier. We are creator-driven, hyper-collaborative, and
            grounded in authenticity.
          </p>
        </div>

        <div className="flex flex-col gap-4 ">
          <span className="text-sm font-semibold text-white/90">
            We love our partners!
          </span>
          <img
            src={logoBar}
            alt="Partner logos"
            className="h-auto w-full max-w-[620px] opacity-95"
          />
        </div>


        {/* <div className="absolute right-5 bottom-12 z-10 flex items-center gap-4 text-white md:right-10 md:bottom-16">
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

          <div className="text-sm font-mono text-white/78">
            {activeSlide + 1} / {heroSlides.length}
          </div>
        </div> */}
      </div>
    </section>
  )
}
