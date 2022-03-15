import { useEffect, useState } from 'react'
import Input from '../components/Form/Input';


const useStickyState = (defaultValue, key) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);

    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue));
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}


const Transcript = () => {

  const [mode, setMode] = useStickyState("week", "AR_mode");
  const [firstName, setFirstName] = useStickyState("", "AR_firstName");
  const [middleName, setMiddleName] = useStickyState("", "AR_middleName");
  const [lastName, setLastName] = useStickyState("", "AR_lastName");
  const [email, setEmail] = useStickyState("", "AR_email");

  return (
    <div className="min-h-screen">
      <h1 className='text-4xl text-center md:text-left mb-8'>Transcript</h1>

      <select onChange={e => setMode(e.target.value)} value={mode} className='mb-8'>
        <option value="day">Day</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
      </select>

      <div className='relative mb-8'>
        <Input
          type='text' id='firstname' name='firstname' value={firstName} placeholder='First Name'
          onChange={e => setFirstName(e.target.value)} required={true} disabled={false}
          styles='border border-brand-dark'
        />
      </div>
      <div className='relative mb-8'>
        <Input
          type='text' id='middlename' name='middlename' value={middleName} placeholder='Middle Name'
          onChange={e => setMiddleName(e.target.value)} required={true} disabled={false}
          styles='border border-brand-dark'
        />
      </div>
      <div className='relative mb-8'>
        <Input
          type='text' id='lastname' name='lastname' value={lastName} placeholder='Last Name'
          onChange={e => setLastName(e.target.value)} required={true} disabled={false}
          styles='border border-brand-dark'
        />
      </div>

      <div className='relative mb-8'>
        <Input
          type='email' id='email' name='email' value={email} placeholder='Email'
          onChange={e => setEmail(e.target.value)} required={true} disabled={false}
          styles='border border-brand-dark'
        />
      </div>
    </div>
  )
}

export default Transcript
