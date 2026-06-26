import { Clapperboard } from 'lucide-react'

import { brands } from '@/data/site-content'

export function BrandsSection() {
  return (
    <section className="border-t border-black/10 bg-[#000000] px-5 py-18 text-white md:px-10 md:py-24">
      <div className="mx-auto max-w-375">
        <div className="mb-10 flex items-center gap-3">
          <Clapperboard className="size-5 text-white/70" />
          <h2 className="font-['Archivo_Black'] text-3xl font-bold uppercase md:text-5xl">
            Our Brands
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg bg-white/10 md:grid-cols-2 xl:grid-cols-4">
          {brands.map((brand) => (
            <article
              key={brand.logo}
              className="flex min-h-80 flex-col justify-between bg-black px-7 py-8 md:px-8"
            >
              <img
                src={brand.logo}
                alt=""
                className="h-14 w-auto object-contain object-left"
              />
              <p className="mt-10 text-base leading-7 text-white">{brand.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
