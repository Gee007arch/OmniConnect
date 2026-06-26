import { siteLogo } from '@/data/site-content'

export function Footer() {
  return (
    <footer className="bg-black px-5 py-4 text-white md:px-10 md:py-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <img
          src={siteLogo}
          alt="Confluential Films"
          className="mb-10 h-10 w-auto md:h-12"
        />

        <div className="space-y-6 text-sm leading-7 text-white/72 md:text-[15px] md:leading-8">
          <p>
            Confluential Productions is the production services arm of Confluential. We
            provide pre-production, production, and post-production services, equipment
            rentals, and stage services for motion pictures, television, and digital
            content.
          </p>

          <p>
            Confluential and its subsidiaries operate exclusively by referral and does
            not accept unsolicited materials or solicitations of any kind. Any such
            materials will be returned or destroyed.
          </p>

          <p className="pt-2 text-white/55">
            © 2024 The Confluential Company, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
