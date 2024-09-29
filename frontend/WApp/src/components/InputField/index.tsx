type props = { 
  placeholder: string,
  type?: string
}

const InputField = ({ placeholder, type }: props ) => {
  return (
    <input className="bg-card border rounded-lg p-2 w-80" type={type} placeholder={placeholder}/>
  )
}

export default InputField