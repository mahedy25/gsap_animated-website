'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger, SplitText)

const Hero = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const isMobile = useMediaQuery({ maxWidth: 768 })

  useGSAP(() => {
    requestAnimationFrame(() => {
      const heroSplit = new SplitText('.title', { type: 'chars, words' })
      const paragraphSplit = new SplitText('.subtitle', { type: 'lines' })

      heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

      gsap.from(heroSplit.chars, {
        y: 100,
        duration: 0.5,
        ease: 'expo.Out',
        stagger: 0.05,
      })

      gsap.from(paragraphSplit.lines, {
        opacity: 0,
        yPercent: 100,
        duration: 0.5,
        ease: 'expo.Out',
        stagger: 0.05,
        delay: 1,
      })

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
        .to('.right-leaf', { y: 200 }, 0)
        .to('.left-leaf', { y: -200 }, 0)

      const startValue = isMobile ? 'top 50%' : 'center 60%'
      const endValue = isMobile ? '120% top' : 'bottom top'

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: 'video',
          start: startValue,
          end: endValue,
          scrub: true,
          pin: true,
        },
      })

      if (videoRef.current) {
        videoRef.current.onloadedmetadata = () => {
          tl.to(videoRef.current!, {
            currentTime: videoRef.current!.duration,
          })
        }
      }

      // 🛠 Important: refresh ScrollTrigger after layout changes
      ScrollTrigger.refresh()
    })
  }, [])

  return (
    <>
      <section id='hero' className='noisy'>
        <h1 className='title'>Aroma</h1>

        <Image
          src='/images/hero-left-leaf.png'
          alt='left-leaf'
          className='left-leaf'
          width={1000}
          height={1000}
        />

        <Image
          src='/images/hero-right-leaf.png'
          alt='right-leaf'
          className='right-leaf'
          width={1000}
          height={1000}
        />

        <div className='body'>
          <div className='content'>
            <div className='space-y-5 hidden md:block'>
              <p className='mt-15'>classic. simple. fresh.</p>
              <p className='subtitle'>Sip a cocktail. Savor a moment.</p>
            </div>

            <div className='view-cocktails hidden md:block'>
              <p className='subtitle'>
                Every cocktail in our collection is a classic, simple, and fresh
                combination of ingredients & spices that will transport you to a
                world of flavors and aromas.
              </p>
              <Link href='#cocktails'>View Cocktails</Link>
            </div>
          </div>
        </div>
      </section>

      <div className='video absolute inset-0'>
        <video
          ref={videoRef}
          src='/videos/output.mp4'
          muted
          playsInline
          preload='auto'
        ></video>
      </div>
    </>
  )
}

export default Hero
