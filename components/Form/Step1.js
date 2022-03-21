import { useEffect, useContext } from 'react'
import Input from './Input'
import { AppContext, localStorageKey } from '../../context/AppContext'
import { motion } from 'framer-motion'

const Step1 = () => {

  const { values, setValues, handleChange } = useContext(AppContext)

  useEffect(() => {
    const stickyValues = window.localStorage.getItem(localStorageKey)
    if (stickyValues !== null) {
      setValues({ ...JSON.parse(stickyValues) })
    }
  }, [])

  return (
    <motion.div
      animate={{ x: [1000, -100, 0] }}
      transition={{ ease: "easeInOut", duration: 1 }}
    // initial={{ x: 1000 }}
    >
      <div className='flex flex-col items-center justify-between'>
        <div className='relative mb-8 mr-2 w-full'>
          <Input
            type='text' id='firstname' name='firstname' value={values.firstname} placeholder='First Name'
            handleChange={handleChange} required={true} disabled={false}
            styles='border border-brand-dark'
          />
        </div>
        <div className='relative mb-8 mr-2 w-full'>
          <Input
            type='text' id='middlename' name='middlename' value={values.middlename} placeholder='Middle Name'
            handleChange={handleChange} required={false} disabled={false}
            styles='border border-brand-dark'
          />
        </div>
        <div className='relative mb-8 w-full'>
          <Input
            type='text' id='lastname' name='lastname' value={values.lastname} placeholder='Last Name'
            handleChange={handleChange} required={true} disabled={false}
            styles='border border-brand-dark'
          />
        </div>
      </div>

      <div className='relative mb-8'>
        <Input
          type='email' id='email' name='email' value={values.email} placeholder='Email'
          handleChange={handleChange} required={true} disabled={false}
          styles='border border-brand-dark'
        />
      </div>
    </motion.div>
  )
}

export default Step1
