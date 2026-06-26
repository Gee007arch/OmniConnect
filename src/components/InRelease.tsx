import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

import { inReleaseItems } from '@/data/site-content'

export function InRelease() {
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [progress, setProgress] = useState(0)
  const [thumbWidth, setThumbWidth] = useState(1)

  useEffect(() => {
    const element = scrollerRef.current
    if (!element) return

    const update = () => {
      const maxScrollLeft = element.scrollWidth - element.clientWidth
      setCanScrollLeft(element.scrollLeft > 0)
      setCanScrollRight(element.scrollLeft < maxScrollLeft - 1)
      setProgress(maxScrollLeft > 0 ? element.scrollLeft / maxScrollLeft : 0)
      setThumbWidth(element.scrollWidth > 0 ? element.clientWidth / element.scrollWidth : 1)
    }

    update()
    element.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      element.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const scrollByAmount = (direction: 'left' | 'right') => {
    const element = scrollerRef.current
    if (!element) return

    const amount = Math.max(280, Math.floor(element.clientWidth * 0.92))
    element.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section id="in-release" className="bg-black px-5 py-18 text-white md:px-10 md:py-24">
      <div className="mx-auto max-w-350">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
          <div className="space-y-6">
            <h2 className="font-['Archivo_Black'] text-5xl uppercase leading-[0.92] md:text-6xl">
              In
              <br />
              Release
            </h2>

            <a
              href="https://www.universalpictures.com/movies/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75 transition hover:text-white"
            >
              See all movies
              <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="relative">
            <div className="absolute -top-14 right-0 flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous"
                disabled={!canScrollLeft}
                onClick={() => scrollByAmount('left')}
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next"
                disabled={!canScrollRight}
                onClick={() => scrollByAmount('right')}
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>

            <div className="mb-7 h-[3px] w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-blue-500"
                style={{
                  width: `${Math.max(0.12, Math.min(1, thumbWidth)) * 100}%`,
                  transform: `translateX(${progress * (100 - Math.max(0.12, Math.min(1, thumbWidth)) * 100)}%)`,
                }}
              />
            </div>

            <div
              ref={scrollerRef}
              className="scrollbar-none flex gap-8 overflow-x-auto scroll-smooth pb-2 pr-8 snap-x snap-mandatory [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {inReleaseItems.map((item) => (
                <article key={item.title} className="w-[250px] shrink-0 snap-start sm:w-[380px]">
                  <a href={item.href} target="_blank" rel="noreferrer">
                    <img
                      src={item.poster}
                      alt={item.title}
                      className="aspect-2/3 w-full rounded-lg object-cover shadow-[0_22px_70px_rgba(0,0,0,0.55)]"
                    />
                  </a>

                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:text-white"
                  >
                    {item.title}
                    <ArrowRight className="size-4" />
                  </a>

                  <div className="mt-4 flex flex-col items-center gap-3 md:flex-row">
                    <a
                      href={item.primaryCta.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 w-full items-center justify-center rounded-full bg-blue-600 px-5 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:bg-blue-500 md:w-auto"
                    >
                      {item.primaryCta.label}
                    </a>
                    <a
                      href={item.secondaryCta.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-black md:w-auto"
                    >
                      {item.secondaryCta.label}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
