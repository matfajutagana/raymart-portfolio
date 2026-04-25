import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import TechStack from '@/components/sections/TechStack'
import Publications from '@/components/sections/Publications'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <Hero />
      <div className="px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Experience />
            </div>
            <div className="lg:col-span-2">
              <TechStack />
            </div>
          </div>
          <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Projects />
            </div>
            <div className="lg:col-span-2">
              <Publications />
            </div>
          </div>
          <Contact />
        </div>
      </div>
    </main>
  )
}
