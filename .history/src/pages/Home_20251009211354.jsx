import { Background } from "../components/Background"
import { Navbar } from "../components/Navbar"
import { Hero } from "../components/Hero"
import { About } from "../components/About"

export const Home = () => {
  return (
    <div id="home" className="w-full h-screen">
      {/* Background */}
      <Background />


      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <Hero />
      <About />

      {/* Footer */}
    </div>
  )
}