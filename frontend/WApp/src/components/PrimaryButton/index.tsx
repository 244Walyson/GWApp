import "./index.css"

type props = {
  text: string
  onClick: () => void
}

const PrimaryButton = ({ text }: props) => {
  return (
    <button id='btn-primary'>{text}</button>
  )
}

export default PrimaryButton