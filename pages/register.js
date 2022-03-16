import Head from 'next/head'
import Step1 from '../components/Form/Step1'
import Step2 from '../components/Form/Step2'
import Step3 from '../components/Form/Step3'

const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

  return (
    <>
      <Head>
        <title>Register | Academic Records</title>
      </Head>

      <div className="min-h-screen">
        <h1 className='text-4xl text-center md:text-left mb-20'>Student Registration</h1>

        <form onSubmit={handleSubmit}>
          <Step1 />
          <Step2 />
          <Step3 />
          <button type='submit' className='button'>Next</button>
        </form>

      </div>
    </>
  )
}

export default Register
