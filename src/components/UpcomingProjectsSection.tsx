import { Play } from 'lucide-react'

import { upcomingProjects } from '@/data/site-content'

export function UpcomingProjectsSection() {
  return (
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
  )
}
