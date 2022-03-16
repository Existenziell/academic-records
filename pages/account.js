import Head from 'next/head'
import { useEffect, useState } from 'react'
import { localStorageKey } from '../context/AppContext'

const Account = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const data = window.localStorage.getItem(localStorageKey)
    if (!data) setData({})
    setData(data.toString())
  }, [])

  return (
    <>
      <Head>
        <title>Account | Academic Records</title>
      </Head>

      <div className="min-h-screen">
        <h1 className='text-4xl text-center md:text-left mb-8'>Account</h1>
        <pre>{JSON.stringify(data, 4, null)}</pre>
      </div>
    </>
  )
}

export default Account
