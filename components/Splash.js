import Link from 'next/link'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Splash = ({ setSplashOpen }) => {

  return (
    <div className="fixed w-full h-full top-0 left-0 z-20 bg-white/90 flex flex-col items-center justify-center space-y-4">
      <Link href='/account'><a className='button text-lg'>Login as student</a></Link>
      <Link href='/register'><a className='button text-lg'>Login as teacher</a></Link>
      <Link href='/reports'><a className='button text-lg'>Login as admin</a></Link>
      <button className="absolute top-0 right-4 text-xl font-mono bg-brand-dark px-4 py-2 text-white rounded-full hover:bg-brand-dark/80" onClick={() => setSplashOpen(false)}>x</button>
    </div>
  )
}

export default Splash
