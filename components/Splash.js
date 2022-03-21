import Link from 'next/link'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Splash = () => {
  const { isLoggedIn, setLoggedIn } = useContext(AppContext)

  return (
    <div className="fixed w-full h-full top-0 left-0 z-20 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-4">
      <Link href='/account'><a className='button text-lg'>Login as student</a></Link>
      <Link href='/register'><a className='button text-lg'>Login as teacher</a></Link>
      <Link href='/reports'><a className='button text-lg'>Login as admin</a></Link>
      {/* <button className="button" onClick={() => setLoggedIn('student')}>Login as student</button>
      <button className="button" onClick={() => setLoggedIn('teacher')}>Login as teacher</button>
      <button className="button" onClick={() => setLoggedIn('admin')}>Login as teacher</button> */}
    </div>
  )
}

export default Splash
