import { Message } from "@/models/chat";

const InverseMessageItem = ({ content, sendAt }: Message) => {
  return (
    <div className="w-full flex justify-end">
      <div className="min-h-4 max-w-lg px-3 py-2 rounded-3xl bg-message-rcd">
        <p className="break-words">{content}</p>
        <div className="w-full flex justify-end px-2 font-thin text-sm">
          <p>
            {new Date(sendAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InverseMessageItem;
