type ChatHeaderProps = {
  name: string
  description: string
}

const ChatHeader = ({ name, description }: ChatHeaderProps ) => {
  return (
    <div>
    <h2 className="text-primary text-2xl font-semibold">{name}</h2>

    <p className="font-light">{description}</p>

  </div>
  )
}

export default ChatHeader