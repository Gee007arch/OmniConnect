import { filmProjects } from '@/data/site-content'

export function FilmPortfolioSection() {
  return (
    <section id="portfolio" className="bg-black pt-18 text-white md:pt-24">
      <div className="mx-auto ">
        <div className="mb-10 px-5 md:px-10 max-w-375 mx-auto">
          <h2 className="font-['Archivo_Black'] text-3xl font-bold uppercase md:text-5xl">
            TV & Film
          </h2>
        </div>

        <div>
          {filmProjects.map((project) => (
            <main className='relative'>
                 <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.background})` }}
                />
                <div className="absolute inset-0 bg-[#241640]/74" />
                <div className="absolute inset-0 bg-black/24" />
            <article
              key={project.title}
              className=" flex flex-col overflow-hidden   border-t border-white/12 bg-black last:border-b md:min-h-120 md:flex-row"
            >
            


              <div className="md:w-[36.5%] md:shrink-0 relative">
                <img
                  src={project.poster}
                  alt={project.title}
                  className="aspect-2/3 w-full object-cover md:h-full md:min-h-120 p-18"
                />
              </div>

              <div className="relative flex flex-1 flex-col justify-center px-4 py-10 md:px-6 md:py-14 lg:px-8">
          
                <div className="relative z-10 max-w-140 space-y-3 md:space-y-4">
                  <img
                    src={project.platformLogo}
                    alt=""
                    className="h-12 w-auto object-contain object-left md:h-18"
                  />

                  <h3 className="font-semibold text-xl uppercase tracking-wide text-white md:text-2xl">
                    {project.title}
                  </h3>

                  <p className="max-w-135 text-sm leading-relaxed text-white/92 md:text-base md:leading-7">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-8 pt-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-base font-bold uppercase tracking-[0.18em] text-[#4a9eff] underline underline-offset-4 transition hover:text-[#7bb8ff]"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
            </main>
          ))}
        </div>
      </div>
    </section>
  )
}
