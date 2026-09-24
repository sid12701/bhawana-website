import Header from "./Header"
import HeroCarousel from "./HeroCarousel"
import AboutSection from "./AboutSection"
import ProductsSection from "./ProductsSection"
import DirectorsSection from "./DirectorsSection"
import BlogSection from "./BlogSection"
import ContactSection from "./ContactSection"
import Footer from "./Footer"

export default function HomePageClient() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <AboutSection />
        <ProductsSection />
        <DirectorsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
