import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {

  return (
    <div>
      <h1 className='text-4xl text-center md:text-left mb-12'>Academic Records</h1>
      <div className='sm:flex items-center justify-start space-x-4 mb-8 md:mb-0'>
        <div className='text-center'>
          <Image src='/logo.png' width={422} height={154} alt='Logo' />
        </div>
        <p className='max-w-lg'>The internet site that securely records, stores and generates professional school records and reports, meeting the constantly changing needs of today's private and home school academies!</p>
      </div>

      <Link href='/register'><a><button className='button block my-8 mx-auto'>Start</button></a></Link>

      <div className='my-8 bg-brand-dark/50 dark:bg-brand/50 backdrop-blur-md text-white dark:text-brand-dark p-4 rounded-sm italic'>
        <h2>Testimonial Tammy White:</h2>
        <p>AR has saved me an incredible amount of time and helped my children gain admission into the colleges of their choice...</p>
      </div>

      <div className='md:flex items-start justify-between space-x-6'>
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
  )
}
