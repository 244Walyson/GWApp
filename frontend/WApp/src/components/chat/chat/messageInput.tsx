type MessageInputProps = {
  type: string;
  placeholder: string;
}

const MessageInput = ({ type, placeholder }: MessageInputProps) => {
  return (
    <input className="bg-card h-full w-full outline-none text-lg py-2" type={type} placeholder={placeholder}/>

  )
}

export default MessageInput