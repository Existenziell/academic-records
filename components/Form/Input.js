const Input = ({ type, id, name, value, placeholder, onChange, required, disabled, styles }) => {
  return (
    <>
      <input
        id={id} name={name} type={type} onChange={onChange} required={required} disabled={disabled} placeholder={placeholder} value={value}
        className={`${styles} peer h-10 w-full placeholder-transparent focus:outline-none bg-white/10 backdrop-blur-md rounded pl-4`} />
      <label
        htmlFor={id}
        className='absolute -top-5 left-0 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-4 peer-focus:-top-5 peer-focus:left-0 peer-focus:text-brand peer-focus:text-sm'>
        {placeholder}
      </label>
    </>
  )
}

export default Input
