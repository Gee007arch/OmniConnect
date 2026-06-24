import type { LucideIcon } from 'lucide-react'
import { Headphones, Mic2, Radio } from 'lucide-react'

function AudioChip({
  icon: Icon,
  label,
  href,
}: {
  icon: LucideIcon
  label: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/7 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/82 transition hover:bg-white hover:text-black"
    >
      <Icon className="size-4" />
      {label}
    </a>
  )
}

export function AudioSection() {
  return (
    <section id="audio" className="px-5 py-18 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex items-center gap-3">
          <Headphones className="size-5" />
          <h2 className="font-['Archivo_Black'] text-3xl uppercase md:text-[42px]">
            Audio
          </h2>
        </div>

        <article className="overflow-hidden rounded-[34px] bg-[#21153a] text-white shadow-[0_24px_80px_rgba(14,8,31,0.28)]">
          <div className="grid lg:grid-cols-[1.25fr_0.9fr]">
            <div
              className="min-h-[320px] bg-cover bg-center"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgba(17,9,30,0.72), rgba(17,9,30,0.15)), url(https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/5c5d6855-c170-4841-9609-0ce9670ae76f/Africas-vs-Americas--Confluential-BG-Wide-Purple.png)',
              }}
            />

            <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[140px_minmax(0,1fr)] lg:p-9">
              <img
                src="https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/ef9bb200-6bbf-4637-959f-345af5b40641/Africas-vs-Americas--Confluential-Poster-Tall.png"
                alt="The Africas VS. America"
                className="w-full rounded-2xl object-cover shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              />

              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-white/65">
                  Limited Series
                </p>
                <h3 className="mt-3 font-['Archivo_Black'] text-2xl uppercase md:text-[30px]">
                  The Africas VS. America
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-white/76">
                  In 1985, at the height of the Black Power era, police dropped a bomb
                  in a Philadelphia neighborhood. Their target was a family of Black
                  radicals known as MOVE, who found themselves ensnared in a citywide
                  political conflict.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <AudioChip icon={Radio} label="CBC Listen" href="https://www.cbc.ca/listen" />
                  <AudioChip
                    icon={Mic2}
                    label="Apple Podcasts"
                    href="https://podcasts.apple.com/"
                  />
                  <AudioChip icon={Headphones} label="Spotify" href="https://spotify.com/" />
                </div>

                <img
                  src="https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/923cfa4e-3213-4dc9-ba54-1981f42bd5ed/CBC_Logo_withwordmark_Horizontal_reverse.png"
                  alt=""
                  className="mt-8 h-8 w-auto object-contain object-left opacity-90"
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
