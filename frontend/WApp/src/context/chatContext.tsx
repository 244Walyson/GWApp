import React, { createContext, useContext, useState } from "react";
import { ChatRoomItem } from "@/models/chat";

type ChatContextType = {
  chat: ChatRoomItem | null;
  setChat: (chat: ChatRoomItem) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [chat, setChat] = useState<ChatRoomItem | null>(null);

  const updateChat = (chat: ChatRoomItem) => {
    setChat(chat);
  };

  return (
    <ChatContext.Provider value={{ chat, setChat: updateChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
