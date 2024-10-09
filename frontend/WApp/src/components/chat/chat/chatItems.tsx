type ChatItemsProps = {
  name: string
  imgUrl: string
  latestMessage: string
  latestActivity: string
}

const ChatItems = ({ name, imgUrl, latestMessage, latestActivity }: ChatItemsProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center">
        <div className="flex items-center w-full">
          <img src={imgUrl} alt={name} className="w-14 h-14 rounded-full" />
          <div className="ml-3 w-full">
            <div className="flex justify-between w-full">
            <h3 className="font-semibold">{name}</h3>
            <p className="ml-2 text-gray-400">{latestActivity}</p>
            </div>
            <p className="text-gray-400">{latestMessage}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ChatItems