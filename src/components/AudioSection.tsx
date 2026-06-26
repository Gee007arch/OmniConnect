const audioLinks = [
  ['CBC Listen', 'https://www.cbc.ca/listen'],
  ['Apple Podcasts', 'https://podcasts.apple.com/'],
  ['Spotify', 'https://spotify.com/'],
  ['Stitcher', 'https://www.stitcher.com/'],
  ['Amazon Music', 'https://music.amazon.com/podcasts'],
] as const

export function AudioSection() {
  return (
    <section id="audio" className="bg-black px-5 py-18 text-white md:px-10 md:py-24 relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/5c5d6855-c170-4841-9609-0ce9670ae76f/Africas-vs-Americas--Confluential-BG-Wide-Purple.png)',
            }}
          />
          {/* <div className="absolute inset-0 bg-[#25153b]/72" /> */}
           <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,13,37,0.86)_0%,rgba(39,21,61,0.56)_50%,rgba(33,18,51,0.66)_100%)]" /> 
      <div className="mx-auto max-w-350 relative">
        <h2 className="mb-10 font-['Archivo_Black'] text-3xl uppercase md:text-5xl">
          Audio
        </h2>

        <article className="relative overflow-hidden text-white">

          <div className="relative grid min-h-155 items-start gap-10 px-0 py-10 md:px-0 md:py-14 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-24 ">
            <div
              className="px-5 md:px-10 lg:px-0"
            >
              <img
                src="https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/ef9bb200-6bbf-4637-959f-345af5b40641/Africas-vs-Americas--Confluential-Poster-Tall.png"
                alt="The Africas VS. America"
                className=" max-w-82.5 object-cover shadow-[0_24px_80px_rgba(0,0,0,0.38)]"
              />
            </div>

            <div className="px-5 md:px-10 lg:px-0 lg:pt-3">
              <img
                src="https://images.squarespace-cdn.com/content/v1/623256994b9acd79919d2423/923cfa4e-3213-4dc9-ba54-1981f42bd5ed/CBC_Logo_withwordmark_Horizontal_reverse.png"
                alt="CBC"
                className="h-10 w-auto object-contain object-left md:h-12"
              />

              <h3 className="mt-8 max-w-190 font-semibold text-xl uppercase leading-[1.04] md:text-2xl">
                The Africas VS. America
              </h3>
              <p className="mt-4 max-w-185 text-lg leading-[1.75]  md:text-[18px]">
                In 1985, at the height of the Black Power era, police dropped a bomb in a
                Philadelphia neighborhood. Their target? A family of Black radicals known
                as ‘MOVE,’ who found themselves ensnared in a city and nation’s domestic
                war on Black Liberation. Over seven episodes, host Matthew Amha
                investigates the events that culminated in the MOVE bombing, and the long
                afterlife of a forgotten American tragedy.
              </p>

              <div className="mt-10 flex flex-col items-start gap-4">
                {audioLinks.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[18px] font-semibold text-[#4f8fff] underline underline-offset-4 transition hover:text-[#8bb7ff]"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
