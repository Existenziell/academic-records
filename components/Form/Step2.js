import { useEffect, useContext } from 'react'
import SelectList from './SelectList'
import Input from './Input'
import { AppContext, localStorageKey } from '../../context/AppContext'

const Step2 = () => {

  const { values, setValues, handleChange } = useContext(AppContext)

  const grades = [
    { value: '1st', label: '1st' },
    { value: '2nd', label: '2nd' },
    { value: '3rd', label: '3rd' },
    { value: '4th', label: '4th' },
    { value: '5th', label: '5th' },
    { value: '6th', label: '6th' },
    { value: '7th', label: '7th' },
    { value: '8th', label: '8th' },
    { value: '9th', label: '9th' },
    { value: '10t', label: '10th' },
    { value: '11t', label: '11th' },
    { value: '12t', label: '12th' },
    { value: 'Fre', label: 'Freshman' },
    { value: 'Sop', label: 'Sophomore' },
    { value: 'Jun', label: 'Junior' },
    { value: 'Sen', label: 'Senior' },
  ]

  useEffect(() => {
    const stickyValues = window.localStorage.getItem(localStorageKey)
    if (stickyValues !== null) {
      setValues({ ...JSON.parse(stickyValues) })
    }
  }, [])

  return (
    <div>
      <SelectList
        options={grades}
        name='gradelevel'
        label='Grade level to begin reporting on Transcript:'
        styles='mb-8'
      />

      <div className='flex items-center justify-between'>
        <div className='relative mb-8 mr-2 w-full'>
          <Input
            type='number' id='satScore' name='satScore' value={values.satScore} placeholder='SAT Score'
            handleChange={handleChange} required={true} disabled={false}
            styles='border border-brand-dark'
          />
        </div>
        <div className='relative mb-8 mr-2 w-full'>
          <Input
            type='number' id='actScore' name='actScore' value={values.actScore} placeholder='ACT Score'
            handleChange={handleChange} required={true} disabled={false}
            styles='border border-brand-dark'
          />
        </div>
        <div className='relative mb-8 mr-2 w-full'>
          <Input
            type='number' id='cltScore' name='cltScore' value={values.cltScore} placeholder='CLT Score'
            handleChange={handleChange} required={true} disabled={false}
            styles='border border-brand-dark'
          />
        </div>
      </div>
    </div>
  )
}

export default Step2
