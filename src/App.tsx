import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import Title from './components/Title'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between p-4">
      <Nav />
      <Title />
      <HeroSection />
      <Footer />
    </div>
  )
}
