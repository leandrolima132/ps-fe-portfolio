import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Header } from '@/components/Header'
import { NavBar } from '@/components/NavBar'
import { Skills } from '@/components/Skills'
import { Works } from '@/components/Works'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <NavBar />
      <About />
      <Experience />
      <Skills />
      <Works />
    </div>
  )
}
