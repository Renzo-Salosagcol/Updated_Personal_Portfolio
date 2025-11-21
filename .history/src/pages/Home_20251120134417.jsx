import { Background } from "../components/Background"
import { Navbar } from "../components/Navbar"
import { Hero } from "../components/Hero"
import { About } from "../components/About"
import { Projects } from "../components/Projects"
import { Contact } from "../components/Contact"

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
      <Projects />
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  )
}