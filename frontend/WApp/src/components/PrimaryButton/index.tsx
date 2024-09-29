type props = {
  text: string
  onClick: () => void
}

const PrimaryButton = ({ text }: props) => {
  return (
    <button id='btn-primary' className="dark rounded-lg bg-btn w-full h-10 text-lg border hover:bg-btn-foreground transition-colors duration-300 ease-in-out">{text}</button>
  )
}

export default PrimaryButton