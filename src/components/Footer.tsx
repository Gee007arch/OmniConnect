import { siteLogo } from '@/data/site-content'

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#e6e6e6] px-5 py-10 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <img src={siteLogo} alt="Confluential Films" className="h-8 w-auto invert" />
        <div className="max-w-2xl text-sm leading-7 text-black/68">
          Confluential Productions is the production services arm of Confluential. We
          provide pre-production, production, and post-production services, equipment
          rentals, and stage services for motion pictures, television, and digital
          content.
        </div>
      </div>
    </footer>
  )
}
