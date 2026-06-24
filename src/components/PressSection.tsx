import { ArrowRight, ArrowUpRight } from 'lucide-react'

import { press } from '@/data/site-content'

export function PressSection() {
  return (
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
  )
}
