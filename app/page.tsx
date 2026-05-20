import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { Stats } from "@/components/home/stats"
import { FeaturedMenu } from "@/components/home/featured-menu"
import { AboutTeaser } from "@/components/home/about-teaser"
import { SpecialOffer } from "@/components/home/special-offer"
import { Testimonials } from "@/components/home/testimonials"
import { Newsletter } from "@/components/home/newsletter"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <Navbar />
      <Hero />
      <Stats />
      <FeaturedMenu />
      <AboutTeaser />
      <SpecialOffer />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
