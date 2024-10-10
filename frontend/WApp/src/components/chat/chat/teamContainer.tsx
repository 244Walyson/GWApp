import { useState, useEffect, useContext } from "react";

import ChatItems from "./chatItems";
import WebsocketService from "@/services/wsService";
import { ChatRoomItem } from "@/models/chat";
import { useChat } from "@/context/chatContext";
import { ContextToken } from "@/context/contextToken";

const TeamContainer = () => {
  const [chats, setChats] = useState<ChatRoomItem[]>([]);
  const { setChat } = useChat();
  const { contextTokenPayload } = useContext(ContextToken);

  useEffect(() => {
    const handleIncomingMessage = (newMessages: ChatRoomItem[]) => {
      setChats((prevChats) => {
        const chatIds = new Set(newMessages.map((m) => m.id));
        const filteredChats = prevChats.filter((c) => !chatIds.has(c.id));
        return [...newMessages, ...filteredChats];
      });
    };

    WebsocketService.subscribe(
      `/user/${contextTokenPayload?.nick}/queue/chats`,
      handleIncomingMessage
    );
  }, []);

  console.log(chats);

  return (
    <div className="w-full h-screen  mt-3 pt-3 pb-44">
      <p className="text-lg">Menssagens</p>

      <div className="h-full pt-4 pr-6 gap-y-3 flex flex-col overflow-y-auto pb-16 scroll-container">
        {chats &&
          chats.map((chat) => (
            <ChatItems
              key={chat.id}
              name={chat.roomName}
              imgUrl={chat.imgUrl}
              latestMessage={chat.latestMessage}
              latestActivity={chat.latestActivity}
              onClick={() => setChat(chat)}
            />
          ))}
      </div>
    </div>
  );
};

export default TeamContainer;
