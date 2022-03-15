import NextNprogress from 'nextjs-progressbar'
import Footer from './Footer'
import Nav from './Nav'
import DarkModeToggle from './DarkModeToggle'

const Layout = ({ children }) => {
  return (
    <>
      <NextNprogress startPosition={0.3} stopDelayMs={100} height={3} showOnShallow={true} color='var(--color-brand-dark)' />
      <Nav />
      <DarkModeToggle />

      <main className='w-full pt-8 pb-16 px-4 md:px-8 text-brand-dark bg-white bg-repeat dark:bg-brand-dark dark:text-brand'>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default Layout
