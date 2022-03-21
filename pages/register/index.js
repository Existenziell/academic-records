import Head from 'next/head'
import Link from 'next/link'

const Register = () => {
  return (
    <>
      <Head>
        <title>Register | Academic Records</title>
      </Head>

      <div className="pt-12">

        <h1 className='text-4xl text-center md:text-left mb-8'>Student Registration</h1>
        <div className='flex flex-col'>
          <p>Logged in as:<span className='font-bold ml-2 text-lg'>Jane Doe</span></p>
          <p>Role:<span className='font-bold ml-2 text-lg'>Teacher</span></p>
          <p>School:<span className='font-bold ml-2 text-lg'>Royal College Cozumel</span></p>
          <p>Reports:<span className='font-bold ml-2 text-lg'>15</span></p>
        </div>

        <hr className='border-b border-dashed border-gray-600 my-6' />

        <div className='flex flex-col items-start gap-4'>
          <Link href='/register/add'><a className='button'>Add new student</a></Link>
          <Link href='/register/add'><a className='button'>Add grade</a></Link>
        </div>
      </div>
    </>
  )
}

export default Register
