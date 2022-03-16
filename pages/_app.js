// https://nextjs.org/docs/advanced-features/custom-app
// Next.js uses the App component to initialize pages.

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import Nav from '../components/Nav'
import DarkModeToggle from '../components/DarkModeToggle'
import { StateProvider } from '../context/AppContext'
import { useContext } from 'react'

function App({ Component, pageProps }) {

  return (
    <StateProvider>
      <Head>
        <title>Academic Records</title>
        <meta name='description' content='The internet site that securely records, stores and generates professional school records and reports, meeting the constantly changing needs of today&apos;s private and home school academies!' />
        <link rel='icon' href='/favicon/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
      </Head>

      <NextNprogress startPosition={0.3} stopDelayMs={100} height={3} showOnShallow={true} color='var(--color-brand-dark)' />
      <Nav />
      <DarkModeToggle />

      <main className='w-full pt-8 pb-16 px-4 md:px-8 text-brand-dark bg-white bg-repeat dark:bg-brand-dark dark:text-brand'>
        <Component {...pageProps} />
      </main>
    </StateProvider>
  )
}

export default App
