'use client'
import React from 'react'
import { featureLists, goodLists } from '../../constants'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'

const Art = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  useGSAP(() => {
    const start = isMobile ? 'top 20%' : 'top top'

    const maskedTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#art',
        start,
        end: 'bottom center',
        scrub: 1.5,
        pin: true,
      },
    })

    maskedTimeline
      .to('.will-fade', {
        opacity: 0,
        stagger: 1.5,
        ease: 'power1.inOut',
      })
      .to('.masked-img', {
        scale: 1.3,
        ease: 'power1.inOut',
        maskPosition: 'center',
        maskSize: '400%',
        duration: 1,
      })
      .to('#masked-content', {
        opacity: 1,
        ease: 'power1.inOut',
        duration: 1,
      })
  })

  return (
    <div id='art'>
      <div className='container mx-auto h-full pt-20'>
        <h2 className='will-fade'>The Art</h2>

        <div className='content'>
          <ul className='space-y-4 will-fade'>
            {goodLists.map((feature, index) => (
              <li key={index} className='flex items-center gap-2'>
                <Image
                  src='/images/check.png'
                  width={5}
                  height={5}
                  alt='check'
                />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
          <div className='cocktail-img'>
            <Image
              src='/images/under-img.jpg'
              width={1920}
              height={1080}
              alt='cocktail'
              className='abs-center masked-img size-full object-contain'
            />
          </div>
          <ul className='space-y-4 will-fade'>
            {featureLists.map((feature, index) => (
              <li key={index} className='flex items-center justify-start gap-2'>
                <Image
                  src='/images/check.png'
                  width={5}
                  height={5}
                  alt='check'
                />
                <p className='md:w-fit w-60'>{feature}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='masked-container'>
          <h2 className='will-fade'>Sip-Worthy Art</h2>
          <div id='masked-content' className=''>
            <h3>Made with Passion, Poured with Care</h3>
            <p>This is not just a cocktail. This is a story.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Art
