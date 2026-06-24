import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { heroSlides, logoBar } from '@/data/site-content'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)

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
  )
}
