import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Experience } from '@/components/Experience'
import { Header } from '@/components/Header'
import { NavBar } from '@/components/NavBar'
import { Skills } from '@/components/Skills'
import { Works } from '@/components/Works'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <About />
      <NavBar />
      <Experience />
      <Skills />
      <Works />
      <Contact />
    </main>
  )
}
