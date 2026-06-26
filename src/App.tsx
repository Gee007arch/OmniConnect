import { AudioSection } from '@/components/AudioSection'
import { BrandsSection } from '@/components/BrandsSection'
import { FilmPortfolioSection } from '@/components/FilmPortfolioSection'
import { Footer } from '@/components/Footer'
// import { FounderSection } from '@/components/FounderSection'
import { HeroSection } from '@/components/HeroSection'
import { InRelease } from '@/components/InRelease'
// import { PressSection } from '@/components/PressSection'
// import { TeamSection } from '@/components/TeamSection'
import { ComingSoon } from '@/components/ComingSoon'
import { Navbar } from '@/components/ui/navbar'

function App() {
  return (
    <div className="bg-[#e6e6e6] text-black">
      <Navbar />

      <main id="top">
        <HeroSection />
        <InRelease />
        <BrandsSection />
        <ComingSoon />
        <FilmPortfolioSection />
        <AudioSection />
        {/* <FounderSection /> */}
        {/* <TeamSection /> */}
        {/* <PressSection /> */}
      </main>

      <Footer />
    </div>
  )
}

export default App
