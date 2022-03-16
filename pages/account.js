import Head from 'next/head'
import { useEffect, useState } from 'react'
import { localStorageKey } from '../context/AppContext'
import Link from 'next/link'

const Account = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    const data = window.localStorage.getItem(localStorageKey)
    if (!data) setData({})
    setData(JSON.parse(data))
  }, []);

  if (data === null) {
    return (
      <div className='mt-8 text-center leading-loose'>
        <h1>No data yet.</h1>
        Please <Link href='/register'><a className='link'>register</a></Link> first.
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Account | Academic Records</title>
      </Head>

      <div className="min-h-screen">
        <h1 className='text-4xl text-center md:text-left mb-8'>Account</h1>
        <h2 className='mb-2 text-lg'>Stored data:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  )
}

export default Account
