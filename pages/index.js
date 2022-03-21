import { useState } from 'react'
import Image from 'next/image'
import Splash from '../components/Splash'
import { motion } from 'framer-motion'

export default function Home() {
  const [splashOpen, setSplashOpen] = useState(false)

  return (
    <>
      <div className='pt-12'>
        <h1 className='text-4xl md:text-6xl text-center'>Academic Records</h1>
        <div className='flex flex-col items-center justify-center space-x-4 w-full'>

          <motion.div animate={{ y: [-200, 50, -30, 20, -10, 0] }}
            transition={{ ease: "easeInOut", duration: 1 }} className='text-center my-12'>
            <Image src='/logo.png' width={212} height={118} alt='Logo' />
          </motion.div>
          <p className='max-w-lg text-xl text-justify'>The internet site that securely records, stores and generates professional school records and reports, meeting the constantly changing needs of today's private and home school academies!</p>
        </div>

        <button onClick={() => setSplashOpen(true)} className='button block my-16 mx-auto text-2xl'>Start</button>

        <div className='max-w-lg mx-auto mb-16 bg-brand-dark/50 dark:bg-brand/50 backdrop-blur-md text-white dark:text-brand-dark p-4 rounded-sm italic'>
          <h2>Testimonial Tammy White:</h2>
          <p>AR has saved me an incredible amount of time and helped my children gain admission into the colleges of their choice...</p>
        </div>

        <div className='md:flex items-start justify-between space-x-6 px-8'>
          <div>
            <h2 className='text-2xl h-16'>Academic Records gives you professional access to:</h2>
            <ul className='ml-6 mt-4 list-disc leading-relaxed'>
              <li>Student records</li>
              <li>Report cards</li>
              <li>GPA Calculations</li>
              <li>Transcripts</li>
              <li>Immunization record</li>
              <li>
                Student Resume builder including:
                <ul className='ml-6 list-disc'>
                  <li>Extra-curricular activity summaries</li>
                  <li>Awards/achievements</li>
                  <li>Competitions</li>
                  <li>Community service, missions service</li>
                  <li>Organizations</li>
                  <li>Work experience</li>
                  <li>Conduct records</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <h2 className='text-2xl mt-8 md:mt-0 h-16'>Why choose Academic Records?</h2>
            <ul className='ml-6 mt-4 list-disc leading-relaxed'>
              <li>Low-Cost Total Solution – Saves Time &amp; Money</li>
              <li>Risk-Free – Safe, Secure Data Storage</li>
              <li>Produce Professional Reports for Your Academic and Extracurricular Needs</li>
            </ul>
          </div>
        </div>

      </div>

      {splashOpen &&
        <Splash setSplashOpen={setSplashOpen} />
      }
    </>
  )
}
