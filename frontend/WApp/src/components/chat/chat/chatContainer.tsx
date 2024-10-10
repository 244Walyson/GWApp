import { Send } from "lucide-react";
import { SectionHeader } from "../../sectionHeader";
import { Input } from "@/components/ui/input";
import React, { useContext, useEffect, useState } from "react";

import WebsocketService from "@/services/wsService";
import MessageItem from "./messageItem";
import InverseMessageItem from "./inverseMessageItem";
import DayItem from "./dayItem";
import { Message } from "@/models/chat";
import { ContextToken } from "@/context/contextToken";
import { useChat } from "@/context/chatContext";
import ChatHeader from "./chatHeader";

const ChatContainer = () => {
  const { contextTokenPayload } = useContext(ContextToken);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const { chat } = useChat();

  useEffect(() => {
    WebsocketService.subscribe(
      `/user/${chat?.id}/queue/messages`,
      (message) => {
        if ("roomName" in message) {
          setMessages(message.messages);
          return;
        }
        setMessages((prevMessages) => {
          const isDuplicate = prevMessages.some((msg) => msg.id === message.id);
          return isDuplicate ? prevMessages : [...prevMessages, message];
        });
      }
    );
  }, [chat]);

  if (chat) {
    // Use chat properties safely
    console.log(chat.roomName); // Access properties of chat
  } else {
    // Handle the case when chat is not selected
    console.log("No chat selected");
  }

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newMessage.trim()) {
      WebsocketService.sendMessage("/app/chat/U12", {
        content: newMessage,
      });
      setNewMessage("");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="border-b border-b-secondary pl-3 pb-3 flex gap-3">
        {chat && (
          <ChatHeader
            name={chat.roomName}
            description="app"
            imgUrl={chat.imgUrl}
          />
        )}
      </div>

      <div className="w-full h-full flex flex-col pb-52">
        <div className="flex-grow overflow-y-auto px-7 pt-10 flex flex-col gap-4 scroll-container">
          {messages.map((message, index) => {
            const currentDate = new Date(message.sendAt).toLocaleDateString();
            const prevDate =
              index > 0
                ? new Date(messages[index - 1].sendAt).toLocaleDateString()
                : null;

            return (
              <div key={message.id}>
                {currentDate !== prevDate && <DayItem day={currentDate} />}
                {message.sender.nickname === contextTokenPayload?.nick ? (
                  <MessageItem
                    id={message.id}
                    content={message.content}
                    sendAt={message.sendAt}
                    sender={message.sender}
                  />
                ) : (
                  <InverseMessageItem
                    id={message.id}
                    content={message.content}
                    sendAt={message.sendAt}
                    sender={message.sender}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-8/12 fixed bottom-0 px-7 items-center flex h-20 bg-card">
        <form
          onSubmit={sendMessage}
          className="flex items-center w-full px-4 border rounded-3xl bg-card"
        >
          <Input
            type="text"
            placeholder="Digite sua mensagem"
            className="border-none focus:outline-none text-base"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button className="ml-3 text-primary" type="submit">
            <Send className="w-6 h-6" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatContainer;
