import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col p-4">
      <Nav />
      <HeroSection />
      <Footer />
    </div>
  )
}
