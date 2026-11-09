import { About, Contact, Hero, Nav } from './components/Sections'
import { Projects } from './components/Projects'

export default function App() {
  return (
    <>
      <a className="skip" href="#sobre">Pular para o conteúdo</a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
