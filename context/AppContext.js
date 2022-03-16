import { createContext, useContext, useState } from 'react'

export const AppContext = createContext()
export const localStorageKey = 'AR_FormData'

// App State
export const StateProvider = ({ children }) => {

  const [values, setValues] = useState({
    firstname: '',
    middlename: '',
    lastname: '',
    email: '',
    birthdate: '',
    gradelevel: '',
    satScore: '',
    actScore: '',
    cltScore: '',
    date: '',
  })

  const handleChange = ({ name, value }) => {
    setValues({ ...values, [name]: value })
    window.localStorage.setItem(localStorageKey, JSON.stringify({ ...values, [name]: value }))
  }

  return (
    <AppContext.Provider value={{ values, setValues, handleChange }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
