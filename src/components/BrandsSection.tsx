import { Clapperboard } from 'lucide-react'

import { brands } from '@/data/site-content'

export function BrandsSection() {
  return (
    <section className="border-t border-black/10 bg-[#0a0a0a] px-5 py-18 text-white md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex items-center gap-3">
          <Clapperboard className="size-5 text-white/70" />
          <h2 className="font-['Archivo_Black'] text-3xl uppercase md:text-[42px]">
            Our Brands
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[28px] bg-white/10 md:grid-cols-2 xl:grid-cols-4">
          {brands.map((brand) => (
            <article
              key={brand.logo}
              className="flex min-h-[320px] flex-col justify-between bg-black px-7 py-8 md:px-8"
            >
              <img
                src={brand.logo}
                alt=""
                className="h-14 w-auto object-contain object-left"
              />
              <p className="mt-10 text-[15px] leading-7 text-white/78">{brand.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
