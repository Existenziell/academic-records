import Head from 'next/head'
import Link from 'next/link'
import { connectToDatabase } from "../../lib/mongodb"

const Register = ({ grades }) => {

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
        <div>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl'>Recorded Grades:</h2>
            <Link href='/register/add'><a className='button text-xs'>Add grades</a></Link>
          </div>

          <table cellPadding="10" className='w-full text-sm'>
            <tbody className='whitespace-nowrap'>
              <tr className='bg-brand-dark/60 text-white text-base dark:bg-brand dark:text-brand-dark'>
                <td>Name</td>
                <td>Email</td>
                <td>Birthdate</td>
                <td>Message</td>
                <td>satScore</td>
                <td>actScore</td>
                <td>cltScore</td>
              </tr>
              {grades.map((g, i) => (
                <tr key={i}>
                  <td> {g.firstname} {g.middlename} {g.lastname}</td>
                  <td>{g.email}</td>
                  <td>{g.birthdate}</td>
                  <td className='truncate max-w-xs overflow-hidden'>{g.message}</td>
                  <td>{g.satScore}</td>
                  <td>{g.actScore}</td>
                  <td>{g.cltScore}</td>
                </tr>
              )
              )}
            </tbody>
          </table>

        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase()
  let grades = await db
    .collection("grades")
    .find()
    .toArray()
  grades = JSON.parse(JSON.stringify(grades))

  return {
    props: { grades }, // will be passed to the page component as props
  }
}

export default Register
