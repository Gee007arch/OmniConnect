import { ArrowUpRight, Clapperboard } from 'lucide-react'

import { filmProjects } from '@/data/site-content'

export function FilmPortfolioSection() {
  return (
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
  )
}
