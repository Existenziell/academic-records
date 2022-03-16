import { useEffect, useContext } from 'react'
import Input from './Input'
import { AppContext, localStorageKey } from '../../context/AppContext'

const Step2 = () => {

  const { values, setValues, handleChange } = useContext(AppContext)

  useEffect(() => {
    const stickyValues = window.localStorage.getItem(localStorageKey)
    if (stickyValues !== null) {
      setValues({ ...JSON.parse(stickyValues) })
    }
  }, [])

  return (
    <div>
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
    </div>
  )
}

export default Step2
