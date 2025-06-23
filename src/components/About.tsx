"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import Image from 'next/image'
import React from 'react'

const About = () => {

  useGSAP(()=>{
    const titleSplit = SplitText.create('#about h2', { type: 'words' })
    const scrollTimeline = gsap.timeline({
      scrollTrigger:{
        trigger: '#about',
        start: 'top center',
      }
    })
    scrollTimeline
     .from(titleSplit.words, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: 'expo.Out',
      stagger: 0.02,
    })
    .from('.top-grid div, .bottom-grid div', {
      opacity: 0,
      duration: 1,
      ease: 'power1.inOut',
      stagger: 0.04,
    }, '-=0.5')
  })

  return (
    <section id='about' className=''>
      <div className="mb-16 md:px-0 px-5">
        <div className='content'>
          <div className='md:col-span-8'>
            <p className='badge'>Best Cocktails</p>
            <h2>Where every drink is a masterpiece <span className='text-white'>-</span>from the best bars</h2>
          </div>
          <div className='sub-content'>
            <p>
              Every served drink is a masterpiece, a unique blend of ingredients and a perfect balance of flavors.
            </p>
            <div>
              <p className='md:text-3xl text-xl font-bold'>
                <span>4.5</span>/5
              </p>
              <p className='text-sm text-white-100'>
                More than 1000 customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='top-grid'>

        <div className='md:col-span-3'>
             <div className='noisy'>
                    <Image src="/images/abt1.png" width={1920} height={1080} alt="grid-img-1" />
             </div>
        </div>

                <div className='md:col-span-6'>
             <div className='noisy'>
                    <Image src="/images/abt2.png" width={1920} height={1080} alt="grid-img-2" />
             </div>
        </div>

                <div className='md:col-span-3'>
             <div className='noisy'>
                    <Image src="/images/abt5.png" width={1920} height={1080} alt="grid-img-5" />
             </div>
        </div>

      </div>

      <div className='bottom-grid'>
         <div className='md:col-span-8'>
             <div className='noisy'>
                    <Image src="/images/abt3.png" width={1920} height={1080} alt="grid-img-3" />
             </div>
        </div>
        <div className='md:col-span-4'>
             <div className='noisy'>
                    <Image src="/images/abt4.png" width={1920} height={1080} alt="grid-img-4" />
             </div>
        </div>
      </div>
        

    </section>
  )
}

export default About
