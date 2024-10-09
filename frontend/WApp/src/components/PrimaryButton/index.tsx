type props = {
  text: string
  type?: 'submit'
  onClick: () => void
}

const PrimaryButton = ({ text, type }: props) => {
  return (
    <button 
    className="dark rounded-lg bg-btn w-full h-10 text-lg border hover:bg-btn-foreground transition-colors duration-300 ease-in-out"
    type={type}>
      {text}
    </button>
  )
}

export default PrimaryButton