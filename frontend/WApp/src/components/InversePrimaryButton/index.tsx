import "./index.css"

type props = {
  text: string
  onClick: () => void
}

const InversePrimaryButton = ({ text }: props) => {
  return (
    <button id='btn-inverse-primary'>{text}</button>
  )
}

export default InversePrimaryButton