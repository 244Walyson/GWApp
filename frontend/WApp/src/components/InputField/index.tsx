import "./index.css"

type props = { 
  placeholder: string,
  type?: string
}

const InputField = ({ placeholder, type }: props ) => {
  return (
    <input id='input-field' type={type} placeholder={placeholder}/>
  )
}

export default InputField