import { About } from '@/components/About'
import { Banner } from '@/components/Banner'
import { Contact } from '@/components/Contact'
import { Header } from '@/components/Header'
import { Nav } from '@/components/Nav'
import { Works } from '@/components/Works'

export default function Home() {
  return (
    // flex min-h-screen flex-col  justify-center
    <main className="min-h-screen">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Works />
      <Contact />
    </main>
  )
}
