
import About from '@/components/About'
import Art from '@/components/Art'
import Cocktails from '@/components/Cocktails'
import Hero from '@/components/Hero'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <Cocktails />
      <About />
      <Art  />
    </main>
  )
}
