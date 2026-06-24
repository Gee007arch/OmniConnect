import { AudioSection } from '@/components/AudioSection'
import { BrandsSection } from '@/components/BrandsSection'
import { FilmPortfolioSection } from '@/components/FilmPortfolioSection'
import { Footer } from '@/components/Footer'
import { FounderSection } from '@/components/FounderSection'
import { HeroSection } from '@/components/HeroSection'
import { PressSection } from '@/components/PressSection'
import { TeamSection } from '@/components/TeamSection'
import { UpcomingProjectsSection } from '@/components/UpcomingProjectsSection'
import { Navbar } from '@/components/ui/navbar'

function App() {
  return (
    <div className="bg-[#e6e6e6] text-black">
      <Navbar />

      <main id="top">
        <HeroSection />
        <BrandsSection />
        <UpcomingProjectsSection />
        <FilmPortfolioSection />
        <AudioSection />
        <FounderSection />
        <TeamSection />
        <PressSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
