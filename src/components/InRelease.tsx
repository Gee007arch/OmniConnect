import { ArrowRight } from 'lucide-react'

import { inReleaseItems } from '@/data/site-content'

export function InRelease() {
  return (
    <section id="in-release" className="bg-black px-5 py-18 text-white md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
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

          <div className="release-grid-perspective grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {inReleaseItems.map((item, index) => (
              <article
                key={item.title}
                className="release-card-3d flex flex-col items-center"
                style={{ ['--delay' as string]: `${index * 180}ms` }}
              >
                <a href={item.href} target="_blank" rel="noreferrer" className="w-full">
                  <div className="release-poster-shell">
                    <img
                      src={item.poster}
                      alt={item.title}
                      className="aspect-2/3 w-full rounded-lg object-cover shadow-[0_22px_70px_rgba(0,0,0,0.55)]"
                    />
                  </div>
                </a>

                <div className="release-meta-3d mt-5 flex w-full flex-col items-center">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:text-white"
                  >
                    {item.title}
                    <ArrowRight className="size-4" />
                  </a>

                  <div className="mt-5 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
                    <a
                      href={item.primaryCta.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 w-full items-center justify-center rounded-full bg-blue-600 px-5 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-blue-500 sm:w-auto"
                    >
                      {item.primaryCta.label}
                    </a>
                    <a
                      href={item.secondaryCta.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-black sm:w-auto"
                    >
                      {item.secondaryCta.label}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
