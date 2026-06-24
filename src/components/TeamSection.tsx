import { Users } from 'lucide-react'

import { team } from '@/data/site-content'

export function TeamSection() {
  return (
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
  )
}
