import Head from 'next/head'
import Link from 'next/link'
import { useState, useContext } from 'react'
import { ClimbingBoxLoader } from 'react-spinners'
import Nav from '../../components/Form/Nav'
import Step1 from '../../components/Form/Step1'
import Step2 from '../../components/Form/Step2'
import Step3 from '../../components/Form/Step3'
import { AppContext } from '../../context/AppContext'

const Register = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { currentStep, setCurrentStep } = useContext(AppContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // console.log(e.target)

    setTimeout(function () {
      setSuccess(true)
      setLoading(false)
      setCurrentStep(1)
    }, 1000)
  }

  return (
    <>
      <Head>
        <title>Register | Academic Records</title>
      </Head>

      <div className="pt-12">

        <h1 className='text-4xl text-center md:text-left mb-20'>Student Registration</h1>

        {success ?
          <div className='flex flex-col items-start'>
            <h1 className='text-2xl mb-2'>Transaction was successful</h1>
            <a href='https://ropsten.etherscan.io/tx/0x8a360917e01c35eb118de1792836f92770654f02c35d19ff51972e28de6c247a' className='link mb-8' target='_blank'>&rarr; Verify transaction on Blockchain</a>
            <Link href='/register'><a className='link'>Add more students</a></Link>
            <Link href='/account'><a className='link'>See Account</a></Link>
          </div>
          :
          loading ?
            <div className='mt-32 ml-40'>
              <ClimbingBoxLoader color={'var(--color-brand-dark)'} loading={loading} size={25} />
            </div>
            :
            <form onSubmit={handleSubmit} className='max-w-xl mx-auto pb-32'>
              {currentStep === 1 && <Step1 />}
              {currentStep === 2 && <Step2 />}
              {currentStep === 3 && <Step3 />}
              <Nav />
            </form>
        }
      </div>
    </>
  )
}

export default Register
