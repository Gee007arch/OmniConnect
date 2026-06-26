import { Clapperboard } from 'lucide-react'

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
              className="flex flex-col overflow-hidden bg-black md:flex-row"
            >
              <div className="md:w-[38%] md:shrink-0">
                <img
                  src={project.poster}
                  alt={project.title}
                  className="aspect-2/3 w-full object-cover md:aspect-auto md:h-full md:min-h-[360px]"
                />
              </div>

              <div className="relative flex flex-1 flex-col justify-center px-8 py-10 md:px-12 md:py-14 lg:px-16">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.background})` }}
                />
                <div className="absolute inset-0 bg-[#21153a]/70" />
                <div className="absolute inset-0 bg-black/35" />

                <div className="relative z-10 space-y-4 md:space-y-5">
                  <img
                    src={project.platformLogo}
                    alt=""
                    className="h-6 w-auto object-contain object-left"
                  />

                  <h3 className="font-['Archivo_Black'] text-2xl uppercase tracking-wide text-white md:text-[28px]">
                    {project.title}
                  </h3>

                  <p className="max-w-md text-sm leading-relaxed text-white/90 md:text-[15px] md:leading-7">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-6 pt-1">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold uppercase tracking-wide text-[#4a9eff] underline underline-offset-4 transition hover:text-[#7bb8ff]"
                      >
                        {link.label}
                      </a>
                    ))}
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
