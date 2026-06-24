import { founder } from '@/data/site-content'

export function FounderSection() {
  return (
    <section className="bg-black px-5 py-18 text-white md:px-10 md:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-white/60">Founder</p>
          <h2 className="mt-3 font-['Archivo_Black'] text-3xl uppercase md:text-[42px]">
            {founder.name}
          </h2>
          <p className="mt-3 text-base uppercase tracking-[0.14em] text-white/68">
            {founder.title}
          </p>
          <p className="mt-6 max-w-xl text-[15px] leading-8 text-white/76">
            {founder.bio}
          </p>
        </div>

        <div className="overflow-hidden rounded-[36px]">
          <img
            src={founder.image}
            alt={founder.name}
            className="aspect-[4/3] w-full object-cover grayscale"
          />
        </div>
      </div>
    </section>
  )
}
