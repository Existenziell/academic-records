import { useEffect, useContext } from 'react'
import { AppContext, localStorageKey } from '../../context/AppContext'
import DPicker from './DatePicker';
import BPicker from './BirthdayPicker';

const Step3 = () => {

  const { values, setValues, handleChange } = useContext(AppContext)

  useEffect(() => {
    const stickyValues = window.localStorage.getItem(localStorageKey)
    if (stickyValues !== null) {
      setValues({ ...JSON.parse(stickyValues) })
    }
  }, [])

  return (
    <>
      <div className='flex items-center justify-between mb-8 mr-2 w-full'>
        <label
          htmlFor='gradelevel'
          className='mr-4 min-w-max'>
          Date of Birth:
        </label>

        <BPicker name='birthdate' />
      </div>
      <DPicker name='date' styles='my-8' />
    </>
  )
}

export default Step3
