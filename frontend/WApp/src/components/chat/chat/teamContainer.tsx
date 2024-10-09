import { useState, useEffect } from "react";
import { findAll } from "@/services/userService";
import { UserChat } from "@/models/user";

import ChatItems from "./chatItems";
import WebsocketService from "@/services/wsService";
import { ChatRoomItem } from "@/models/chat";

const TeamContainer = () => {
  const [chats, setChats] = useState<ChatRoomItem[]>();

  useEffect(() => {
    WebsocketService.subscribe("/user/maria2543/queue/chats", (message) => {
      setChats(message);
    });
  }, []);

  console.log(chats);

  return (
    <div className="w-full h-screen  mt-3 pt-3 pb-44">
      <p className="text-lg">Menssagens</p>

      <div className="h-full pt-4 pr-6 gap-y-3 flex flex-col overflow-y-auto h-4/5 pb-16 scroll-container">
        {chats &&
          chats.map((chat) => (
            <ChatItems
              key={chat.id}
              name={chat.roomName}
              imgUrl={chat.imgUrl}
              latestMessage={chat.latestMessage}
              latestActivity={chat.latestActivity}
            />
          ))}
      </div>
    </div>
  );
};

export default TeamContainer;
