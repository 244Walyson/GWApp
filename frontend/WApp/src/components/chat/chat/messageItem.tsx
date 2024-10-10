import { Message } from "@/models/chat";

const MessageItem = ({ content, sendAt }: Message) => {
  return (
    <div className="w-full flex justify-start">
      <div className="min-h-4 max-w-lg bg-message-snd py-2 px-3 rounded-3xl">
        <p className="break-words">{content}</p>
        <div className="w-full flex justify-end px-2 font-thin text-sm">
          <p>
            {sendAt
              ? new Date(sendAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "Invalid date"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
