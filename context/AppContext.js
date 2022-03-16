import { createContext, useContext, useState } from 'react'

export const AppContext = createContext()
export const localStorageKey = 'AR_FormData'

// App State
export const StateProvider = ({ children }) => {

  const [values, setValues] = useState({
    gradelevel: '',
    satScore: '',
    actScore: '',
    cltScore: '',
    firstname: '',
    middlename: '',
    lastname: '',
    email: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target, values)
  }

  const handleChange = (target) => {
    setValues({ ...values, [target.name]: target.value })
    window.localStorage.setItem(localStorageKey, JSON.stringify({ ...values, [target.name]: target.value }))
  }

  return (
    <AppContext.Provider value={{ values, setValues, handleChange, handleSubmit }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
