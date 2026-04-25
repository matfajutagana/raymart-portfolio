import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import TechStack from '@/components/sections/TechStack'
import Publications from '@/components/sections/Publications'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <TechStack />
      <Publications />
      <Contact />
    </main>
  )
}
