import { useEffect, useState, useContext } from 'react'
import Head from 'next/head'
import Input from '../components/Form/Input'
import { AppContext, localStorageKey } from '../context/AppContext'

const Register = () => {

  const { values, setValues, handleChange, handleSubmit } = useContext(AppContext)

  useEffect(() => {
    const stickyValues = window.localStorage.getItem(localStorageKey)
    if (stickyValues !== null) {
      setValues({ ...JSON.parse(stickyValues) })
    }
  }, [])

  return (
    <>
      <Head>
        <title>Register | Academic Records</title>
      </Head>

      <div className="min-h-screen">
        <h1 className='text-4xl text-center md:text-left mb-20'>Student Registration</h1>

        <form onSubmit={handleSubmit}>

          <div className='flex items-center justify-between'>
            <div className='relative mb-8 mr-2 w-full'>
              <Input
                type='text' id='firstname' name='firstname' value={values.firstname} placeholder='First Name'
                onChange={e => handleChange(e.target)} required={true} disabled={false}
                styles='border border-brand-dark'
              />
            </div>
            <div className='relative mb-8 mr-2 w-full'>
              <Input
                type='text' id='middlename' name='middlename' value={values.middlename} placeholder='Middle Name'
                onChange={e => handleChange(e.target)} required={true} disabled={false}
                styles='border border-brand-dark'
              />
            </div>
            <div className='relative mb-8 w-full'>
              <Input
                type='text' id='lastname' name='lastname' value={values.lastname} placeholder='Last Name'
                onChange={e => handleChange(e.target)} required={true} disabled={false}
                styles='border border-brand-dark'
              />
            </div>
          </div>

          <div className='relative mb-8'>
            <Input
              type='email' id='email' name='email' value={values.email} placeholder='Email'
              onChange={e => handleChange(e.target)} required={true} disabled={false}
              styles='border border-brand-dark'
            />
          </div>

          <div className='relative mb-8 mr-2 w-full'>
            <label
              htmlFor='gradelevel'
              className='mr-4'>
              Grade level to begin reporting on Transcript:
            </label>
            <select onChange={e => handleChange(e.target)} value={values.gradelevel} className='border border-brand-dark p-2 rounded text-brand-dark' name='gradelevel' id='gradelevel'>
              <option value="1st">1st</option>
              <option value='2nd'>2nd</option>
              <option value='3rd'>3rd</option>
              <option value='4th'>4th</option>
              <option value='5th'>5th</option>
              <option value='6th'>6th</option>
              <option value='7th'>7th</option>
              <option value='8th'>8th</option>
              <option value='9th'>9th</option>
              <option value='10t'>10th</option>
              <option value='11t'>11th</option>
              <option value='12t'>12th</option>
              <option value='Fre'>Freshman</option>
              <option value='Sop'>Sophomore</option>
              <option value='Jun'>Junior</option>
              <option value='Sen'>Senior</option>
            </select>
          </div>

          <div className='flex items-center justify-between'>
            <div className='relative mb-8 mr-2 w-full'>
              <Input
                type='number' id='satScore' name='satScore' value={values.satScore} placeholder='SAT Score'
                onChange={e => handleChange(e.target)} required={true} disabled={false}
                styles='border border-brand-dark'
              />
            </div>
            <div className='relative mb-8 mr-2 w-full'>
              <Input
                type='number' id='actScore' name='actScore' value={values.actScore} placeholder='ACT Score'
                onChange={e => handleChange(e.target)} required={true} disabled={false}
                styles='border border-brand-dark'
              />
            </div>
            <div className='relative mb-8 mr-2 w-full'>
              <Input
                type='number' id='cltScore' name='cltScore' value={values.cltScore} placeholder='CLT Score'
                onChange={e => handleChange(e.target)} required={true} disabled={false}
                styles='border border-brand-dark'
              />
            </div>
          </div>

          <button type='submit' className='button'>Next</button>
        </form>

      </div>
    </>
  )
}

export default Register
